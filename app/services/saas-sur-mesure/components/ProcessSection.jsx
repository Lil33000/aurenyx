"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Gauge, Rocket, Shield } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Conception",
      desc: "Nous définissons ensemble votre vision, vos besoins et votre MVP pour poser les bases solides du produit.",
      icon: <Layers size={22} />,
    },
    {
      number: 2,
      title: "Développement",
      desc: "Notre équipe construit votre SaaS avec les meilleures technologies et une approche agile.",
      icon: <Code2 size={22} />,
    },
    {
      number: 3,
      title: "Tests & Optimisation",
      desc: "Validation complète, ajustements rapides et optimisation des performances.",
      icon: <Gauge size={22} />,
    },
    {
      number: 4,
      title: "Lancement",
      desc: "Mise en production sécurisée, accompagnement initial et suivi post-lancement.",
      icon: <Rocket size={22} />,
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-32 px-6 overflow-hidden">
       <GoldenParticles density={90} baseSpeed={0.3} mouseForce={200} />
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-goldSoft/10 blur-[140px] rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* En-tête */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Notre <span className="text-goldSoft relative">processus <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            /></span>
        </h2>
        <p className="text-grayMedium max-w-2xl uppercase tracking-[0.25em] mx-auto">
          Un parcours structuré pour transformer votre vision en produit SaaS
          fonctionnel.
        </p>
      </motion.div>

      {/* Étapes */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 0 40px rgba(201,169,97,0.15)",
            }}
            className="relative bg-gradient-to-b from-blackElevate/80 to-blackDeep/80 border border-goldSoft/10 hover:border-goldSoft/40 transition-all duration-500 rounded-2xl p-8"
          >
            {/* Numéro rond */}
            <div className="absolute -top-5 left-6 bg-goldSoft text-blackDeep font-bold w-8 h-8 flex items-center justify-center rounded-full text-xs shadow-[0_0_15px_rgba(201,169,97,0.3)]">
              {step.number}
            </div>

            {/* Icône */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-goldSoft/10 text-goldSoft mb-5">
              {step.icon}
            </div>

            {/* Titre */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-grayMedium text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* Ligne de liaison */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-px h-2/3 bg-gradient-to-b from-transparent via-goldSoft/20 to-transparent translate-x-1/2" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Ligne de connexion animée (mobile uniquement) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-12 w-[2px] h-[120px] bg-gradient-to-b from-goldSoft/40 to-transparent md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
