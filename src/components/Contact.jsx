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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
