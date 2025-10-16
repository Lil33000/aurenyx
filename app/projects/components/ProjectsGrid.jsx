"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    slug: "lyra",
    title: "LYRA",
    category: "SaaS / IA",
    tags: ["SaaS", "IA", "Innovation"],
    img: "/projet1.jpeg",
    desc: "Les réalisations d'Aurenyx Studio seront bientôt présentées ici. Nous construisons actuellement des produits innovants qui transforment des visions en réalité.",
  },
  {
    slug: "nexly",
    title: "NEXLY",
    category: "Intégration IA",
    tags: ["Intelligence Artificielle", "Automatisation"],
    img: "/projet2.jpeg",
    desc: "Chaque projet représente une collaboration unique avec nos clients pour créer des solutions qui font la différence.",
  },
  {
    slug: "orion",
    title: "ORION",
    category: "Accompagnement stratégique",
    tags: ["Stratégie", "Croissance", "UX"],
    img: "/projet3.jpeg",
    desc: "Un accompagnement complet : de la réflexion stratégique à la concrétisation produit, pour propulser votre SaaS au niveau supérieur.",
  },
  {
    slug: "nova",
    title: "NOVA",
    category: "Intégration IA",
    tags: ["Personnalisation", "Machine Learning"],
    img: "/projet1.jpeg",
    desc: "Un moteur de personnalisation IA intégré à une expérience SaaS existante, augmentant l’engagement utilisateur de 40%.",
  },
];

const categories = [
  "Tous",
  "SaaS / IA",
  "Intégration IA",
  "Accompagnement stratégique",
];

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [visibleCount, setVisibleCount] = useState(2);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, filteredProjects.length));
  };

  return (
    <section className="relative py-8 px-6 max-w-7xl mx-auto">
      
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(2);
            }}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-goldSoft text-blackDeep border-goldSoft shadow-[0_0_15px_rgba(201,169,97,0.4)]"
                : "border-goldSoft/20 text-goldSoft hover:border-goldSoft/50 hover:text-goldSoft"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="flex flex-col space-y-32">
        <AnimatePresence mode="wait">
          {visibleProjects.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-[350px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(201,169,97,0.08)]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* Texte */}
              <div className="lg:w-1/2 text-left">
                <span className="inline-block text-xs uppercase tracking-wider bg-goldSoft/20 text-goldSoft px-3 py-1 rounded-full mb-3">
                  {p.category}
                </span>
                <h3 className="text-3xl font-semibold text-goldSoft mb-4">
                  {p.title}
                </h3>
                <p className="text-white mb-5 uppercase leading-relaxed">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-goldSoft/15 text-goldSoft rounded-full border border-goldSoft/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien */}
                <Link
                  href={`/projects/${p.slug}`}
                  className="text-goldSoft text-sm font-medium flex items-center gap-1 hover:underline transition-all"
                >
                  Voir le projet <span className="text-[15px]">↗</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {visibleCount < filteredProjects.length && (
        <motion.button
          onClick={showMore}
          whileHover={{ scale: 1.05 }}
          className="mt-20 flex items-center gap-2 bg-goldSoft/10 hover:bg-goldSoft/20 border border-goldSoft/40 text-goldSoft px-8 py-3 rounded-full text-sm font-medium transition-all mx-auto"
        >
          Afficher plus
          <ChevronDown size={18} />
        </motion.button>
      )}
      {visibleCount >= filteredProjects.length && (
        <p className="text-gray-500 text-sm italic mt-20 text-center">
          Tous les projets de cette catégorie sont affichés.
        </p>
      )}
    </section>
  );
}
