"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function About() {
  return (
    <section id="about" className="border-b border-edge bg-ink py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow index="01" label="about" />
          <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
            Backend-first, by choice
          </h2>
          <div className="mt-6 space-y-4 max-w-xl text-mist">
            {about.bio.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-md border border-edge bg-panel/60 p-5 font-mono text-sm"
        >
          <div className="flex gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
          </div>
          <p className="text-mist">
            <span className="text-signal">$</span> whoami
          </p>
          <div className="mt-4 space-y-2.5 border-t border-edge pt-4">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-center justify-between gap-4">
                <span className="text-mist">{f.label}</span>
                <span className="text-ivory">{f.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 border-t border-edge pt-3 text-mist">
            <span className="text-signal">$</span> <span className="animate-blink">▍</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
