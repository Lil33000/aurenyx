"use client";

import { motion } from "framer-motion";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function TeamGrid() {
  const team = [
    {
      role: "Développeur Full-Stack",
      name: "En attente",
      desc: "Notre équipe grandit et se renforce continuellement.",
      img: "/codeur.jpg",
    },
    {
      role: "Designer UI/UX",
      name: "En attente",
      desc: "Nous recrutons les meilleurs talents pour offrir des solutions exceptionnelles.",
      img: "/ui.jpg",
    },
    {
      role: "Ingénieur IA",
      name: "En attente",
      desc: "Rejoignez une équipe passionnée par l’innovation.",
      img: "/ia.jpg",
    },
  ];

  return (
    <section className="relative bg-blackDeep py-24 px-6 overflow-hidden">
      <GoldenParticles density={35} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-14"
      >
        <h2 className="text-5xl text-whiteSoft font-light mb-6">
          L’équipe{" "}
          <span className="text-goldSoft font-medium relative">
            Aurenyx
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h2>
        <p className="text-grayMedium uppercase tracking-[0.25em]">
          Des experts passionnés qui mettent leur talent au service de votre
          réussite.
        </p>
      </motion.div>

      {/* Team cards */}
      <motion.div
        className="relative z-10 grid md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {team.map((member, index) => (
          <motion.div
            key={member.role}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(201,169,97,0.2)",
            }}
            className="bg-blackElevate rounded-2xl overflow-hidden shadow-lg transition-transform relative group"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <motion.img
                src={member.img}
                alt={member.role}
                className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                whileHover={{ y: -5 }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Text */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-medium text-whiteSoft mb-1">
                {member.name}
              </h3>
              <p className="text-goldSoft text-sm mb-2">{member.role}</p>
              <p className="text-grayMedium text-sm">{member.desc}</p>
            </div>

            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl border border-goldSoft/0 group-hover:border-goldSoft/40 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
