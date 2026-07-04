"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionEyebrow from "@/components/SectionEyebrow";

const methodStyles: Record<Project["method"], string> = {
  GET: "bg-indigo/15 text-indigo border-indigo/30",
  POST: "bg-signal/15 text-signal border-signal/30",
  PUT: "bg-amber/15 text-amber border-amber/30",
  DELETE: "bg-rose/15 text-rose border-rose/30",
};

export default function Projects() {
  return (
    <section id="projects" className="border-b border-edge bg-panel/20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="03" label="projects" />
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
          Endpoints I've shipped
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          Three backend services, built end to end — data model, auth, and API contract.
        </p>

        <div className="mt-12 flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.route}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-md border border-edge bg-panel/60 p-6 transition-colors hover:border-edge2"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span
                  className={`rounded-sm border px-2 py-1 font-semibold ${methodStyles[project.method]}`}
                >
                  {project.method}
                </span>
                <span className="text-mist">{project.route}</span>
                <span className="ml-auto rounded-sm border border-edge2 px-2 py-1 text-mist">
                  {project.status} · {project.date}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-ivory">
                {project.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-mist">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-edge2 bg-panel2 px-2 py-0.5 font-mono text-[11px] text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-signal opacity-80 transition-opacity hover:opacity-100"
                >
                  view source
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
