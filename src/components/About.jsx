import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Video } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="text-cyan-500" size={22} />,
    title: 'Pengembangan Web',
    desc: 'HTML, CSS, JavaScript, React, Tailwind. Fokus pada UI modern dan performa.',
  },
  {
    icon: <Video className="text-cyan-500" size={22} />,
    title: 'Editing & Produksi Video',
    desc: 'CapCut, Premiere Pro, After Effects. Dokumentasi kegiatan & konten kreatif.',
  },
  {
    icon: <User className="text-cyan-500" size={22} />,
    title: 'Branding & Konten',
    desc: 'Membangun identitas digital BEM yang konsisten melalui visual & storytelling.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Tentang Saya
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-gray-300"
        >
          Saya Ridwan Surya Pamuji (L0125131), mahasiswa Informatika yang tertarik pada pengembangan teknologi
          dan media kreatif. Tujuan saya di BEM adalah membantu memperkuat branding digital kampus melalui
          produk teknologi dan konten yang berdampak.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
