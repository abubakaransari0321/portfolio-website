import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiUsers, FiTrendingUp, FiCode } from 'react-icons/fi'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: <FiCode />,
      number: '50+',
      label: 'Projects Completed',
      color: '#FFD700'
    },
    {
      icon: <FiUsers />,
      number: '30+',
      label: 'Happy Clients',
      color: '#FF6B6B'
    },
    {
      icon: <FiTrendingUp />,
      number: '3+',
      label: 'Years Experience',
      color: '#4ECDC4'
    },
    {
      icon: <FiAward />,
      number: '15+',
      label: 'Technologies',
      color: '#45B7D1'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </motion.div>

          <div className="about-grid">
            {/* About Text */}
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-description">
                <p>
                  I'm Abubakar, a passionate <span className="highlight">full stack developer</span> with 
                  experience in building dynamic web applications. With a strong foundation in both 
                  frontend and backend technologies, I love solving real-world problems through code.
                </p>
                
                <p>
                  I specialize in modern web frameworks, responsive design, and clean, maintainable code. 
                  My expertise spans across <span className="highlight">React</span>, <span className="highlight">Node.js</span>, 
                  <span className="highlight">Express</span>, and database management, ensuring efficient data 
                  storage and retrieval.
                </p>
                
                <p>
                  When I'm not coding, I enjoy learning new tech trends, contributing to open-source projects, 
                  and sharing knowledge with the developer community. I believe in continuous learning and 
                  staying updated with the latest technologies.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>🎯 Problem Solver</h4>
                  <p>I enjoy breaking down complex problems into manageable solutions</p>
                </div>
                <div className="highlight-item">
                  <h4>🚀 Innovation Focused</h4>
                  <p>Always exploring new technologies and best practices</p>
                </div>
                <div className="highlight-item">
                  <h4>🤝 Team Player</h4>
                  <p>Collaborative approach with excellent communication skills</p>
                </div>
                <div className="highlight-item">
                  <h4>📚 Continuous Learner</h4>
                  <p>Committed to staying current with industry trends</p>
                </div>
              </div>
            </motion.div>

            {/* About Visual */}
            <motion.div className="about-visual" variants={itemVariants}>
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="code-animation">
                    <div className="code-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="developer-icon">
                    👨‍💻
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="element element-1">React</div>
                  <div className="element element-2">Node.js</div>
                  <div className="element element-3">MongoDB</div>
                  <div className="element element-4">DevOps</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 30px rgba(${stat.color === '#FFD700' ? '255, 215, 0' : '255, 255, 255'}, 0.2)`
                  }}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="about-cta" variants={itemVariants}>
            <p>Want to know more about my experience and skills?</p>
            <div className="cta-buttons">
              <a href="/resume.pdf" download className="btn btn-primary">
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

