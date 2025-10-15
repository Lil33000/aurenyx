"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Code2, TrendingUp } from "lucide-react";
import AuroraBackground from "@/src/components/common/GoldenDustBackground";
export default function PricingSection() {
  const plans = [
    {
      title: "SaaS Standard",
      subtitle: "L’essentiel pour démarrer",
      price: "10 k€ – 20 k€",
      features: [
        "Architecture moderne et scalable",
        "Design UI/UX professionnel",
        "Infrastructure cloud optimisée",
        "Sécurité et conformité intégrées",
        "Dashboard d’administration",
        "Support post-lancement (1 mois)",
      ],
      icon: <Code2 size={28} />,
      highlight: false,
    },
    {
      title: "SaaS + IA",
      subtitle: "L’avantage compétitif",
      price: "20 k€ – 30 k€",
      features: [
        "Tout du SaaS Standard",
        "Intégration IA personnalisée",
        "Chatbot intelligent",
        "Automatisation avancée",
        "Analyse prédictive",
        "Support post-lancement (2 mois)",
      ],
      icon: <Sparkles size={28} />,
      highlight: true,
    },
  ];

  return (
    <section className="relative bg-whiteSoft text-blackDeep py-32 px-6 overflow-hidden">
      <AuroraBackground />

      {/* --- Titre --- */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Choisissez{" "}
          <span className="text-goldSoft relative">
            votre formule{" "}
            <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h2>
        <p className="text-gray-600 uppercase tracking-[0.25em] max-w-2xl mx-auto">
          Deux options principales pour démarrer, avec la possibilité d’ajouter
          un accompagnement stratégique.
        </p>
      </motion.div>

      {/* --- Cartes --- */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 0 80px rgba(201,169,97,0.15), 0 10px 25px rgba(0,0,0,0.05)",
            }}
            className={`relative overflow-hidden rounded-3xl border transition-all duration-500 p-[2px] ${
              plan.highlight
                ? "border-goldSoft/30 bg-gradient-to-br from-goldSoft/10 to-transparent shadow-[0_0_50px_rgba(201,169,97,0.2)]"
                : "border-goldSoft/10 bg-gradient-to-br from-white to-white"
            }`}
          >
            {/* Contenu interne */}
            <div
              className={`relative rounded-[1.4rem] p-10 h-full ${
                plan.highlight
                  ? "bg-gradient-to-br from-white via-goldSoft/5 to-white"
                  : "bg-white"
              }`}
            >
              {/* Badge “Recommandé” */}
              {plan.highlight && (
                <div className="absolute top-6 right-6 bg-goldSoft text-blackDeep text-xs font-semibold px-4 py-1 rounded-full shadow-[0_0_20px_rgba(201,169,97,0.3)]">
                  Recommandé
                </div>
              )}

              {/* En-tête */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-goldSoft/10 text-goldSoft flex items-center justify-center">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{plan.title}</h3>
                  <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                </div>
              </div>

              {/* Prix */}
              <p
                className={`text-3xl font-bold mb-8 ${
                  plan.highlight ? "text-goldSoft" : "text-blackDeep"
                }`}
              >
                {plan.price}
              </p>

              {/* Liste des features */}
              <ul className="space-y-3 mb-10 text-sm">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-goldSoft shrink-0"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className={`w-full flex justify-center items-center gap-2 rounded-full py-4 text-sm font-medium tracking-wide uppercase transition-all ${
                  plan.highlight
                    ? "bg-goldSoft text-blackDeep hover:bg-blackDeep hover:text-goldSoft"
                    : "bg-blackDeep text-whiteSoft hover:bg-goldSoft hover:text-blackDeep"
                }`}
              >
                Choisir cette formule →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Option stratégique --- */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mt-24 border border-goldSoft/10 bg-white rounded-3xl p-10 shadow-[0_0_50px_rgba(201,169,97,0.08)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="text-goldSoft" />
              <h3 className="text-xl font-semibold">
                Accompagnement stratégique & marketing
              </h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Pour maximiser votre lancement ( Optionnel )
            </p>
            <p className="text-xl font-semibold mb-5 text-blackDeep">
              Sur devis
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-sm text-gray-700">
              {[
                "Stratégie de lancement complète",
                "Plan marketing & acquisition",
                "SEO & stratégie de contenu",
                "Campagnes publicitaires",
                "Analytics et optimisation",
                "Accompagnement continu (3–6 mois)",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-goldSoft" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <motion.a
            href="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-blackDeep text-whiteSoft px-8 py-4 rounded-full font-medium text-sm uppercase hover:bg-goldSoft hover:text-blackDeep transition-all self-start md:self-auto"
          >
            En savoir plus →
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
