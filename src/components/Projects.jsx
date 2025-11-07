import { useMemo, useState } from 'react';
import { X, Tag } from 'lucide-react';

const PROJECTS = [
  {
    id: 'p1',
    title: 'GHL Lead Engine',
    tags: ['GHL', 'AI'],
    cover: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    problem: 'Lead qualification was manual and slow, leaking revenue.',
    stack: 'GoHighLevel, n8n, OpenAI, Webhooks',
    build: 'Built form enrichment, scoring, and auto-routes to pipelines.',
    outcome: '33% more SQLs and 2.1x faster first response time.',
  },
  {
    id: 'p2',
    title: 'n8n Billing Ops',
    tags: ['n8n', 'Web'],
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    problem: 'Failed handoffs between billing apps and CRM.',
    stack: 'n8n, Stripe, PostgreSQL',
    build: 'Automated retries, receipts, and MRR dashboards.',
    outcome: 'Payment failures down 41%, finance close time -3 days.',
  },
  {
    id: 'p3',
    title: 'AI Support Copilot',
    tags: ['AI', 'Web'],
    cover: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=1200&auto=format&fit=crop',
    problem: 'Support backlog and inconsistent resolutions.',
    stack: 'Next.js, OpenAI, Supabase',
    build: 'Context-aware replies, macros, and escalation paths.',
    outcome: 'First reply time -58%, CSAT +12 points.',
  },
  {
    id: 'p4',
    title: 'Stripe <> GHL Sync',
    tags: ['GHL', 'Payments'],
    cover: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop',
    problem: 'Subscriptions not reflected in CRM segments.',
    stack: 'Stripe, GoHighLevel, n8n',
    build: 'Bi-directional sync, dunning, lifecycle automations.',
    outcome: 'Churn -9% and upsell conversion +14%.',
  },
  {
    id: 'p5',
    title: 'OKX Trading Bots',
    tags: ['AI', 'Web'],
    cover: 'https://images.unsplash.com/photo-1640340434857-cd45c2977cc5?q=80&w=1200&auto=format&fit=crop',
    problem: 'Manual trade execution led to missed entries.',
    stack: 'Node, OKX API, Telegram Bots',
    build: 'Signal ingestion, risk guards, auto-execution.',
    outcome: 'Reduced slippage 23%, uptime 99.9%.',
  },
  {
    id: 'p6',
    title: 'Razorpay Funnels',
    tags: ['Payments', 'Web'],
    cover: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1200&auto=format&fit=crop',
    problem: 'Checkout friction and abandoned carts.',
    stack: 'Razorpay, Next.js, Vercel',
    build: 'Optimized checkout, webhooks, cohort tracking.',
    outcome: 'Checkout completion +19%, CAC payback -12 days.',
  },
];

const FILTERS = ['All', 'GHL', 'n8n', 'AI', 'Web', 'Payments'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    if (active === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`rounded-full px-3 py-1.5 text-sm transition border ${active===f ? 'bg-[#0b7285] text-white border-transparent' : 'text-slate-300 border-white/10 hover:bg-white/10'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <button key={p.id} onClick={() => setOpen(p)} className="group text-left overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur shadow-sm shadow-black/20 hover:-rotate-[1.2deg] hover:-translate-y-1 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300">
                      <Tag size={12} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="max-w-2xl w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            <div className="relative">
              <img src={open.cover} alt="" className="w-full max-h-[40vh] object-cover" />
              <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 grid gap-3">
              <h3 className="text-white text-xl font-semibold">{open.title}</h3>
              <p className="text-slate-300"><span className="font-medium text-white">Problem:</span> {open.problem}</p>
              <p className="text-slate-300"><span className="font-medium text-white">Stack:</span> {open.stack}</p>
              <p className="text-slate-300"><span className="font-medium text-white">What I built:</span> {open.build}</p>
              <p className="text-slate-300"><span className="font-medium text-white">Outcome:</span> {open.outcome}</p>
              <div className="flex justify-end">
                <button onClick={() => setOpen(null)} className="rounded-xl bg-[#0b7285] px-4 py-2 text-white">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
