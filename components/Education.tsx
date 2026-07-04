"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Education() {
  return (
    <section id="education" className="border-b border-edge bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="04" label="education" />
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          Education & certifications
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr,0.8fr]">
          <div className="relative flex flex-col gap-6 border-l border-edge pl-6">
            {education.map((e, i) => (
              <motion.div
                key={e.school + e.period}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-signal bg-ink" />
                <p className="font-mono text-xs text-mist">{e.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ivory">
                  {e.school}
                </h3>
                <p className="mt-1 text-sm text-mist">{e.credential}</p>
                <p className="mt-1 font-mono text-xs text-signal">{e.detail} · {e.location}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              certifications
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-sm border border-edge bg-panel/40 px-4 py-3"
                >
                  <p className="text-sm text-ivory">{c.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-mist">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
