"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";
import AuroraBackground from "@/src/components/common/GoldenDustBackground";

export default function MethodSection() {
  const methods = [
    {
      icon: <Zap size={28} />,
      title: "Automatisation des process clés",
      desc: "Nous automatisons les tâches répétitives pour nous concentrer sur ce qui compte vraiment.",
    },
    {
      icon: <Users size={28} />,
      title: "Experts dédiés aux bons points d'appui",
      desc: "Chaque expert intervient là où son impact est maximal, pas sur des tâches génériques.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Audits & codes uniques validés",
      desc: "Chaque ligne de code est auditée et sécurisée selon nos standards IA et nos seniors.",
    },
  ];

  return (
    <section className="relative bg-whiteSoft text-blackDeep z-50 py-28 px-6 overflow-hidden">
      {/* --- Effet de fond subtil --- */}
      <AuroraBackground />

      {/* --- Header --- */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className=" text-4xl md:text-5xl font-light mb-3 tracking-tight">
          Notre <span className="relative text-goldSoft font-medium">méthode <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h2>
        <p className="text-gray-600 uppercase tracking-[0.25em] mb-20">
          Ce n’est pas de la magie. C’est une méthodologie <span className="text-goldSoft font-medium">éprouvée</span>.
        </p>
      </motion.div>

      {/* --- Cards --- */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {methods.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              rotateX: 6,
              rotateY: -6,
              scale: 1.04,
              boxShadow:
                "0 10px 30px rgba(201,169,97,0.25), 0 0 20px rgba(201,169,97,0.1)",
            }}
            className="relative group bg-gradient-to-b from-white via-whiteSoft/90 to-white border border-goldSoft/20 hover:border-goldSoft/60 rounded-3xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-default perspective-[1200px]"
          >
            {/* Glow doré sur hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-goldSoft/10 via-transparent to-transparent rounded-3xl blur-xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-goldSoft/10 text-goldSoft mb-6 group-hover:bg-goldSoft/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {m.icon}
              </motion.div>

              <h3 className="text-lg font-semibold mb-3 text-blackDeep group-hover:text-goldSoft transition-colors duration-300">
                {m.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>

            {/* Ligne décorative dynamique */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-goldSoft/80 to-transparent rounded-full transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* --- Légende finale --- */}
      <motion.div
        className="text-center uppercase tracking-[0.25em] mt-20  text-sm text-blackDeep relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Une approche <span className="text-goldSoft font-medium">efficace</span>,{" "}
          <span className="text-goldSoft font-medium">humaine</span> et{" "}
          <span className="text-goldSoft font-medium">intelligente</span>.
        </p>
      </motion.div>
    </section>
  );
}
