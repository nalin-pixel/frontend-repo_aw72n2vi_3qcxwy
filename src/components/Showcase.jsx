import { motion, useScroll, useTransform } from 'framer-motion';

function Showcase() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Retrieval-Augmented Generation in Action</h2>
          <p className="mt-3 text-white/70">Document understanding with live data streams and holographic scans.</p>
        </div>

        <motion.div style={{ scale, opacity }} className="mt-12 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <div className="relative aspect-[16/9] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),rgba(2,6,23,0.9))]">
            <div className="absolute inset-0 bg-[linear-gradient(transparent,transparent_96%,rgba(255,255,255,0.06)_96%,rgba(255,255,255,0.06))] bg-[length:100%_4px] animate-[scan_4s_linear_infinite]" />
            <div className="absolute inset-0">{
              Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute h-0.5 w-0.5 bg-cyan-300/70 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                  }}
                />
              ))
            }</div>
          </div>
        </motion.div>

        <style>{`
          @keyframes scan { 0% { background-position: 0 0; } 100% { background-position: 0 100%; } }
        `}</style>
      </div>
    </section>
  );
}

export default Showcase;
