"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import GoldenParticles from "@/src/components/common/GoldenParticles";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-blackDeep via-blackElevate to-blackDeep text-whiteSoft pt-8 pb-10 overflow-hidden border-t border-goldSoft/10">
      {/* Fond animé */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blackDeep/80 to-blackDeep pointer-events-none" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Bloc gauche */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href="/" className="flex items-center space-x-3 mb-5 group">
            <Image
              src="/logo-aurenyx.png"
              alt="Aurenyx Studio"
              width={100}
              height={100}
            />
          </Link>

          <p className="text-grayMedium text-sm leading-relaxed mb-6 max-w-sm">
            Construire le futur du SaaS, vite et bien. Nous transformons vos
            idées en produits réels, performants et élégants.
          </p>

          <div className="flex space-x-4">
            {[
              { Icon: Mail, href: "mailto:contact@aurenyx-studio.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/company/aurenyx-studio",
              },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, color: "#C9A961" }}
                className="text-grayMedium hover:text-goldSoft transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bloc navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex gap-8"
        >
          <div className="flex flex-col">
            <h4 className="text-whiteSoftfont-semibold mb-4 text-lg">
              Navigation
            </h4>
            <ul className="space-y-2 text-grayMedium text-sm">
              {[
                { name: "Accueil", href: "/" },
                { name: "Projets", href: "/projets" },
                { name: "Équipe", href: "/equipe" },
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#C9A961" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-whiteSoftfont-semibold mb-4 text-lg">
              <Link href="/services">Services</Link>
            </h4>
            <ul className="space-y-2 text-grayMedium text-sm">
              {[
                { name: "SaaS sur mesure", href: "/services/saas-sur-mesure" },
                { name: "Intégration IA", href: "/services/integration-ia" },
                { name: "Accompagnement stratégique", href: "/services/accompagnement-strategique" },
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#C9A961" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bloc solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ul className="space-y-2 text-grayMedium text-sm">
            {[
              { name: "Mentions légales", href: "#" },
              { name: "Politique de confidentialité", href: "#" },
            ].map((sol, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#C9A961" }}
                transition={{ duration: 0.3 }}
              >
                <a href={sol.href}>{sol.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Ligne bas de page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 max-w-7xl mx-auto mt-16 pt-8 border-t border-goldSoft/10 flex flex-col md:flex-row justify-between items-center text-xs text-grayMedium px-6"
      >
        <p>
          © {new Date().getFullYear()} Aurenyx Studio. Tous droits réservés.
        </p>
        <p className="mt-2 md:mt-0 text-goldSoft/70 tracking-widest uppercase">
          Faster. Smarter. Stronger.
        </p>
      </motion.div>
    </footer>
  );
}
