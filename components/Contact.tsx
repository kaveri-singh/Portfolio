"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <SectionEyebrow index="05" label="contact" />
          </div>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold text-ivory sm:text-5xl">
            Let's build something
            <br /> that has to stay up.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            Open to backend and full-stack roles. The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {contact.email}
          </a>

          <div className="mt-10 flex items-center justify-center gap-6 text-mist">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-signal">
              <Github size={20} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-signal">
              <Linkedin size={20} />
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} aria-label="Phone" className="transition-colors hover:text-signal">
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl border-t border-edge px-6 pt-6">
        <p className="font-mono text-xs text-mist">
          {contact.name} · built with Next.js & Tailwind · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
