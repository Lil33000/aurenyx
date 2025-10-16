"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function GoldenParticles({
  density = 60,
  color = "#c9a961",
  speed = 0.25,
  mouseForce = 100,
  repelStrength = 0.15,
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let particles = [];
    let animationFrame;

    // ✅ Détection mobile
    const isMobile = window.innerWidth < 768;

    // Réduction auto pour mobile
    const mobileDensity = isMobile ? Math.floor(density * 0.4) : density;
    const mobileSpeed = isMobile ? speed * 0.4 : speed;
    const mobileMouseForce = isMobile ? 0 : mouseForce;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < mobileDensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (isMobile ? 1.2 : 1.6) + 0.8,
          vx: (Math.random() - 0.5) * mobileSpeed,
          vy: (Math.random() - 0.5) * mobileSpeed,
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!isMobile) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        mouse.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ⚡️ Moins de calculs sur mobile
      const connectionDistance = isMobile ? 60 : 120;
      const step = isMobile ? 2 : 1;

      for (let i = 0; i < particles.length; i += step) {
        const p = particles[i];

        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mobileMouseForce) {
            const angle = Math.atan2(dy, dx);
            const force = (mobileMouseForce - dist) / mobileMouseForce;
            p.vx += Math.cos(angle) * force * repelStrength;
            p.vy += Math.sin(angle) * force * repelStrength;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = `${color}40`;
        ctx.shadowBlur = 8;
        ctx.fillStyle = `${color}cc`;
        ctx.fill();

        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < connectionDistance) {
              ctx.strokeStyle = `${color}22`;
              ctx.lineWidth = 0.3;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

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
      className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
