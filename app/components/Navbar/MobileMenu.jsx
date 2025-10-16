"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function MobileMenu({ open, links, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-blackDeep/85 backdrop-blur-md flex flex-col items-center justify-center space-y-10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {open && (
        <motion.button
          onClick={onClose}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-6 left-6 flex items-center gap-2 text-goldSoft hover:text-whiteSoft transition-all duration-300"
        >
          <ArrowLeft size={22} />
          <span className="text-sm font-light tracking-wider uppercase">
            Retour
          </span>
        </motion.button>
      )}
      {links.map((link, i) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + i * 0.1 }}
        >
          <Link
            href={link.href}
            onClick={onClose}
            className="text-2xl font-light uppercase tracking-[0.2em] text-goldSoft hover:text-whiteSoft transition-all duration-300"
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        className="mt-10"
      >
        <Link
          href="/contact"
          onClick={onClose}
          className=" bg-goldSoft text-blackDeep px-6 py-3 rounded-full text-base tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(201,169,97,0.3)]"
        >
          Parlez-nous de votre projet
        </Link>
      </motion.div>
    </div>
  );
}
