"use client";

import { motion } from "framer-motion";
import GoldenParticles from "@/src/components/common/GoldenParticles";
import { Calendar, Users, Target } from "lucide-react";

export default function HeroSection({ project }) {
  return (
    <section className="relative w-full text-center py-32 bg-blackDeep overflow-hidden">
      <GoldenParticles density={60} baseSpeed={0.25} mouseForce={140} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blackDeep/80 to-blackDeep z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <span className="inline-block text-xs uppercase tracking-wider bg-goldSoft/15 text-goldSoft px-4 py-1 rounded-full border border-goldSoft/20 backdrop-blur-md">
            {project.category}
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-5xl md:text-6xl font-semibold mb-4"
        >
          <span className="text-goldSoft relative drop-shadow-[0_0_15px_rgba(201,169,97,0.4)]">
            {project.title}
            <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
            />
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          className="text-whiteSoft/90 uppercase tracking-[0.25em] text-sm md:text-base leading-relaxed mb-20"
        >
          {project.subtitle}
        </motion.p>

        {/* === Cards dynamiques === */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-10"
        >
          {/* Durée */}
          <StatCard
            icon={<Calendar size={26} />}
            label="Durée"
            value={project.duration}
            delay={0}
          />

          {/* Équipe */}
          <StatCard
            icon={<Users size={26} />}
            label="Équipe"
            value={project.team}
            delay={0.15}
          />

          {/* Statut */}
          <StatCard
            icon={<Target size={26} />}
            label="Statut"
            value={project.status}
            color={
              project.status === "Livré" ? "text-goldSoft" : "text-yellow-400"
            }
            glow={
              project.status === "Livré"
                ? "shadow-[0_0_30px_rgba(201,169,97,0.4)]"
                : "shadow-[0_0_25px_rgba(234,179,8,0.3)]"
            }
            delay={0.3}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* === Sous-composant stylé pour les cards === */
function StatCard({ icon, label, value, delay = 0, color = "text-goldSoft", glow = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      whileHover={{
        scale: 1.06,
        y: -6,
        boxShadow: "0 0 25px rgba(201,169,97,0.3)",
      }}
      className={`relative flex flex-col items-center justify-center rounded-2xl px-10 py-8 
      border border-goldSoft/20 bg-gradient-to-b from-blackElevate/70 to-blackElevate/30 
      backdrop-blur-md ${glow} transition-all duration-500 group`}
    >
      {/* halo dynamique */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-goldSoft/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`${color} mb-3 text-2xl drop-shadow-[0_0_10px_rgba(201,169,97,0.5)]`}
      >
        {icon}
      </motion.div>

      <p className="text-grayMedium text-xs tracking-widest uppercase mb-1">{label}</p>
      <p className="text-whiteSoft font-medium text-lg">{value}</p>
    </motion.div>
  );
}
