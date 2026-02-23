import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"
import { LanguageProvider } from "@/context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <div className="w-full border-t border-zinc-900" />
          <About />
          <div className="w-full border-t border-zinc-900" />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}
