export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
        <p>© {new Date().getFullYear()} Sohaib Mahmood (Zabi). All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
