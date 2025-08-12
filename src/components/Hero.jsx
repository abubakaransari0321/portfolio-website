import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const titles = [
    'DevOps Engineer',
    'Full Stack Developer',
    'Cloud Architect',
    'Problem Solver'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentTitle = titles[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1))
        
        if (text === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1))
        
        if (text === '') {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % titles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, currentIndex, isDeleting, titles])

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              👋 Hi, I'm
            </motion.p>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Abubakar
            </motion.h1>
            
            <div className="hero-title-container">
              <span className="hero-title-prefix">I am a </span>
              <span className="hero-title-dynamic">
                {text}
                <span className="cursor-blink">|</span>
              </span>
            </div>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Passionate about building scalable web applications and optimizing 
              infrastructure. I love solving real-world problems through code and 
              modern technologies. When I'm not coding, I enjoy learning new tech 
              trends and contributing to open-source projects.
            </motion.p>
            
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="code-snippet">
                  <div className="code-header">
                    <div className="code-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className="code-title">portfolio.js</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-variable"> developer</span>
                      <span className="code-operator"> = </span>
                      <span className="code-bracket">{'{'}</span>
                    </div>
                    <div className="code-line">
                      <span className="code-property">  name:</span>
                      <span className="code-string"> 'Abubakar'</span>
                      <span className="code-comma">,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-property">  role:</span>
                      <span className="code-string"> 'DevOps Engineer'</span>
                      <span className="code-comma">,</span>
                    </div>
                    <div className="code-line">
                      <span className="code-property">  skills:</span>
                      <span className="code-bracket"> [</span>
                      <span className="code-string">'React'</span>
                      <span className="code-comma">, </span>
                      <span className="code-string">'Node.js'</span>
                      <span className="code-bracket">]</span>
                    </div>
                    <div className="code-line">
                      <span className="code-bracket">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="https://github.com/abubakar" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/abubakar" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="mailto:abubakar@example.com">
            <FiMail />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={() => scrollToSection('#about')}
        >
          <span>Scroll to explore</span>
          <FiArrowDown className="scroll-arrow" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

