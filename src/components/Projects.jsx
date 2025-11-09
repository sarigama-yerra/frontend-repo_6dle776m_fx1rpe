import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clapperboard } from 'lucide-react';

const projects = [
  {
    title: 'Website Kegiatan Kampus',
    type: 'Teknologi',
    desc: 'Landing page modern untuk dokumentasi kegiatan kampus dengan fokus pada aksesibilitas dan performa.',
    tools: ['React', 'Tailwind', 'Vite'],
    links: { live: '#', github: '#'},
  },
  {
    title: 'Video Dokumentasi ORMAWA',
    type: 'Media',
    desc: 'Video highlight kegiatan BEM dengan alur storytelling yang hangat dan informatif.',
    tools: ['Premiere', 'After Effects'],
    links: { live: 'https://www.youtube.com', github: null},
  },
  {
    title: 'Aplikasi Agenda Kegiatan',
    type: 'Teknologi',
    desc: 'Aplikasi sederhana untuk manajemen agenda dan publikasi event BEM.',
    tools: ['React', 'Node', 'MongoDB'],
    links: { live: '#', github: '#'},
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
                {p.type === 'Media' ? (
                  <Clapperboard size={18} className="text-cyan-300" />
                ) : (
                  <Github size={18} className="text-cyan-300" />
                )}
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
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(34,211,238,0.2), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
