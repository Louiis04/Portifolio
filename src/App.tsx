import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"
import { LanguageProvider } from "@/context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative isolate min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}
