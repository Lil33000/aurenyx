"use client";

import { motion } from "framer-motion";
import { Target, Megaphone, BarChart3, Lightbulb } from "lucide-react";

export default function ServiceStrat() {
  const useCases = [
     {
      icon: <Target className="text-goldSoft" />,
      title: "Stratégie produit",
      desc: "Définir votre positionnement, votre MVP et votre roadmap pour maximiser vos chances de succès.",
    },
    {
      icon: <Megaphone className="text-goldSoft" />,
      title: "Marketing & Acquisition",
      desc: "Construire et exécuter votre stratégie marketing pour atteindre et convertir vos cibles.",
    },
    {
      icon: <BarChart3 className="text-goldSoft" />,
      title: "Growth & Analytics",
      desc: "Mettre en place les métriques clés et les stratégies de croissance pour scaler.",
    },
    {
      icon: <Lightbulb className="text-goldSoft" />,
      title: "Product-Market Fit",
      desc: "Tester, itérer et affiner votre produit jusqu'à trouver l'adéquation parfaite.",
    },
  ];

  return (
    <section className="relative bg-whiteSoft text-blackDeep py-28 px-6 overflow-hidden">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Nos services <span className="text-goldSoft relative">stratégiques <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            /></span>
        </h2>
        <p className="text-gray-600 uppercase tracking-[0.25em] max-w-2xl mx-auto">
         Un accompagnement complet pour chaque étape de votre croissance
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {useCases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 0 40px rgba(201,169,97,0.15)",
            }}
            className="bg-white border border-goldSoft/20 hover:border-goldSoft/40 transition-all duration-500 rounded-2xl p-8"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-goldSoft/10 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
