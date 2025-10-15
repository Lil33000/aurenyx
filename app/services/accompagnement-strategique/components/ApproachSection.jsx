"use client";

import { motion } from "framer-motion";
import { Target, ClipboardCheck, RefreshCw } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function ApproachSection() {
  const steps = [
    {
      number: 1,
      title: "Audit stratégique",
      desc: "Analyse approfondie de votre marché, concurrence et positionnement pour identifier les opportunités.",
      icon: <Target size={22} />,
    },
    {
      number: 2,
      title: "Plan d'action personnalisé",
      desc: "Roadmap claire avec objectifs, milestones et KPIs adaptés à votre réalité.",
      icon: <ClipboardCheck size={22} />,
    },
    {
      number: 3,
      title: "Accompagnement continu",
      desc: "Suivi régulier, ajustements tactiques et support pour surmonter les obstacles.",
      icon: <RefreshCw size={22} />,
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-32 px-6 overflow-hidden">
      {/* Effet particules dorées */}
      <GoldenParticles density={80} baseSpeed={0.25} mouseForce={180} />

      {/* Halo gold subtil */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-goldSoft/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
       <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Notre <span className="text-goldSoft relative">approche <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            /></span>
        </h2>
        <p className="text-grayMedium uppercase tracking-[0.25em] max-w-2xl mx-auto">
         Un accompagnement complet pour chaque étape de votre croissance
        </p>
      </motion.div>

      {/* Étapes */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
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
            className="relative bg-gradient-to-b from-blackElevate/70 to-blackDeep/70 border border-goldSoft/10 hover:border-goldSoft/40 transition-all duration-500 rounded-2xl p-8 text-left"
          >
            {/* Numéro rond */}
            <div className="absolute -top-5 left-6 bg-goldSoft text-blackDeep font-semibold w-8 h-8 flex items-center justify-center rounded-full text-xs shadow-[0_0_15px_rgba(201,169,97,0.3)]">
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

            {/* Ligne de liaison entre cartes */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-[1px] h-2/3 bg-gradient-to-b from-transparent via-goldSoft/25 to-transparent translate-x-1/2" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Bloc de conclusion */}
      <motion.div
        className="relative z-10 mt-20 text-center max-w-3xl mx-auto bg-gradient-to-b from-blackElevate/60 to-blackDeep/70 border border-goldSoft/10 rounded-2xl py-10 px-8 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-grayMedium  uppercase tracking-[0.25em]text-lg leading-relaxed">
          Nous ne sommes pas de simples{" "}
          <span className="text-goldSoft font-medium">consultants</span>.  
          Nous nous impliquons dans votre réussite comme si c'était{" "}
          <span className="text-goldSoft font-medium">notre propre projet</span>.
        </p>
      </motion.div>
    </section>
  );
}
