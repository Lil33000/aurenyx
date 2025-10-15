"use client";

import { motion } from "framer-motion";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function HeroSection() {
  return (
    <section className="relative w-full text-center py-32 bg-blackDeep overflow-hidden">
      <GoldenParticles density={90} baseSpeed={0.3} mouseForce={200} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-6xl font-semibold mb-4"
        >
          Accompagnement{" "}
          <span className="text-goldSoft font-medium relative">
            stratégique
            <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          className="text-white uppercase tracking-[0.25em] text-base mt-10 md:text-lg leading-relaxed"
        >
          Nous accompagnons les SaaS existants dans leur développement.
          Stratégie, marketing, growth : un partenariat pour transformer votre
          produit en succès commercial.
        </motion.p>
      </div>
    </section>
  );
}
