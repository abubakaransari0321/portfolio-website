import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiLayers,
  FiGitBranch,
  FiTool
} from 'react-icons/fi'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      icon: <FiCode />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 92, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
        { name: 'Vue.js', level: 75, color: '#4FC08D' }
      ]
    },
    {
      icon: <FiServer />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications',
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Express.js', level: 88, color: '#000000' },
        { name: 'Python', level: 82, color: '#3776AB' },
        { name: 'REST APIs', level: 92, color: '#FF6B35' },
        { name: 'GraphQL', level: 78, color: '#E10098' },
        { name: 'Socket.io', level: 80, color: '#010101' }
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Database & Cloud',
      description: 'Managing data and cloud infrastructure',
      skills: [
        { name: 'MongoDB', level: 87, color: '#47A248' },
        { name: 'PostgreSQL', level: 83, color: '#336791' },
        { name: 'Redis', level: 75, color: '#DC382D' },
        { name: 'AWS', level: 80, color: '#FF9900' },
        { name: 'Docker', level: 85, color: '#2496ED' },
        { name: 'Firebase', level: 78, color: '#FFCA28' }
      ]
    },
    {
      icon: <FiTool />,
      title: 'DevOps & Tools',
      description: 'Deployment, monitoring, and development tools',
      skills: [
        { name: 'Git/GitHub', level: 93, color: '#F05032' },
        { name: 'CI/CD', level: 82, color: '#326CE5' },
        { name: 'Nginx', level: 77, color: '#009639' },
        { name: 'Linux', level: 85, color: '#FCC624' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Postman', level: 90, color: '#FF6C37' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  }

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={categoryVariants}>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={categoryVariants}
                whileHover={{ y: -10 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <div className="category-info">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}AA)`
                          }}
                          variants={skillVariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div className="additional-skills" variants={categoryVariants}>
            <h3>Other Technologies & Tools</h3>
            <div className="tech-tags">
              {[
                'Webpack', 'Vite', 'Sass', 'Jest', 'Cypress', 'Figma', 
                'Adobe XD', 'Photoshop', 'Jira', 'Slack', 'Notion', 'Trello'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={categoryVariants}>
            <div className="summary-grid">
              <div className="summary-item">
                <FiLayers className="summary-icon" />
                <h4>Full Stack</h4>
                <p>End-to-end development expertise</p>
              </div>
              <div className="summary-item">
                <FiGitBranch className="summary-icon" />
                <h4>Version Control</h4>
                <p>Git workflow and collaboration</p>
              </div>
              <div className="summary-item">
                <FiServer className="summary-icon" />
                <h4>DevOps</h4>
                <p>Deployment and infrastructure</p>
              </div>
              <div className="summary-item">
                <FiCode className="summary-icon" />
                <h4>Clean Code</h4>
                <p>Best practices and patterns</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

