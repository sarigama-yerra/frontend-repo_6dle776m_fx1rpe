import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ridwan Surya Pamuji
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
              Menggabungkan kreativitas dan teknologi untuk menghadirkan karya yang informatif,
              menarik, dan berdampak positif bagi lingkungan kampus.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
              >
                Lihat Proyek
              </a>
              <a
                href="https://www.linkedin.com/in/ridwan-surya-pamuji"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://wa.me/6281329149185"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Phone size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
