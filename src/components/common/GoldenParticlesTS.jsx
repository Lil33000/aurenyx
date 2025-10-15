"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function GoldenParticlesTS({ density = 60, color = "#C9A961" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false }, // on va s'occuper de sizing manuellement
    particles: {
      number: { value: density, density: { enable: true, area: 800 } },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: true },
      size: { value: { min: 0.5, max: 2 }, random: true },
      links: {
        enable: true,
        distance: 150,
        color: color,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="golden-particles"
      init={particlesInit}
      options={options}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
}
