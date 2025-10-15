"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="bg-whiteSoft text-blackDeep py-24 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(201,169,97,0.3)",
          }}
          className="relative bg-blackDeep rounded-2xl h-[350px] flex items-center justify-center overflow-hidden"
        >
          {/* glow léger animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-goldSoft/10 via-transparent to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-goldSoft relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.637 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mehdi BELKADI
          </motion.h2>
          <motion.p
            className="text-goldSoft font-medium text-sm mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Founder & CEO
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              Visionnaire et entrepreneur passionné, Mehdi a fondé Aurenyx
              Studio avec une mission claire : démocratiser l’accès aux
              technologies SaaS et IA de pointe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sa vision : permettre à chaque entrepreneur de transformer son idée
              en produit fonctionnel, sans les contraintes traditionnelles de
              temps et de budget.
            </p>
          </motion.div>

          {/* ICONS */}
          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:contact@aurenyx-studio.com"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 12px rgba(201,169,97,0.5)",
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-goldSoft text-goldSoft hover:bg-goldSoft hover:text-blackDeep transition-all"
            >
              <Mail size={16} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 12px rgba(201,169,97,0.5)",
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-goldSoft text-goldSoft hover:bg-goldSoft hover:text-blackDeep transition-all"
            >
              in
            </motion.a>
          </motion.div>

          {/* CITATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-b from-goldSoft/10 to-transparent rounded-xl p-6 italic text-sm text-center text-goldSoft border border-goldSoft/20"
          >
            “En attente de citation inspirante”<br />— Mehdi BELKADI
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
