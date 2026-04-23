import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import BackToTop from './components/Layout/BackToTop'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Experience from './components/Sections/Experience'
import Contact from './components/Sections/Contact'
import NotFound from './components/Sections/NotFound'
import LoadingScreen from './components/UI/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f172a] text-white transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App