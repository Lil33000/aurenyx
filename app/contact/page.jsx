"use client";

import { motion } from "framer-motion";
import GoldenParticles from "@/src/components/common/GoldenParticles";
import { Mail, Calendar, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-blackDeep overflow-hidden text-whiteSoft pt-36 md:pt-32">
     
      <GoldenParticles density={65} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep" />
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl text-center"
      >
        <h1 className="text-6xl text-whiteSoft font-light mb-3">
          Réservez votre appel{" "}
          <span className="text-goldSoft font-medium relative">
            gratuit
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
          </span>
        </h1>
        <p className="text-grayMedium text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed pt-2">
          Un appel stratégique de 15 minutes offert avec un de nos experts —{" "}
          <span className="text-goldSoft">
            présentez-nous votre vision, on s’occupe du reste.
          </span>
        </p>
       
        <motion.form
          className="bg-blackElevate/70 backdrop-blur-xl border border-goldSoft/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(201,169,97,0.1)] space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-blackElevate border border-grayDark rounded-xl px-4 py-3 text-whiteSoft focus:outline-none focus:border-goldSoft transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full bg-blackElevate border border-grayDark rounded-xl px-4 py-3 text-whiteSoft focus:outline-none focus:border-goldSoft transition-all duration-300"
            />
          </div>

          <textarea
            placeholder="Votre message"
            rows="5"
            className="w-full bg-blackElevate border border-grayDark rounded-xl px-4 py-3 text-whiteSoft focus:outline-none focus:border-goldSoft transition-all duration-300"
          />

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(201,169,97,0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-goldSoft text-blackDeep px-10 py-4 rounded-full font-medium tracking-wide uppercase transition-all duration-300 mx-auto"
          >
            <Mail size={18} />
            Envoyer
          </motion.button>
        </motion.form>
      </motion.div>
   
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl mt-24 text-left mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-whiteSoft mb-10 text-center">
          Pourquoi <span className="text-goldSoft">nous contacter ?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Calendar size={28} />,
              title: "Appel stratégique gratuit",
              desc: "30 minutes pour analyser votre projet et identifier les opportunités.",
            },
            {
              icon: <MessageSquare size={28} />,
              title: "Réponse rapide",
              desc: "Nous vous répondons sous 24h pour planifier votre rendez-vous.",
            },
            {
              icon: <ArrowRight size={28} />,
              title: "Sans engagement",
              desc: "Aucune obligation, juste une conversation pour explorer les possibilités.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderColor: "rgba(201,169,97,0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl bg-blackElevate/50 border border-goldSoft/10 shadow-[0_0_20px_rgba(201,169,97,0.05)] transition-all"
            >
              <div className="w-14 h-14 flex px-4 items-center justify-center rounded-xl bg-goldSoft/10 text-goldSoft">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-goldSoft mb-1">
                  {item.title}
                </h3>
                <p className="text-grayMedium text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
