"use client";

import { motion } from "framer-motion";
import AuroraBackground from "@/src/components/common/GoldenDustBackground";

export default function ValuesSection() {
  const values = [
    {
      title: "Excellence",
      desc: "Nous visons l'excellence dans chaque ligne de code et chaque interaction client.",
    },
    {
      title: "Innovation",
      desc: "Nous repoussons les limites de ce qui est possible avec la technologie.",
    },
    {
      title: "Engagement",
      desc: "Nous nous investissons pleinement dans la réussite de nos clients.",
    },
    {
      title: "Transparence",
      desc: "Communication claire et honnête à chaque étape du processus.",
    },
  ];

  return (
    <section className="relative bg-whiteSoft text-blackDeep py-24 px-6 overflow-hidden">
      {/* Halo doré subtil */}
      <AuroraBackground />

      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-14 relative z-10"
      >
        <h2 className="text-5xl font-light mb-6 tracking-wide">
          Nos   <span className="text-goldSoft font-medium relative">
            valeurs
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h2>
        <p className="text-grayMedium uppercase tracking-[0.25em]">
          Les principes qui guident chacune de nos actions.
        </p>
      </motion.div>

      {/* Cartes */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(201,169,97,0.3)",
            }}
            className="relative bg-gradient-to-br from-white to-goldSoft/5 border border-goldSoft/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-700 group"
          >
            {/* Effet lumineux subtil */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-goldSoft/20 via-transparent to-transparent transition-opacity duration-700 rounded-2xl" />

            <h3 className="text-xl font-semibold text-goldSoft mb-3 relative z-10">
              {v.title}
            </h3>
            <p className="text-gray-700 relative z-10">{v.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
