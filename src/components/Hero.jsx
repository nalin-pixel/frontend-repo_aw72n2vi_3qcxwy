import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-gradient-to-r from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live • The future of AI interfaces
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Intellica — Intelligent Experiences, Real Results
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
            Revolutionizing AI interaction with adaptive reasoning and automation. Build, orchestrate, and deploy AI agents with cinematic precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ecosystem" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-700/20 hover:opacity-90 transition">Get Started</a>
            <a href="#team" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition">Watch Demo</a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
