import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import Cursor from './components/Cursor'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <h2>Abubakar</h2>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  )
}

export default App
