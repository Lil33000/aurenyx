"use client";

import GoldenParticles from "@/src/components/common/GoldenParticles";
import { motion } from "framer-motion";

export default function JoinUsSection() {
  return (
    <section className="relative bg-blackDeep py-20 px-6 flex justify-center overflow-hidden">
      {/* Halo doré subtil dans le fond */}
    <GoldenParticles density={20} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 bg-blackElevate rounded-2xl p-10 max-w-md text-center border border-goldSoft/10 shadow-[0_0_25px_rgba(201,169,97,0.1)] hover:shadow-[0_0_40px_rgba(201,169,97,0.2)] transition-shadow duration-700"
      >
        <motion.img
          src="/you.png"
          alt="I want you"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            filter: "drop-shadow(0 0 15px rgba(201,169,97,0.4))",
          }}
          className="mx-auto mb-6 w-48 transition-all duration-700"
        />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-goldSoft text-lg font-semibold mb-2"
        >
          I want you !
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-whiteSoft text-sm mb-4"
        >
          Rejoins l’équipe d’Aurenyx. Si tu partages notre vision et notre
          exigence, ta place est ici.
        </motion.p>

        <motion.a
          href="mailto:contact@aurenyx-studio.com"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(201,169,97,0.5)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="inline-block mt-3 bg-goldSoft text-blackDeep px-6 py-3 rounded-full text-sm tracking-wide font-medium hover:scale-105 transition-all shadow-[0_0_15px_rgba(201,169,97,0.3)]"
        >
          REJOINS LA TEAM
        </motion.a>
      </motion.div>
    </section>
  );
}
