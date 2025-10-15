"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "/projects" },
  { name: "Équipe", href: "/equipe" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Fonction simple de redirection
  const handleOpenCal = () => {
    window.open(
      "https://cal.com/aurenyx-studio/appel-strategie-aurenyx-studio",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center transition-all duration-500">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
         <Image
           src="/logo-aurenyx.png"
           alt="AURENYX Logo"
           width={100}
           height={100}
           className="w-24 h-24 rounded-full "
         />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <NavbarLink key={link.name} {...link} />
          ))}

          {/* CTA → Redirection Cal.com */}
          <button
            onClick={handleOpenCal}
            className="ml-6 bg-goldSoft text-blackDeep px-5 py-2 rounded-full text-sm font-medium tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(201,169,97,0.3)]"
          >
            Parlez-nous de votre projet
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-goldSoft hover:text-whiteSoft transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        open={menuOpen}
        links={links}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
