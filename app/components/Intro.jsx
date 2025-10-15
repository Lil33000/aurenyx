"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Intro({ onFinish }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          // Transition vers le site après absorption complète
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.1,
            onComplete: () => {
              setDone(true);
              onFinish?.();
            },
          });
        },
      });

      const circles = logoRef.current.querySelectorAll("circle");

      // Préparation des cercles
      circles.forEach((c) => {
        const len = c.getTotalLength();
        gsap.set(c, {
          strokeDasharray: len,
          strokeDashoffset: len + 1,
          opacity: 0,
          transformOrigin: "center",
          scale: 0.9,
          strokeLinecap: "round",
        });
      });

      // Préparation du halo doré
      gsap.set(glowRef.current, {
        opacity: 0,
        scale: 0.5,
        filter: "blur(30px)",
      });

      // 1️⃣ Cercles qui se dessinent
      tl.to(circles, {
        strokeDashoffset: -1,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.7,
      });

      // 2️⃣ Apparition du texte
      tl.fromTo(
        ".intro-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.8"
      );
      tl.fromTo(
        ".intro-subtitle",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1"
      );

      // 3️⃣ Disparition du texte avant immersion
      tl.to([".intro-title", ".intro-subtitle"], {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power1.inOut",
      });

      // 4️⃣ Zoom et distorsion contrôlée des cercles
      tl.to(
        circles,
        {
          scale: (i) => 6 + i * 0.5,
          opacity: 1,
          duration: 2,
          ease: "power4.in",
          transformOrigin: "center",
        },
        "-=0.2"
      );

      // 5️⃣ Activation du halo doré (la lumière augmente)
      tl.to(
        glowRef.current,
        {
          opacity: 0.8,
          scale: 1.2,
          filter: "blur(60px)",
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.5"
      );

      // 6️⃣ Immersion totale
      tl.to(
        logoRef.current,
        {
          scale: 20,
          duration: 1.8,
          ease: "power4.inOut",
        },
        "-=1.6"
      );

      // 7️⃣ Fade-out de la lumière quand on passe dans le site
      tl.to(
        glowRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power1.inOut",
        },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onFinish]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-blackDeep flex flex-col items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Halo doré central */}
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-goldSoft/60 via-goldSoft/20 to-transparent"
      />

      {/* LOGO */}
      <svg
        ref={logoRef}
        width="300"
        height="300"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-10"
      >
        {[90, 75, 60, 45, 30, 15].map((r, i) => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={r}
            stroke="#c9a961"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* TEXTE */}
      <h1 className="intro-title text-5xl tracking-[0.3em] text-goldSoft font-light mb-3">
        AURENYX
      </h1>
      <p className="intro-subtitle text-grayMedium uppercase text-xs tracking-[0.2em]">
        L'excellence silencieuse
      </p>
    </div>
  );
}
