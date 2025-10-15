"use client";
import { useEffect, useRef } from "react";

/**
 * 🌟 GoldenOrbit — effet visuel inspiré du logo Aurenyx
 * Cercles et arcs dorés animés avec interaction du curseur
 */
export default function GoldenOrbit({
  rings = 7,
  color = "#C9A961",
  pulseSpeed = 0.002,
  mouseInfluence = 0.05,
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    });

    const draw = () => {
      const { width, height } = canvas;
      const cx = width / 2;
      const cy = height / 2;
      ctx.clearRect(0, 0, width, height);

      time += pulseSpeed;

      // Déplacement subtil du centre selon la souris
      const offsetX = mouse.current.x * width * mouseInfluence;
      const offsetY = mouse.current.y * height * mouseInfluence;

      // Gradient radial pour l’ambiance
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, width / 1.2);
      gradient.addColorStop(0, "rgba(201,169,97,0.05)");
      gradient.addColorStop(1, "rgba(0,0,0,0.3)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Cercles principaux
      const maxRadius = Math.min(width, height) * 0.45;

      for (let i = 0; i < rings; i++) {
        const phase = time + i * 0.4;
        const radius =
          maxRadius * (i / rings) * (1 + 0.06 * Math.sin(time * 3 + i));

        ctx.beginPath();
        ctx.arc(cx + offsetX, cy + offsetY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${color}${Math.floor(100 - i * 10)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = 1.2 + Math.sin(phase) * 0.3;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.stroke();

        // Arcs orbitaux inspirés du logo
        const orbitCount = 10;
        for (let j = 0; j < orbitCount; j++) {
          const angle = (j / orbitCount) * Math.PI * 2 + phase * 0.7;
          const arcRadius = radius * 0.95;
          const arcLength = Math.PI / 10 + Math.sin(time + j) * 0.05;

          ctx.beginPath();
          ctx.arc(
            cx + offsetX * 0.8,
            cy + offsetY * 0.8,
            arcRadius,
            angle,
            angle + arcLength
          );
          ctx.strokeStyle = `${color}${Math.floor(120 - i * 10)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Pulsation douce au centre (coeur lumineux)
      const corePulse = 5 + Math.sin(time * 3) * 2;
      ctx.beginPath();
      ctx.arc(cx + offsetX * 0.5, cy + offsetY * 0.5, corePulse * 1.2, 0, Math.PI * 2);
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        corePulse * 8
      );
      glow.addColorStop(0, `${color}cc`);
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fill();

      animationFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrame);
  }, [rings, color, pulseSpeed, mouseInfluence]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none"
    />
  );
}
