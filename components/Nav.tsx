"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "/about" },
  { href: "#skills", label: "/skills" },
  { href: "#projects", label: "/projects" },
  { href: "#education", label: "/education" },
  { href: "#contact", label: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-edge bg-ink/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 font-mono text-xs">
        <a href="#top" className="flex items-center gap-2 text-mist">
          <span className="text-signal">GET</span>
          <span className="hidden sm:inline">/kaveri-singh HTTP/1.1</span>
          <span className="rounded-sm bg-signal/10 px-1.5 py-0.5 text-signal">200 OK</span>
        </a>
        <nav className="hidden gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-mist transition-colors hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-sm border border-edge2 px-3 py-1.5 text-ivory transition-colors hover:border-signal hover:text-signal"
        >
          connect()
        </a>
      </div>
    </header>
  );
}
