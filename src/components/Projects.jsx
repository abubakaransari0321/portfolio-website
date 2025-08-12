import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiFilter, FiX } from 'react-icons/fi'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A complete e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      github: 'https://github.com/abubakar/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true,
      details: {
        overview: 'A comprehensive e-commerce platform built with modern web technologies, featuring a responsive design, secure payment processing, and an intuitive admin panel.',
        features: [
          'User registration and authentication',
          'Product catalog with search and filters',
          'Shopping cart and wishlist functionality',
          'Secure payment processing with Stripe',
          'Order tracking and management',
          'Admin dashboard for inventory management',
          'Email notifications and order confirmations',
          'Responsive design for all devices'
        ],
        challenges: 'Implementing secure payment processing and creating a scalable database schema for complex product relationships.',
        results: 'Successfully deployed with 99.9% uptime and processed over $10k in test transactions.'
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/abubakar/task-manager',
      live: 'https://taskmanager-demo.com',
      featured: false,
      details: {
        overview: 'A modern task management application that enables teams to collaborate effectively with real-time updates and intuitive user interface.',
        features: [
          'Real-time collaboration with Socket.io',
          'Drag and drop task management',
          'Team workspaces and project organization',
          'Due date tracking and notifications',
          'File attachments and comments',
          'Progress tracking and analytics',
          'Dark/light theme support',
          'Mobile-responsive design'
        ],
        challenges: 'Implementing real-time synchronization across multiple users and maintaining data consistency.',
        results: 'Improved team productivity by 40% in test environments with seamless real-time collaboration.'
      }
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Mapbox', 'Vuex'],
      github: 'https://github.com/abubakar/weather-dashboard',
      live: 'https://weather-dashboard-demo.com',
      featured: false,
      details: {
        overview: 'An elegant weather dashboard providing comprehensive weather information with beautiful visualizations and interactive maps.',
        features: [
          'Current weather conditions',
          '7-day weather forecast',
          'Interactive weather maps',
          'Location-based weather alerts',
          'Historical weather data',
          'Weather trends and analytics',
          'Multiple location tracking',
          'Customizable dashboard layout'
        ],
        challenges: 'Integrating multiple weather APIs and creating smooth map interactions with real-time data updates.',
        results: 'Achieved 95% accuracy in weather predictions and 4.8/5 user satisfaction rating.'
      }
    },
    {
      id: 4,
      title: 'DevOps Monitoring Tool',
      category: 'DevOps',
      description: 'A comprehensive monitoring solution for tracking application performance, server metrics, and deployment status.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Flask', 'Docker', 'Prometheus', 'Grafana', 'PostgreSQL'],
      github: 'https://github.com/abubakar/devops-monitor',
      live: 'https://monitor-demo.com',
      featured: true,
      details: {
        overview: 'A powerful monitoring tool designed to provide comprehensive insights into application performance and infrastructure health.',
        features: [
          'Real-time server monitoring',
          'Application performance metrics',
          'Custom alerting and notifications',
          'Interactive dashboards',
          'Log aggregation and analysis',
          'Deployment tracking',
          'Historical data analytics',
          'Multi-environment support'
        ],
        challenges: 'Handling large volumes of metric data and creating meaningful visualizations for complex infrastructure.',
        results: 'Reduced downtime by 60% and improved incident response time by 75% for monitored applications.'
      }
    },
    {
      id: 5,
      title: 'API Gateway Service',
      category: 'Backend',
      description: 'A scalable API gateway with rate limiting, authentication, load balancing, and comprehensive monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'Nginx'],
      github: 'https://github.com/abubakar/api-gateway',
      live: 'https://api-gateway-demo.com',
      featured: false,
      details: {
        overview: 'A robust API gateway solution that provides centralized routing, security, and monitoring for microservices architecture.',
        features: [
          'Request routing and load balancing',
          'Rate limiting and throttling',
          'JWT authentication and authorization',
          'Request/response transformation',
          'API versioning support',
          'Comprehensive logging and metrics',
          'Health checks and circuit breakers',
          'Developer portal and documentation'
        ],
        challenges: 'Implementing efficient rate limiting algorithms and ensuring high availability under heavy loads.',
        results: 'Successfully handled 10,000+ requests per second with 99.99% uptime and sub-10ms latency.'
      }
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'Full Stack',
      description: 'Advanced analytics platform for social media metrics with AI-powered insights and automated reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js', 'Celery'],
      github: 'https://github.com/abubakar/social-analytics',
      live: 'https://social-analytics-demo.com',
      featured: true,
      details: {
        overview: 'An intelligent social media analytics platform that provides deep insights and predictions using machine learning algorithms.',
        features: [
          'Multi-platform social media integration',
          'AI-powered sentiment analysis',
          'Automated report generation',
          'Interactive data visualizations',
          'Trend prediction and forecasting',
          'Competitor analysis',
          'Custom KPI tracking',
          'Real-time monitoring dashboards'
        ],
        challenges: 'Processing large volumes of social media data and implementing accurate sentiment analysis algorithms.',
        results: 'Improved marketing ROI by 35% for clients through data-driven insights and predictions.'
      }
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore some of my recent work and side projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div className="filter-container" variants={itemVariants}>
            <div className="filter-buttons">
              <FiFilter className="filter-icon" />
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.featured && (
                    <div className="featured-badge">
                      Featured
                    </div>
                  )}
                  
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-link"
                        >
                          <FiGithub />
                        </a>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-link"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-category">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div className="projects-cta" variants={itemVariants}>
            <a 
              href="https://github.com/abubakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View More Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FiX />
              </button>

              <div className="modal-content">
                <div className="modal-header">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <div className="modal-info">
                    <span className="modal-category">{selectedProject.category}</span>
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.details.overview}</p>
                    
                    <div className="modal-links">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                        <FiGithub /> View Code
                      </a>
                      <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h4>Technologies Used</h4>
                    <div className="modal-technologies">
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-section">
                    <h4>Challenges & Solutions</h4>
                    <p>{selectedProject.details.challenges}</p>
                  </div>

                  <div className="modal-section">
                    <h4>Results & Impact</h4>
                    <p>{selectedProject.details.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

