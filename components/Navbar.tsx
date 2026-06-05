"use client";

import Link from "next/link";
import { Compass } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/chat", label: "AI Mentor" },
  { href: "/skills", label: "Skills" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 h-14 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 text-green-600 font-bold text-lg">
        <Compass size={22} />
        CareerPath AI
      </Link>

      <div className="flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              pathname === link.href
                ? "bg-green-50 text-green-700 font-medium"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/register"
        className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
      >
        Sign up free
      </Link>
    </nav>
  );
}