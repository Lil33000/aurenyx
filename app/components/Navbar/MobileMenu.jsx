"use client";

import Link from "next/link";

export default function MobileMenu({ open, links, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-blackDeep/95 flex flex-col items-center justify-center space-y-10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClose}
          className="text-2xl font-light tracking-[0.2em] text-goldSoft hover:text-whiteSoft transition-all duration-300"
        >
          {link.name}
        </Link>
      ))}

      <Link
        href="/contact"
        onClick={onClose}
        className="mt-8 bg-goldSoft text-blackDeep px-6 py-3 rounded-full text-base tracking-wide hover:scale-105 transition-all duration-300"
      >
        Parlez-nous de votre projet
      </Link>
    </div>
  );
}
