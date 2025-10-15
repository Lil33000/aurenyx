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

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Marché traditionnel vs{" "}
          <span className=" relative text-goldSoft font-medium">Aurenyx
             <motion.span
              className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-goldSoft/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
         
          </span>
          
        </h2>
        <p className="text-grayMedium uppercase tracking-[0.25em] ">
          Comparaison directe, chiffres à l’appui.
        </p>
      </motion.div>

      {/* --- Tableau comparatif --- */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-2xl overflow-hidden border border-goldSoft/10 backdrop-blur-xl">
        <div className="grid grid-cols-3 bg-blackElevate/60 text-left py-3 px-6 font-semibold text-sm uppercase tracking-wide text-gray-400 border-b border-goldSoft/10">
          <div>Dimension</div>
          <div>Marché traditionnel</div>
          <div className="text-goldSoft">Aurenyx Studio</div>
        </div>

        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 items-center py-6 px-6 border-b border-goldSoft/10 hover:bg-goldSoft/5 transition-all duration-300"
          >
            <div className="font-medium text-whiteSoft">{r.title}</div>

            <div className="flex items-start gap-2 text-grayMedium text-sm">
              <X size={16} className="text-red-500 mt-1" />
              <span>{r.traditional}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 text-sm">
                <Check size={16} className="text-goldSoft mt-1" />
                <span className="text-goldSoft">{r.aurényx}</span>
              </div>
              <p className="text-xs text-grayMedium">{r.difference}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Citation d’Archimède --- */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto mt-16 p-10 border border-goldSoft/10 rounded-2xl bg-blackElevate/50 shadow-[0_0_25px_rgba(201,169,97,0.05)] text-left"
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
              « Donnez-moi un point d’appui et un levier, et je soulèverai la
              Terre. »
            </p>
            <p className="text-goldSoft text-sm font-medium">— Archimède</p>
            <p className="text-grayMedium mt-3 text-sm">
              Chez Aurenyx,{" "}
              <span className="text-goldSoft">
                le point d’appui, ce sont nos experts,
              </span>{" "}
              et{" "}
              <span className="text-goldSoft font-medium">le levier, c’est l’IA.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
