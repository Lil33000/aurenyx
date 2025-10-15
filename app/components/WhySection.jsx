"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

import AuroraBackground from "@/src/components/common/GoldenDustBackground";
export default function WhySection() {
  // pour effet parallax du halo selon scroll
  const { scrollY } = useScroll();
  const haloY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="relative bg-whiteSoft text-blackDeep py-40 px-6 overflow-hidden">
      {/* Fond atmosphérique léger */}
  <AuroraBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Titre avec lumière glissante */}
        <motion.h2
          className="text-5xl md:text-6xl  font-semibold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Pourquoi{" "}
          <span className="relative inline-block text-goldSoft font-bold">
            Aurenyx
            <motion.span
              className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>{" "}
          existe
        </motion.h2>

        {/* Texte narratif stylé */}
        <motion.p
          className="text-xl uppercase tracking-[0.25em] text-gray-700 mb-8 leading-relaxed font-light"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              }
            }
          }}
          viewport={{ once: true }}
        >
          {[
            "Le marché actuel est",
            "lent,",
            "cher,",
            "et rigide.",
            "Nous avons créé",
            "Aurenyx Studio",
            "pour faire exactement l’inverse."
          ].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`inline-block mr-2 ${
                ["lent,", "cher,", "et rigide."].includes(word)
                  ? "text-red-500 font-medium italic"
                  : word === "Aurenyx Studio"
                    ? "text-goldSoft font-semibold italic"
                    : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Phrase de vision */}
        <motion.p
          className="text-gray-700 text-lg uppercase tracking-[0.25em] md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Nous faisons surgir des{" "}
          <span className="text-goldSoft font-medium italic">idées audacieuses</span>{" "}
          en produits digitaux{" "}
          <span className="font-medium">élégants & durables</span>.
        </motion.p>

        {/* Signature visuelle */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <div className="flex justify-center items-center gap-3 text-goldSoft/90">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="uppercase font-medium tracking-wider text-sm">
              Exigez l’exception
            </span>
          </div>
        </motion.div>
      </div>

      {/* Cercles d’ambiance */}
      <motion.div
        className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-goldSoft/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-goldSoft/10 blur-[150px]"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
