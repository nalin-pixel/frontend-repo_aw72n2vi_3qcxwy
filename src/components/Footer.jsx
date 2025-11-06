function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Intellica. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
