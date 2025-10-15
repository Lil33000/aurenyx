"use client";
import { useEffect, useRef } from "react";

export default function GoldenParticles({
  density = 60,
  color = "#c9a961",
  speed = 0.25,
  mouseForce = 100, // rayon d’influence de la souris
  repelStrength = 0.15, // force de répulsion
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;

    // 🎯 Resize + initialisation
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // 🌌 Particules initiales
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.6 + 0.8,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
    };

    // 🖱️ Suivi du curseur
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    // ✨ Boucle de rendu
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // --- Interaction avec la souris ---
        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseForce) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseForce - dist) / mouseForce;
            p.vx += Math.cos(angle) * force * repelStrength;
            p.vy += Math.sin(angle) * force * repelStrength;
          }
        }

        // --- Déplacement naturel ---
        p.x += p.vx;
        p.y += p.vy;

        // --- Frottement subtil pour lisser le mouvement ---
        p.vx *= 0.98;
        p.vy *= 0.98;

        // --- Rebond sur les bords ---
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // --- Dessin des particules ---
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = `${color}70`;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `${color}cc`;
        ctx.fill();

        // --- Connexions ---
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = `${color}25`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [density, color, speed, mouseForce, repelStrength]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.3] pointer-events-none"
    />
  );
}
