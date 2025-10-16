"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoldenParticles from "@/src/components/common/GoldenParticles";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const current = projects[index];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-32 px-6 overflow-hidden">
      {/* Particules dorées */}
      <GoldenParticles density={80} baseSpeed={0.3} mouseForce={100} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/90 to-blackDeep z-0" />

      {/* --- Titre principal --- */}
      <motion.div
        className="relative z-10 text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Nos{" "}
          <span className="text-goldSoft relative">
            réalisations
            <motion.span
              className="absolute left-0 bottom-1 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h2>
        <p className="text-grayMedium uppercase tracking-[0.25em]">
          Des produits pensés avec soin, développés avec exigence, livrés avec fierté.
        </p>
      </motion.div>

      {/* --- Carrousel principal --- */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-goldSoft/10 shadow-[0_0_40px_rgba(201,169,97,0.08)] backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.97 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative w-full h-[500px] overflow-hidden rounded-3xl"
            >
              <Image
                src={current.img}
                alt={current.title}
                fill
                className="object-cover opacity-90"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Contenu projet */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                <h3 className="text-3xl font-semibold text-whiteSoft mb-2">
                  {current.title}
                </h3>
                <p className="text-goldSoft text-xs uppercase tracking-wider mb-3">
                  {current.category}
                </p>
                <p className="text-grayMedium text-sm max-w-xl mb-5">
                  {current.desc}
                </p>

                <Link
                  href={`/projects/${current.slug}`}
                  className="inline-flex items-center gap-2 text-goldSoft text-sm font-medium hover:translate-x-1 transition-transform"
                >
                  Voir le projet <ExternalLink size={15} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Contrôles --- */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-goldSoft/40 text-goldSoft hover:bg-goldSoft/10 transition-all"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-goldSoft/40 text-goldSoft hover:bg-goldSoft/10 transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* --- Pagination dots --- */}
        <div className="flex justify-center mt-6 gap-3">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-goldSoft" : "bg-grayDark"
              }`}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>

        {/* --- CTA --- */}
        <motion.div
          className="relative mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="relative group inline-flex items-center justify-center px-8 py-3 rounded-full border border-goldSoft/30 text-goldSoft font-medium text-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:border-goldSoft/60"
          >
            {/* Halo animé */}
            <span className="absolute inset-0 bg-gradient-to-r from-goldSoft/10 via-goldSoft/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            {/* Glow interne subtil */}
            <span className="absolute inset-0 bg-gradient-to-r from-goldSoft/5 via-transparent to-goldSoft/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Texte */}
            <motion.span
              className="relative z-10 flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 80, damping: 10 }}
            >
              Voir tous nos projets
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ExternalLink size={15} className="text-goldSoft" />
              </motion.span>
            </motion.span>

            {/* Contour lumineux */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-goldSoft/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-all duration-700" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
