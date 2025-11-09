import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Youtube, Instagram, Phone } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ridwan-surya-pamuji' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Hubungi Ridwan
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2"><Mail size={16} className="text-cyan-400" /> ridwansuryapamuji@gmail.com</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-cyan-400" /> 081329149185</div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-gray-300">Nama</label>
                  <input type="text" className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="Nama lengkap" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-gray-300">Email</label>
                  <input type="email" className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="email@kampus.ac.id" />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-sm text-gray-300">Pesan</label>
                <textarea className="h-28 w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-500" placeholder="Tulis pesan untuk kolaborasi atau pertanyaan" />
              </div>
              <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">
                <Mail size={16} />
                Kirim Pesan
              </button>
          </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold">Terhubung Melalui</h3>
            <p className="mt-2 text-sm text-gray-300">Ikuti dan hubungi saya di platform berikut.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-white transition hover:border-cyan-500">
                  <s.icon size={16} />
                  {s.name}
                </a>
              ))}
            </div>
            <a href="#" className="mt-6 inline-block rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20">Download CV</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
