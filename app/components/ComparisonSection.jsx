"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";

export default function ComparisonSection() {
  const rows = [
    {
      title: "Budget MVP",
      traditional: "50k–80k €",
      aurényx: "10k–30k €",
      difference: "2 à 5× moins cher",
    },
    {
      title: "Délais livraison",
      traditional: "3–9 mois",
      aurényx: "4–10 semaines",
      difference: "3× plus rapide",
    },
    {
      title: "Méthode",
      traditional: "Équipes lourdes, facturation horaire élevée",
      aurényx: "Experts + IA comme levier, codes audités & sécurisés",
      difference: "Résultats exponentiels",
    },
  ];

  return (
    <section className="relative bg-blackDeep text-whiteSoft py-28 px-6 overflow-hidden">
      <GoldenParticles density={85} baseSpeed={0.35} mouseForce={140} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep z-0" />

      {/* --- Titre --- */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Marché traditionnel vs{" "}
          <span className="relative text-goldSoft font-medium">
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
          Comparaison directe, chiffres à l’appui.
        </p>
      </motion.div>

      {/* --- Tableau comparatif --- */}
      <div className="relative z-10 max-w-6xl mx-auto overflow-hidden rounded-2xl border border-goldSoft/10 backdrop-blur-xl">
        {/* En-tête desktop */}
        <div className="hidden md:grid grid-cols-3 bg-blackElevate/60 text-left py-3 px-6 font-semibold text-sm uppercase tracking-wide text-gray-400 border-b border-goldSoft/10">
          <div>Dimension</div>
          <div>Marché traditionnel</div>
          <div className="text-goldSoft relative">
            <span>Aurenyx Studio</span>
          </div>
        </div>

        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-goldSoft/10 hover:bg-goldSoft/5 transition-all duration-300"
          >
            {/* --- Version desktop --- */}
            <div className="hidden md:grid grid-cols-3 items-stretch py-6 px-6">
              {/* Colonne gauche */}
              <div className="flex items-center font-medium text-whiteSoft">
                {r.title}
              </div>

              {/* Colonne marché traditionnel */}
              <div className="flex flex-col justify-center">
                <div className="flex items-start gap-2 text-grayMedium text-sm">
                  <X size={16} className="text-red-500 mt-1" />
                  <span>{r.traditional}</span>
                </div>
              </div>

              {/* Colonne Aurenyx (encadrée dorée) */}
              <div className="relative border border-goldSoft/30 rounded-xl bg-blackElevate/40 px-6 py-4 shadow-[0_0_20px_rgba(201,169,97,0.1)] hover:shadow-[0_0_35px_rgba(201,169,97,0.2)] transition-all duration-300">
                <div className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-goldSoft mt-1" />
                  <span className="text-goldSoft font-medium">{r.aurényx}</span>
                </div>
                <p className="text-xs text-grayMedium mt-1">{r.difference}</p>

                {/* Glow subtil */}
                <span className="absolute inset-0 rounded-xl border border-goldSoft/10 pointer-events-none" />
              </div>
            </div>

            {/* --- Version mobile --- */}
            <div className="md:hidden bg-blackElevate/40 backdrop-blur-lg border border-goldSoft/10 rounded-2xl p-6 mb-5 shadow-[0_0_25px_rgba(201,169,97,0.05)] text-center">
              <h3 className="text-xl font-semibold text-goldSoft mb-5 tracking-wide">
                {r.title}
              </h3>

              {/* Marché traditionnel */}
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <X size={18} className="text-red-500" />
                  <p className="text-grayMedium text-base font-medium">
                    {r.traditional}
                  </p>
                </div>
                <p className="text-xs text-grayMedium uppercase tracking-wide">
                  Marché traditionnel
                </p>
              </div>

              {/* Séparateur */}
              <div className="h-[1px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-goldSoft/20 to-transparent mb-6" />

              {/* Aurenyx */}
              <div className="relative bg-gradient-to-b from-blackElevate/50 to-blackElevate/20 border border-goldSoft/30 rounded-xl px-4 py-5 shadow-[0_0_25px_rgba(201,169,97,0.08)]">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Check size={18} className="text-goldSoft" />
                    <p className="text-goldSoft text-base font-semibold">
                      {r.aurényx}
                    </p>
                  </div>
                  <p className="text-xs text-grayMedium mb-1">{r.difference}</p>
                  <p className="text-xs text-goldSoft/80 uppercase tracking-wide">
                    Aurenyx Studio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Citation --- */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto mt-16 p-8 md:p-10 border border-goldSoft/10 rounded-2xl bg-blackElevate/50 shadow-[0_0_25px_rgba(201,169,97,0.05)] text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex justify-center items-center w-14 h-14 rounded-full bg-goldSoft/10 border border-goldSoft/30 text-goldSoft">
            <Sparkles size={22} />
          </div>

          <div>
            <p className="italic text-lg text-whiteSoft mb-3 leading-relaxed">
              « Donnez-moi un point d’appui et un levier, et je soulèverai la Terre. »
            </p>
            <p className="text-goldSoft text-sm font-medium">— Archimède</p>
            <p className="text-grayMedium mt-3 text-sm">
              Chez Aurenyx,{" "}
              <span className="text-goldSoft">le point d’appui, ce sont nos experts,</span>{" "}
              et{" "}
              <span className="text-goldSoft font-medium">le levier, c’est l’IA.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
