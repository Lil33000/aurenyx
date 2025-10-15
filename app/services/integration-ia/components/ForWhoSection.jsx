"use client";

import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";
import AuroraBackground from "@/src/components/common/GoldenDustBackground";

export default function ForWhoSection() {
  return (
    <section className="relative bg-whiteSoft text-blackDeep py-16 px-6 overflow-hidden">
      <AuroraBackground />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-goldSoft/10 blur-[160px] rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Éléments décoratifs flottants */}
      <FloatingIcon
        icon={<Sparkles className="text-goldSoft/40" size={18} />}
        className="top-20 left-1/4"
        duration={10}
      />
      <FloatingIcon
        icon={<Sparkles className="text-goldSoft/30" size={22} />}
        className="bottom-16 right-1/3"
        duration={12}
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto bg-white rounded-3xl border border-goldSoft/20 shadow-[0_0_40px_rgba(201,169,97,0.08)] p-12 hover:shadow-[0_0_70px_rgba(201,169,97,0.15)] transition-all duration-700"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Titre */}
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-goldSoft/10 text-goldSoft w-12 h-12 rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-2"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: "-0.01em",
              }}
            >
              Pour qui ?
            </h2>
            <motion.div
              className="h-[2px] w-16 bg-gradient-to-r from-goldSoft/70 to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Texte d’intro */}
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed text-[1.05rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ce service s’adresse aux{" "}
          <strong className="text-blackDeep font-semibold">
            SaaS déjà existants
          </strong>{" "}
          qui souhaitent :
        </motion.p>

        {/* Liste */}
        <ul className="space-y-4">
          {[
            "Intégrer des fonctionnalités IA pour se différencier de la concurrence",
            "Automatiser des processus répétitifs pour gagner en efficacité",
            "Améliorer l’expérience utilisateur avec des interactions intelligentes",
            "Exploiter leurs données pour prendre de meilleures décisions",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 text-gray-800 hover:text-blackDeep transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-goldSoft/10 text-goldSoft text-xs mt-1.5">
                •
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* === PETIT COMPOSANT ICON FLOTANT === */
function FloatingIcon({ icon, className, duration }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {icon}
    </motion.div>
  );
}
