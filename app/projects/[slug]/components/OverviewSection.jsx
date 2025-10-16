"use client";

import { motion } from "framer-motion";

export default function OverviewSection({ project }) {
  return (
    <section className="relative py-12 bg-blackDeep text-whiteSoft overflow-hidden">
      {/* Lueur d’ambiance */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-goldSoft/5 blur-[180px] opacity-50"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-[80rem] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        {/* === Bloc gauche : Texte === */}
        <div>
          {/* Vue d’ensemble */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl uppercase font-semibold mb-4 text-goldSoft">
              Vue d'ensemble
            </h2>
            <p className="text-gray-300 leading-relaxed mb-12 text-[15px]">
              {project.overview}
            </p>
          </motion.div>

          {/* Le défi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-whiteSoft">
              Le défi
            </h3>
            <p className="text-gray-400 leading-relaxed mb-12 text-[15px]">
              {project.challenge}
            </p>
          </motion.div>

          {/* Notre solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-whiteSoft">
              Notre solution
            </h3>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* === Bloc droit : Vidéo & Témoignage === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden  border border-goldSoft/10 bg-gradient-to-b from-blackElevate/60 to-blackElevate/30 backdrop-blur-md shadow-[0_0_30px_rgba(201,169,97,0.05)]"
        >

          {/* Vidéo */}
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-3xl"
              src={project.videoUrl}
              title={`${project.title} - Témoignage client`}
              allowFullScreen
            ></iframe>
          </div>

          {/* Citation client */}
          <div className="px-6 pb-6 pt-4">
            <p className="text-gray-400 italic text-sm">
              “Découvrez le retour direct de notre client sur ce projet et son
              impact.”
            </p>
          </div>

          {/* Effet lumineux */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-t from-goldSoft/5 via-transparent to-transparent pointer-events-none"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
