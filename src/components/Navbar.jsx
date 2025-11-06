import { Rocket, Brain, LineChart, Shield } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200 dark:bg-slate-900/70 dark:supports-[backdrop-filter]:bg-slate-900/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-content-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-slate-900 dark:text-white font-semibold text-lg">Intellica</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700 dark:text-slate-200">
            <a href="#hero" className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-2">
              <Brain size={16} /> Intelligence
            </a>
            <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-2">
              <LineChart size={16} /> Ecosystem
            </a>
            <a href="#team" className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-2">
              <Shield size={16} /> Trust
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Learn more</a>
            <a href="#cta" className="inline-flex px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 transition-opacity">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
