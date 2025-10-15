"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-blackDeep via-blackElevate to-blackDeep text-whiteSoft py-40 px-6 overflow-hidden">
      {/* --- Halo doré central --- */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full bg-goldSoft/10 blur-[180px] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- Lignes lumineuses diagonales --- */}
      <motion.div
        className="absolute flex inset-1 bg-[linear-gradient(120deg,rgba(201,169,97,0.1)_1px,transparent_1px)] bg-[length:60px_60px] opacity-10"
        animate={{ backgroundPosition: ["0px 0px", "120px 60px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* --- Contenu principal --- */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Sur-titre */}
        <motion.span
          className="block text-sm uppercase tracking-[0.25em] text-goldSoft/90 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Prêt à concrétiser votre vision ?
        </motion.span>

        {/* Titre principal */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Construisons ensemble{" "}
          <motion.span
            className="relative text-goldSoft font-bold"
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
          >
           votre succès
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-grayMedium text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          Confiez votre vision à une équipe qui allie{" "}
          <span className="text-goldSoft">stratégie</span>,{" "}
          <span className="text-goldSoft">design</span> et{" "}
          <span className="text-goldSoft">intelligence artificielle</span> pour
          créer un produit à la hauteur de vos ambitions.
        </motion.p>

        {/* --- Bouton principal --- */}
        <motion.a
          href="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 45px rgba(201,169,97,0.35)",
            textShadow: "0 0 10px rgba(201,169,97,0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center justify-center gap-3 bg-goldSoft text-blackDeep px-10 py-4 rounded-full text-lg font-semibold tracking-wide uppercase transition-all duration-300"
        >
          Parlez-nous de votre projet
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </motion.a>

        {/* Ligne animée de conclusion */}
        <motion.div
          className="mx-auto mt-20 w-32 h-[1px] bg-gradient-to-r from-transparent via-goldSoft/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
}
