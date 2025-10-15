"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Sparkles, Lightbulb } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: <Bot className="text-goldSoft" />,
      title: "Chatbots intelligents",
      desc: "Assistants conversationnels qui comprennent et répondent naturellement à vos utilisateurs.",
    },
    {
      icon: <LineChart className="text-goldSoft" />,
      title: "Analyse prédictive",
      desc: "Anticipez les tendances et prenez des décisions basées sur des données intelligentes.",
    },
    {
      icon: <Sparkles className="text-goldSoft" />,
      title: "Automatisation intelligente",
      desc: "Automatisez vos processus métier avec des systèmes qui apprennent et s’adaptent.",
    },
    {
      icon: <Lightbulb className="text-goldSoft" />,
      title: "Recommandations personnalisées",
      desc: "Systèmes qui augmentent l’engagement et les conversions.",
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
          Cas <span className="text-goldSoft relative">d’usage <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            /></span>
        </h2>
        <p className="text-gray-600 uppercase tracking-[0.25em] max-w-2xl mx-auto">
          Des applications concrètes de l’IA pour transformer votre SaaS.
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
