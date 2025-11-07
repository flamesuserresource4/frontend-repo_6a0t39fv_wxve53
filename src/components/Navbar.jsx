import { useEffect, useState } from 'react';
import { Sun, Moon, Calendar, Youtube, Github, Linkedin, Twitter } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-slate-900/70 dark:bg-slate-900/60 py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <nav className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[#0b7285] shadow-md shadow-cyan-500/20" />
          <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Sohaib Mahmood (Zabi)
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-[#0b7285] transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#0b7285] px-3 py-2 text-white shadow-sm shadow-cyan-500/20 hover:translate-y-[1px] active:translate-y-[2px] transition">
            <Calendar size={16} /> Book a Call
          </a>
          <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/10 bg-white/10 text-slate-700 dark:text-slate-200 hover:scale-[1.03] active:scale-[0.98] transition">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
      <div className="md:hidden px-4 pt-2 pb-3 flex flex-wrap gap-3 text-sm">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="text-slate-400 hover:text-[#0b7285] transition-colors">
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
