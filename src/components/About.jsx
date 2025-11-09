import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Video, GraduationCap, Briefcase, Trophy } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="text-cyan-500" size={22} />,
    title: 'Web Development',
    desc: 'HTML, CSS, JavaScript. Dasar React & Tailwind untuk UI modern.',
  },
  {
    icon: <Video className="text-cyan-500" size={22} />,
    title: 'Video Editing',
    desc: 'CapCut, Premiere Pro. Pengalaman sebagai script writer & editing.',
  },
  {
    icon: <User className="text-cyan-500" size={22} />,
    title: 'Desain & Konten',
    desc: 'Canva, Figma, konten digital & media sosial, fotografi/videografi dasar.',
  },
];

const education = [
  {
    school: 'Universitas Sebelas Maret (UNS)',
    program: 'S1 Informatika',
    period: '2025 – Sekarang',
  },
  {
    school: 'SMA Negeri 1 Kebumen',
    program: 'Lulus 2025',
    period: '—',
  },
];

const experiences = [
  {
    org: 'IKSAPALA',
    role: 'Sie Dokumentasi',
    period: '2023 – 2025',
    desc: 'Membuat konten sosial media, desain baju, stiker, banner, dan publikasi kegiatan.',
  },
  {
    org: 'Science Club',
    role: 'Pengajar & Penanggung Jawab Informatika',
    period: '2023 – 2025',
    desc: 'Mengajar dasar-dasar informatika dan mengatur kegiatan bidang terkait.',
  },
  {
    org: 'Omah Jelah',
    role: 'Pengajar & Sie Dokumentasi',
    period: '2024 – Sekarang',
    desc: 'Mengajar dan mendokumentasikan kegiatan pembelajaran.',
  },
];

const achievements = [
  'Juara 2 OSN-K Informatika (2024)',
  'Peserta OSN-P Informatika (2024)',
  'Script Writer & Editor MV Informatika 2025',
  'Berperan dalam Proyek Omah Jelah mengajar',
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
          Tentang Ridwan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-gray-300"
        >
          Halo! Saya tertarik pada pengembangan teknologi dan media kreatif. Saya bersemangat belajar,
          berinovasi, dan menciptakan sesuatu yang bermanfaat. Dengan kemampuan dasar pengembangan web
          dan editing video, saya ingin berkontribusi untuk menghadirkan
          karya yang informatif, menarik, dan berdampak positif bagi kampus.
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold">Pendidikan</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {education.map((e) => (
                <li key={e.school} className="rounded-lg bg-neutral-900/60 p-4">
                  <div className="font-medium">{e.school}</div>
                  <div className="text-sm text-gray-300">{e.program}</div>
                  <div className="text-xs text-gray-400">{e.period}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold">Organisasi & Kepanitiaan</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {experiences.map((ex) => (
                <li key={ex.org} className="rounded-lg bg-neutral-900/60 p-4">
                  <div className="font-medium">{ex.org} — {ex.role}</div>
                  <div className="text-xs text-gray-400">{ex.period}</div>
                  <div className="mt-1 text-sm text-gray-300">{ex.desc}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Trophy className="text-cyan-400" size={20} />
            <h3 className="text-lg font-semibold">Prestasi & Proyek</h3>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {achievements.map((a) => (
              <li key={a} className="rounded-lg bg-neutral-900/60 p-4 text-sm text-gray-200">{a}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
