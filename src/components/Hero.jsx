import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Rocket size={16} className="text-cyan-300" />
              <span>Calon Anggota BEM – Divisi Media & Teknologi</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ridwan Surya Pamuji
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
              Mengkombinasikan kreativitas dan teknologi untuk BEM yang lebih inovatif.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Play size={18} />
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
