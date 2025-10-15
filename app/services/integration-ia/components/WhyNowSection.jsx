"use client";

import GoldenParticles from "@/src/components/common/GoldenParticles";
import { motion } from "framer-motion";
import { Brain, Zap } from "lucide-react";

export default function WhyNowSection() {
  const reasons = [
    {
      title: "Avantage compétitif immédiat",
      desc: "Différenciez-vous avec des fonctionnalités IA que vos concurrents n’ont pas.",
    },
    {
      title: "Expérience utilisateur améliorée",
      desc: "Offrez des interactions intelligentes et personnalisées à vos utilisateurs.",
    },
    {
      title: "Efficacité opérationnelle",
      desc: "Automatisez les tâches répétitives et libérez du temps pour l’essentiel.",
    },
    {
      title: "Scalabilité",
      desc: "Des solutions IA qui grandissent avec votre entreprise.",
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-32 px-6 overflow-hidden">
        <GoldenParticles density={90} baseSpeed={0.3} mouseForce={200} />
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Colonne gauche */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-goldSoft/10 text-goldSoft rounded-xl">
              <Brain size={24} />
            </div>
            <h2 className="text-3xl font-semibold">Pourquoi l’IA maintenant ?</h2>
          </div>
          <p className="text-grayMedium uppercase tracking-[0.20em] mb-8 leading-relaxed">
            L’IA n’est plus un luxe réservé aux géants de la tech. C’est devenu un
            standard du marché, et vos utilisateurs s’attendent à des expériences
            intelligentes et personnalisées.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="border border-goldSoft/20 rounded-2xl p-6 bg-blackElevate/40 hover:border-goldSoft/40 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-2 text-goldSoft">
              <Zap size={18} />
              <h4 className="font-semibold text-whiteSoft">
                Mise en œuvre rapide
              </h4>
            </div>
            <p className="text-grayMedium text-sm">
              Nos solutions IA sont conçues pour être intégrées rapidement dans
              votre produit existant sans perturber vos opérations.
            </p>
          </motion.div>
        </div>

        {/* Colonne droite */}
        <div className="grid grid-cols-1 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(201,169,97,0.15)",
              }}
              className="border border-goldSoft/10 rounded-2xl p-6 bg-blackElevate/50 hover:border-goldSoft/30 transition-all duration-500"
            >
              <h4 className="text-goldSoft font-semibold mb-2">{r.title}</h4>
              <p className="text-grayMedium text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
