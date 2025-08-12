import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiTwitter,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'abubakar@example.com',
      link: 'mailto:abubakar@example.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com'
    }
  ]

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abubakar',
      color: '#0077B5'
    },
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com/abubakar',
      color: '#333'
    },
    {
      icon: <FiTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/abubakar',
      color: '#1DA1F2'
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
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div className="contact-form-section" variants={itemVariants}>
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>I'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hi!"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`btn btn-primary btn-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    className={`submit-status ${submitStatus}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {submitStatus === 'success' ? (
                      "✅ Message sent successfully! I'll get back to you soon."
                    ) : (
                      '❌ Something went wrong. Please try again or contact me directly.'
                    )}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="contact-info-section" variants={itemVariants}>
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Ready to start your next project? Let's talk!</p>

                <div className="contact-items">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      className="contact-item"
                      whileHover={{ x: 10 }}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="contact-icon">
                        {item.icon}
                      </div>
                      <div className="contact-details">
                        <span className="contact-title">{item.title}</span>
                        <span className="contact-value">{item.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-links">
                  <h4>Follow me on</h4>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                        <span className="social-tooltip">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="availability">
                  <div className="availability-status">
                    <div className="status-dot"></div>
                    <span>Available for freelance work</span>
                  </div>
                  <p>Currently open to new opportunities and collaborations</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="contact-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Ready to work together?</h3>
              <p>Let's create something amazing together. I'm just one message away!</p>
              <div className="cta-buttons">
                <a href="mailto:abubakar@example.com" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="/resume.pdf" download className="btn btn-outline">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

