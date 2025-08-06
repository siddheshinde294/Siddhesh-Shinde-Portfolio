import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink, Calendar, Code, Database, Globe, CheckCircle, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function ProjectsPage() {
  const projects = [
    {
      title: "Zenith - AI Desktop Assistant",
      description: "An intelligent desktop assistant built with Python that utilizes natural language processing to understand user commands and automate daily tasks. Features voice recognition, task scheduling, and smart automation capabilities.",
      longDescription: "Zenith represents a comprehensive solution for desktop automation and personal assistance. The project leverages advanced NLP techniques using NLTK and FuzzyWuzzy for command interpretation, making it intuitive for users to interact with their computer through natural speech. The assistant can perform file operations, manage applications, set reminders, and even learn user preferences over time.",
      tech: ["Python", "NLTK", "FuzzyWuzzy", "Speech Recognition", "Tkinter", "SQLite"],
      category: "AI/ML",
      featured: true,
      status: "Completed",
      date: "2024",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Voice command recognition and processing",
        "Natural language understanding using NLTK",
        "Automated task scheduling and reminders",
        "File system navigation and management",
        "Learning user preferences and habits",
        "Cross-platform desktop integration"
      ],
      challenges: [
        "Implementing accurate speech-to-text conversion",
        "Training NLP models for command interpretation",
        "Optimizing response time for real-time interactions",
        "Ensuring cross-platform compatibility"
      ]
    },
    {
      title: "Mera Gullak - Investment Website",
      description: "A comprehensive investment platform featuring user authentication, portfolio management, and real-time data visualization. Built with modern web technologies to provide a seamless investment tracking experience.",
      longDescription: "Mera Gullak is a full-stack investment management platform designed to help users track their investments across multiple asset classes. The platform provides real-time market data integration, portfolio analytics, and personalized investment recommendations based on user risk profiles and financial goals.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Chart.js", "Bootstrap"],
      category: "Web Development",
      featured: true,
      status: "Completed",
      date: "2024",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Secure user authentication and authorization",
        "Real-time portfolio tracking and analytics",
        "Interactive data visualization with charts",
        "Multi-asset class investment support",
        "Risk assessment and investment recommendations",
        "Mobile-responsive design"
      ],
      challenges: [
        "Integrating real-time market data APIs",
        "Implementing secure payment gateways",
        "Optimizing database queries for large datasets",
        "Ensuring data security and compliance"
      ]
    },
    {
      title: "Audio to Sign Language Converter",
      description: "Real-time audio processing system that converts speech to sign language gestures using computer vision and machine learning. Designed to bridge communication gaps for the hearing-impaired community.",
      longDescription: "This innovative project addresses accessibility challenges by providing real-time translation from spoken language to sign language gestures. Using advanced computer vision and machine learning techniques, the system processes audio input, converts it to text, and then displays corresponding sign language gestures through 3D animation models.",
      tech: ["Python", "Django", "OpenCV", "TensorFlow", "MediaPipe", "WebSocket", "JavaScript"],
      category: "AI/ML",
      featured: false,
      status: "Completed",
      date: "2023-2024",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time speech-to-text conversion",
        "3D sign language gesture rendering",
        "Multi-language support",
        "Web-based interface for accessibility",
        "Gesture accuracy validation",
        "Educational mode for sign language learning"
      ],
      challenges: [
        "Achieving high accuracy in gesture recognition",
        "Optimizing real-time processing performance",
        "Creating comprehensive sign language datasets",
        "Ensuring cross-cultural sign language compatibility"
      ]
    },
    {
      title: "Multilingual Voice Translator",
      description: "Cross-platform application enabling real-time voice translation across multiple languages with an intuitive GUI. Supports over 50 languages with offline capability for essential translations.",
      longDescription: "A desktop application that breaks language barriers by providing instant voice translation between multiple languages. The application features both online and offline modes, with the offline mode supporting essential phrases and common conversations for travelers and business professionals.",
      tech: ["Python", "Googletrans", "Tkinter", "PyAudio", "SpeechRecognition", "gTTS"],
      category: "Application",
      featured: false,
      status: "Completed",
      date: "2023",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Voice input and output in 50+ languages",
        "Real-time translation with minimal latency",
        "Offline mode for common phrases",
        "Audio playback of translations",
        "History and favorites management",
        "Customizable interface themes"
      ],
      challenges: [
        "Handling diverse accents and speaking styles",
        "Minimizing translation latency",
        "Implementing reliable offline functionality",
        "Optimizing audio processing algorithms"
      ]
    }
  ];

  const projectStats = [
    { label: "Total Projects", value: "4+", icon: Code },
    { label: "Technologies Used", value: "25+", icon: Database },
    { label: "Lines of Code", value: "50K+", icon: Github },
    { label: "Domains Covered", value: "6+", icon: Globe }
  ];

  const categories = ["All", "AI/ML", "Web Development", "Application"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of innovative solutions, creative implementations, and technical expertise across various domains and technologies.
            </p>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {projectStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-6 relative z-10">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-purple-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                    : "border-purple-400/50 text-purple-300 hover:bg-purple-400/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.01, 
                  boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)" 
                }}
              >
                <Card className={`bg-black/40 border-purple-500/20 backdrop-blur-lg hover:border-purple-400/40 transition-all duration-300 ${project.featured ? 'ring-2 ring-purple-400/30' : ''} relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-4 md:p-8 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Project Info */}
                      <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                            <div>
                              {project.featured && (
                                <Badge className="mb-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                                  Featured Project
                                </Badge>
                              )}
                              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                              <p className="text-gray-300 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 sm:ml-4">
                              <Badge 
                                variant="outline" 
                                className="bg-green-500/10 border-green-400/50 text-green-300"
                              >
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {project.status}
                              </Badge>
                              <div className="flex items-center text-gray-400 text-sm">
                                <Calendar className="w-4 h-4 mr-1" />
                                {project.date}
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-purple-300 mb-3">Project Overview</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{project.longDescription}</p>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-purple-300 mb-3">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-purple-400/30 text-purple-200">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                            <Button 
                              className="bg-[#333] hover:bg-[#24292e] text-white border-0 shadow-lg shadow-gray-500/25"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                            <Button 
                              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-lg shadow-green-500/25"
                              onClick={() => window.open('#', '_blank')}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Verify Project
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4 md:space-y-6">
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Card className="bg-purple-900/20 border-purple-400/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardContent className="p-4 md:p-6 relative z-10">
                              <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Features</h3>
                              <div className="space-y-2">
                                {project.features.slice(0, 4).map((feature, i) => (
                                  <div key={i} className="flex items-start text-sm">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                  </div>
                                ))}
                                {project.features.length > 4 && (
                                  <p className="text-xs text-gray-400 ml-4">+{project.features.length - 4} more features</p>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Card className="bg-blue-900/20 border-blue-400/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardContent className="p-4 md:p-6 relative z-10">
                              <h3 className="text-lg font-semibold text-blue-300 mb-3">Technical Challenges</h3>
                              <div className="space-y-2">
                                {project.challenges.map((challenge, i) => (
                                  <div key={i} className="flex items-start text-sm">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                    <span className="text-gray-300">{challenge}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 text-center relative z-10">
                <h2 className="text-3xl font-semibold mb-4 text-white">Interested in Collaborating?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  I'm always excited to work on innovative projects and explore new technologies. 
                  Let's discuss how we can bring your ideas to life!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    className="bg-[#0077B5] hover:bg-[#005885] text-white border-0 shadow-lg shadow-blue-500/25"
                    onClick={() => window.open('https://www.linkedin.com/in/siddheshinde/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    className="bg-[#333] hover:bg-[#24292e] text-white border-0 shadow-lg shadow-gray-500/25"
                    onClick={() => window.open('https://github.com/siddheshinde294', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}