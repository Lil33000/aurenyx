"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CTA from "./CTA";

export default function ImpactSection({ project }) {
  return (
    <section className="relative pt-20 bg-transparent text-whiteSoft overflow-hidden">
      {/* Halo d’ambiance */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-transparent rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24">
        {/* === Impact & Résultats === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl text-whiteSoft font-light  mb-12 text-center">
            Impact &
            <span className="text-goldSoft relative">
              {" "}
              Résultats{" "}
              <motion.span
                className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              />{" "}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(201,169,97,0.25)",
                }}
                className="relative flex items-start gap-4 p-6 rounded-2xl border border-goldSoft/20 bg-gradient-to-br from-blackElevate/70 to-blackElevate/30 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-goldSoft/15 border border-goldSoft/40 flex-shrink-0">
                  <CheckCircle className="text-goldSoft w-4 h-4" />
                </div>
                <p className="text-gray-300 leading-relaxed">{result}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-goldSoft/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === Technologies & Métriques === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Technologies utilisées */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-goldSoft">
              Technologies utilisées
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(201,169,97,0.15)",
                    boxShadow: "0 0 20px rgba(201,169,97,0.2)",
                  }}
                  className="px-5 py-2 text-sm font-medium text-goldSoft border border-goldSoft/30 rounded-full bg-blackElevate/50 backdrop-blur-md cursor-default transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Métriques clés */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-goldSoft">
              Métriques clés
            </h3>
            <div className="space-y-4">
              {project.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(201,169,97,0.6)",
                  }}
                  className="flex justify-between items-center px-6 py-5 rounded-2xl border border-goldSoft/20 bg-blackElevate/50 backdrop-blur-md transition-all duration-300"
                >
                  <p className="text-gray-300">{metric.label}</p>
                  <p className="text-goldSoft font-semibold text-lg drop-shadow-[0_0_6px_rgba(201,169,97,0.3)]">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <CTA />
    </section>
  );
}
