"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-edge bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="02" label="stack" />
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          The stack, layer by layer
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          Same order a request travels through in production — language up top, storage at the bottom.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-md border border-edge bg-panel/50 p-5 transition-colors hover:border-edge2"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-signal">{group.layer}</span>
                <h3 className="font-mono text-sm uppercase tracking-wide text-ivory">
                  {group.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-edge2 bg-panel2 px-2.5 py-1 text-sm text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
