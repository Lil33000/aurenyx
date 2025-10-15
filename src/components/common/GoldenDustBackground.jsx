"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AuroraBackground({
  colorStops = ["#fff8e1", "#fbe7a1", "#e3c97a", "#fff"],
  speed = 0.4,
  amplitude = 0.6,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let t = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    colorStops.forEach((c, i) => gradient.addColorStop(i / colorStops.length, c));

    const render = () => {
      t += speed;
      ctx.clearRect(0, 0, width, height);
      const waveHeight = height * amplitude * 0.4;

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      colorStops.forEach((c, i) => gradient.addColorStop(i / colorStops.length, c));
      ctx.fillStyle = gradient;

      ctx.beginPath();
      for (let x = 0; x <= width; x++) {
        const y =
          Math.sin(x * 0.002 + t * 0.02) * waveHeight +
          Math.sin(x * 0.001 - t * 0.015) * waveHeight * 0.6 +
          height / 2;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      animationFrame = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [colorStops, speed, amplitude]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-[0.3]"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Subtle golden overlay */}
      <motion.div
        className="absolute inset-0  pointer-events-none"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
