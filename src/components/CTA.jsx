function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative">
            <h3 className="text-3xl font-bold">Make decisions with confidence</h3>
            <p className="mt-3 text-white/80">Join forward-thinking teams who use Intellica to move from data to decisive action in minutes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 hover:bg-slate-100 transition-colors">Create free workspace</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md px-5 py-3 ring-1 ring-inset ring-white/30 text-white hover:bg-white/10 transition-colors">Book a demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
