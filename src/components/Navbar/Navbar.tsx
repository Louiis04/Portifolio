function Logo() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Luís"
    >
      <rect width="34" height="34" rx="8" fill="white" fillOpacity="0.06" />
      <rect width="34" height="34" rx="8" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="10" y="8" width="3.5" height="18" rx="1" fill="white" />
      <rect x="10" y="22.5" width="14" height="3.5" rx="1" fill="white" />
      <circle cx="25" cy="9" r="2" fill="white" fillOpacity="0.5" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo />
        </a>
        <nav className="flex items-center gap-7 text-sm text-zinc-500">
          <a href="#about" className="hover:text-zinc-200 transition-colors duration-200">
            Sobre
          </a>
          <a href="#projects" className="hover:text-zinc-200 transition-colors duration-200">
            Projetos
          </a>
          <a href="#contact" className="hover:text-zinc-200 transition-colors duration-200">
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
