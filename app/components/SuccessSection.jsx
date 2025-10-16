"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function SuccessSection() {
  const projects = [
    {
      name: "NEXLY",
      desc: "Une plateforme SaaS B2B d’automatisation marketing 100% IA, développée en 6 semaines.",
      tag: "SaaS & Intelligence Artificielle",
      emoji: "⚙️",
      link: "#",
    },
    {
      name: "LYRA APP",
      desc: "Une application mobile éco-conçue pour la gestion de communauté créative.",
      tag: "Mobile & UX",
      emoji: "📱",
      link: "#",
    },
    {
      name: "ASTRION",
      desc: "Un espace digital pour les startups tech, propulsé par Next.js & LangChain.",
      tag: "Tech Startup",
      emoji: "🚀",
      link: "#",
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-28 px-6 overflow-hidden">
      <GoldenParticles density={35} baseSpeed={0.3} mouseForce={100} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep" />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Déjà livré avec <span className="text-goldSoft">succès</span>
        </h2>
        <p className="text-grayMedium max-w-2xl mx-auto">
          Nous créons, testons et livrons des produits qui ont un vrai impact.
          Voici un aperçu de projets déjà finalisés par nos équipes.
        </p>
      </motion.div>
      
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-blackElevate/70 border border-goldSoft/10 rounded-2xl p-8 hover:border-goldSoft/40 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: "0 0 35px rgba(201,169,97,0.25)",
            }}
          >
            {/* Glow interne */}
            <div className="absolute inset-0 bg-gradient-to-t from-goldSoft/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Emoji / Icon */}
            <div className="text-4xl mb-4">{p.emoji}</div>

            {/* Titre */}
            <h3 className="text-xl font-semibold mb-2 text-whiteSoft group-hover:text-goldSoft transition-colors">
              {p.name}
            </h3>

            {/* Tag */}
            <p className="text-goldSoft text-xs uppercase tracking-wide mb-3">
              {p.tag}
            </p>

            {/* Description */}
            <p className="text-grayMedium text-sm leading-relaxed mb-6">
              {p.desc}
            </p>

            {/* Lien */}
            <div className="flex items-center gap-2 text-goldSoft text-sm font-medium group-hover:translate-x-1 transition-transform">
              Voir le projet
              <ExternalLink size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    
      <motion.div
        className="relative z-10 text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-grayMedium mb-4">
          Vous souhaitez voir votre projet dans cette liste ?
        </p>
        <a
          href="https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio"
          target="_blank"
          className="inline-block bg-goldSoft text-blackDeep px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(201,169,97,0.3)]"
        >
          Parlez-nous de votre projet
        </a>
      </motion.div>
    </section>
  );
}
