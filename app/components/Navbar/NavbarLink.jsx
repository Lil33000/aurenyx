"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ name, href }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
        active
          ? "text-goldSoft"
          : "text-whiteSoft/70 hover:text-goldSoft"
      }`}
    >
      {name}
    </Link>
  );
}
