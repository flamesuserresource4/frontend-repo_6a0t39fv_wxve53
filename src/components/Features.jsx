import { Bot, FileText, Coins, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Forms',
    desc: 'Qualify, route, and follow-up automatically',
    icon: FileText,
    color: 'from-teal-500/20 to-teal-600/10',
  },
  {
    title: 'AI Integrations',
    desc: 'n8n + GPT copilots that ship on day one',
    icon: Bot,
    color: 'from-fuchsia-500/20 to-purple-600/10',
  },
  {
    title: 'Payments',
    desc: 'Stripe & Razorpay flows that convert',
    icon: Coins,
    color: 'from-amber-400/30 to-yellow-300/10',
  },
  {
    title: 'Analytics',
    desc: 'Dashboards that tell the right story',
    icon: BarChart3,
    color: 'from-cyan-500/20 to-blue-600/10',
  },
];

export default function Features() {
  return (
    <section className="relative py-16" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-semibold text-white">Everything you need</h2>
          <p className="mt-2 text-slate-300">Opinionated building blocks mapped to your growth</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className={`group rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-sm shadow-black/20 backdrop-blur transition will-change-transform hover:-rotate-[1.2deg] hover:-translate-y-1`}> 
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${color}  flex items-center justify-center text-white/90 shadow-inner shadow-black/30`}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
