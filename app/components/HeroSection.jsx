"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GoldenParticles from "@/src/components/common/GoldenParticles";

// === Hook compteur numérique animé ===
function useCountUp(target, start = 0, duration = 1500, trigger = false) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(start + progress * (target - start));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, duration, trigger]);

  return count;
}

// === Composant stat individuel ===
function StatCard({ number, suffix, label, trigger }) {
  const count = useCountUp(number, 0, 1800, trigger);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-b from-blackElevate/80 to-blackDeep/60 backdrop-blur-md border border-goldSoft/10 rounded-2xl py-8 px-6 shadow-[0_0_25px_rgba(201,169,97,0.05)] hover:border-goldSoft/30 transition-all duration-500"
    >
      <p className="text-4xl font-semibold text-goldSoft mb-1 tracking-tight drop-shadow-[0_0_6px_rgba(201,169,97,0.3)]">
        {number % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
        {suffix}
      </p>
      <p className="text-grayMedium text-[13px] uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

export default function HeroSection() {
  const stats = [
    { number: 25, suffix: "+", label: "Projets livrés avec succès" },
    { number: 4.9, suffix: "/5 ⭐", label: "Satisfaction client" },
    { number: 6, suffix: " sem.", label: "Délai moyen de livraison" },
  ];

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const [triggerCount, setTriggerCount] = useState(false);

  // On attend que l’apparition des cards soit terminée avant de lancer le compteur
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setTriggerCount(true), 800); // délai parfait après fade-in
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-blackDeep px-6 font-[system-ui,sf-pro-text,segoe-ui]">
      
      <GoldenParticles baseDensity={150} baseSpeed={0.3} mouseForce={190} />
      {/* Halo dynamique central */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-goldSoft/15 blur-[150px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep z-0" />   
      <div className="relative z-10 max-w-7xl mx-auto pt-36">   
        <div className="flex justify-center items-center mb-8 space-y-1 font-[system-ui,serif]">
          {["Plus vite.", "Plus malin.", "Plus fort."].map((text, index) => (
            <motion.span
              key={text}
              className="block text-[1rem] md:text-[1.4rem] italic font-light text-goldSoft/90"
              style={{
                fontFamily:
                  "'Playfair Display', 'Times New Roman', 'Georgia', serif",
                letterSpacing: "0.02em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.4,
                ease: "easeOut",
              }}
            >
              {text}
            </motion.span>
          ))}
        </div>

        <motion.h1
          className="text-[2.7rem] md:text-[4.5rem] font-[600] leading-tight mb-6 text-whiteSoft"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Construire le futur du{" "}
          <motion.span
            className="relative text-goldSoft font-[700]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            SaaS
            <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.span>{" "}
          <br />
          <span className="text-whiteSoft/90 font-[700]">vite et bien.</span>
        </motion.h1>

        {/* Sous-texte */}
        <motion.p
          className="text-grayMedium text-base md:text-lg max-w-2xl mx-auto uppercase  leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Nous transformons les visions en produits réels, fonctionnels et
          rentables, en un temps record.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio"
            target="_blank"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(201,169,97,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="bg-goldSoft text-blackDeep px-10 py-4 rounded-full text-sm font-medium uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(201,169,97,0.2)]"
          >
            Réserver un appel stratégique
            <ArrowRight size={18} />
          </motion.a>

          <Link
            href="/projets"
            className="border border-goldSoft/30 text-whiteSoft px-10 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-goldSoft/10 transition-all duration-300"
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>
     
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 grid md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full px-4 pb-6"
      >
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            number={stat.number}
            suffix={stat.suffix}
            label={stat.label}
            trigger={triggerCount}
          />
        ))}
      </motion.div>
    </section>
  );
}
