import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-slate-300">Based in Lahore, PK</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
            I build revenue-ready automations, sites, and AI systems
          </h1>
          <p className="mt-4 text-slate-200/90">
            GHL Expert & AI Automation Builder helping founders ship faster and grow revenue with no‑nonsense systems.
          </p>

          <div className="mt-6 mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur p-4 shadow-lg shadow-cyan-500/10 text-left">
              <div className="text-slate-200 whitespace-pre-line leading-relaxed">
                Build with AI energy:\n- Forms that qualify and route\n- n8n automations that actually ship\n- Payments that convert\n- Dashboards that tell a story
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-[#0b7285] px-5 py-3 text-white shadow-md shadow-cyan-500/20 hover:translate-y-[1px] active:translate-y-[2px] transition">
              Book a Strategy Call <ArrowRight size={18} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              See Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
