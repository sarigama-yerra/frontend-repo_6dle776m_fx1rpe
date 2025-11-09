import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#projects', label: 'Proyek' },
  { href: '#contact', label: 'Kontak' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition ${scrolled ? 'backdrop-blur bg-black/40' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-tight">Ridwan SP</a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-200 transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a href="#projects" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">Portfolio</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 px-6 py-4 md:hidden">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-200">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
