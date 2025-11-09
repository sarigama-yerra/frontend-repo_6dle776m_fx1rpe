import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clapperboard } from 'lucide-react';

const projects = [
  {
    title: 'MV Informatika 2025',
    type: 'Media',
    desc: 'Berperan sebagai Script Writer dan Editor dalam pembuatan MV Informatika 2025.',
    tools: ['Premiere Pro', 'CapCut'],
    links: { live: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Proyek Pilihan
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                  {p.type}
                </span>
                <Clapperboard size={18} className="text-cyan-300" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(34,211,238,0.2), transparent 40%)' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 text-center text-sm text-gray-300"
        >
          Wait for the next project in the future.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
