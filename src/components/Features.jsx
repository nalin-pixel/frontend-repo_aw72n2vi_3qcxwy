import { Sparkles, Cpu, Workflow, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Adaptive Intelligence',
    desc: 'Agents that learn from context and optimize decisions in real-time.',
  },
  {
    icon: Cpu,
    title: 'RAG + Reasoning',
    desc: 'Best-in-class retrieval augmented generation with tool-use orchestration.',
  },
  {
    icon: Workflow,
    title: 'Seamless Orchestration',
    desc: 'Design multi-agent workflows with guardrails and observability.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    desc: 'Granular permissions, encryption, and audit trails baked in.',
  },
];

function Features() {
  return (
    <section id="ecosystem" className="relative py-20 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Intellica Ecosystem
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Connect your customers, agents, vendors, and supervisors in a living network.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 hover:shadow-xl hover:shadow-indigo-600/10 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-content-center shadow-lg shadow-indigo-600/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
