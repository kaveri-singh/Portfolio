"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDownToLine, ArrowRight } from "lucide-react";
import { contact, summary } from "@/lib/data";

const layers = [
  { label: "Client", detail: "HTTP request", tone: "text-mist" },
  { label: "Controller", detail: "routes & validates", tone: "text-ivory" },
  { label: "Service", detail: "business logic", tone: "text-ivory" },
  { label: "Security", detail: "Spring Security · RBAC", tone: "text-indigo" },
  { label: "Repository", detail: "Spring Data MongoDB", tone: "text-ivory" },
  { label: "Database", detail: "MongoDB", tone: "text-signal" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-edge bg-[radial-gradient(circle_at_top,#141F35,#0A0F1C_65%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:44px_44px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            backend engineer · java · spring boot
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl">
            {contact.name}
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-mist">
            {summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-signal px-4 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={contact.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-sm border border-edge2 px-4 py-2.5 font-mono text-sm text-ivory transition-colors hover:border-signal hover:text-signal"
            >
              <ArrowDownToLine size={15} />
              Résumé
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-mist">
            <a href={`mailto:${contact.email}`} aria-label="Email" className="transition-colors hover:text-signal">
              <Mail size={18} />
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone" className="transition-colors hover:text-signal">
              <Phone size={18} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-signal">
              <Github size={18} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-signal">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
          aria-hidden="true"
        >
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-mist">
            <span>request.pipeline</span>
            <span className="text-signal">● live</span>
          </div>

          <div className="relative rounded-md border border-edge bg-panel/60 p-3">
            <div className="pointer-events-none absolute left-1/2 top-3 h-[calc(100%-24px)] w-px -translate-x-1/2 bg-edge2" />
            <div
              className="pointer-events-none absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_10px_2px_rgba(79,209,165,0.6)] animate-packet"
            />

            <ul className="relative flex flex-col gap-2.5">
              {layers.map((layer) => (
                <li
                  key={layer.label}
                  className="flex items-center justify-between rounded-sm border border-edge bg-panel2/80 px-3.5 py-2.5"
                >
                  <span className={`font-mono text-sm ${layer.tone}`}>{layer.label}</span>
                  <span className="font-mono text-[11px] text-mist">{layer.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-right font-mono text-[11px] text-mist">
            200 OK <span className="text-signal">· 42ms</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
