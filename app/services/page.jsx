"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cpu, Layers, LineChart, X } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";
import Image from "next/image";

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      icon: <Layers size={28} />,
      title: "SaaS sur mesure",
      desc: "Des applications performantes et élégantes, développées pour répondre précisément à votre vision business.",
      link: "/services/saas-sur-mesure",
      gradient: "from-goldSoft/20 to-transparent",
      details: {
        image: "/saas.jpg",
        points: [
          "Architecture scalable & performante",
          "UI/UX sur mesure adaptée à votre marque",
          "Livraison en 6 à 8 semaines",
        ],
      },
    },
    {
      icon: <Cpu size={28} />,
      title: "Intégration IA",
      desc: "Nous intégrons l’intelligence artificielle au cœur de vos produits et process pour décupler vos performances.",
      link: "/services/integration-ia",
      gradient: "from-goldSoft/15 to-transparent",
      details: {
        image: "/ai.jpg",
        points: [
          "Chatbots & assistants IA personnalisés",
          "Automatisation intelligente de process",
          "Formation et accompagnement IA interne",
        ],
      },
    },
    {
      icon: <LineChart size={28} />,
      title: "Accompagnement stratégique",
      desc: "Des experts pour guider votre vision produit, votre stratégie d’automatisation et votre croissance digitale.",
      link: "/services/accompagnement-strategique",
      gradient: "from-goldSoft/25 to-transparent",
      details: {
        image: "/strategy.jpg",
        points: [
          "Analyse & audit digital sur mesure",
          "Vision produit & roadmap stratégique",
          "Coaching et suivi exécutif",
        ],
      },
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
      <GoldenParticles density={90} baseSpeed={0.3} mouseForce={120} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep z-0" />

      {/* Halo doré central */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-goldSoft/10 blur-[150px] -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Nos <span className="relative text-goldSoft">services<motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            /></span>
        </h1>
        <p className="text-grayMedium uppercase tracking-[0.25em] text-lg max-w-2xl mx-auto">
          Nous accompagnons les entreprises ambitieuses dans la création,
          l’automatisation et la croissance de leurs produits digitaux.
        </p>
      </motion.div>

      {/* Cartes Services */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 0 40px rgba(201,169,97,0.25)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setSelected(service)}
            className="group relative rounded-3xl bg-blackElevate/70 border border-goldSoft/10 overflow-hidden backdrop-blur-xl p-10 text-left transition-all duration-500 cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-goldSoft/10 text-goldSoft mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-whiteSoft group-hover:text-goldSoft transition-colors">
                {service.title}
              </h3>
              <p className="text-grayMedium text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-goldSoft">
                Aperçu rapide →
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
      
            <motion.div
              className="relative bg-blackElevate/80 border border-goldSoft/20 rounded-3xl overflow-hidden max-w-3xl w-full mx-4 text-left shadow-[0_0_60px_rgba(201,169,97,0.15)]"
              initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
           
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={selected.details.image}
                  alt={selected.title}
                  fill
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-whiteSoft/70 hover:text-goldSoft transition"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Texte */}
              <div className="p-8">
                <h2 className="text-3xl font-semibold text-goldSoft mb-3">
                  {selected.title}
                </h2>
                <p className="text-grayMedium text-base mb-6">
                  {selected.desc}
                </p>

                <ul className="space-y-2 text-sm text-whiteSoft/90">
                  {selected.details.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-goldSoft">•</span> {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end mt-8">
                  <Link
                    href={selected.link}
                    className="inline-flex items-center gap-2 bg-goldSoft text-blackDeep px-6 py-3 rounded-full font-medium hover:scale-105 transition-all"
                  >
                    Découvrir en détail →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
