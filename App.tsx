import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Download, Mail, Linkedin, Github, MapPin, Phone, Home, User, FolderOpen, MessageSquare, Award, Code, Send, ArrowUp } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
// Profile image
const exampleImage = '/assets/profile-photo.jpg';
import { AboutPage } from './components/AboutPage';
import { SkillsPage } from './components/SkillsPage';
import { CertificationsPage } from './components/CertificationsPage';
import { ProjectsPage } from './components/ProjectsPage';

type PageType = 'home' | 'about' | 'skills' | 'certifications' | 'projects';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [showLandingAnimation, setShowLandingAnimation] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // More responsive cursor tracking
  const springConfig = { damping: 15, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, type: 'page' as const },
    { id: 'about', label: 'About', icon: User, type: 'page' as const },
    { id: 'skills', label: 'Skills', icon: Code, type: 'page' as const },
    { id: 'certifications', label: 'Certifications', icon: Award, type: 'page' as const },
    { id: 'projects', label: 'Projects', icon: FolderOpen, type: 'page' as const },
    { id: 'contact', label: 'Contact', icon: MessageSquare, type: 'scroll' as const },
  ];

  const handleNavigation = (itemId: string, type: 'page' | 'scroll') => {
    setClickedItem(itemId);
    setTimeout(() => setClickedItem(null), 300);
    
    if (itemId === 'home') {
      // Always go to home page and scroll to top
      setCurrentPage('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (type === 'page') {
      setCurrentPage(itemId as PageType);
      setActiveSection(itemId);
      // Scroll to top of the new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to contact section if on home page
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => scrollToSection(itemId), 100);
      } else {
        scrollToSection(itemId);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 20;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Check if we're in development or production
      const isDevelopment = import.meta.env.DEV;
      
      if (isDevelopment) {
        // In development, just simulate success
        console.log('Contact form submission (development):', contactForm);
        
        // Reset form
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Show success message
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        
        return;
      }
      
      // In production, send to Vercel API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        // Reset form
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        // Show success message
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    setMounted(true);
    
    // Hide landing animation after 3 seconds
    const timer = setTimeout(() => {
      setShowLandingAnimation(false);
    }, 3000);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 50);
      cursorY.set(e.clientY - 50);
    };

    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 300);

      if (currentPage === 'home') {
        const sections = ['home', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY, currentPage]);

  if (!mounted) return null;

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#11071F] via-[#1a0b2e] to-[#2b0b3a] text-white relative overflow-x-hidden">
        {/* Success Message */}
        <AnimatePresence>
          {showSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg border border-green-400/30"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Message sent successfully!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Landing Animation */}
        <AnimatePresence>
          {showLandingAnimation && (
            <motion.div
              className="fixed inset-0 z-[100] bg-gradient-to-br from-[#11071F] via-[#1a0b2e] to-[#2b0b3a] flex items-center justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center space-y-8">
                <motion.div
                  className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  SS
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h1 className="text-3xl font-semibold text-white font-serif uppercase tracking-wider">SIDDHESH JITENDRA SHINDE</h1>
                  <p className="text-purple-300">Welcome to my digital portfolio</p>
                </motion.div>
                <motion.div
                  className="flex justify-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-purple-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Massive Glow Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-[40px] opacity-70 pointer-events-none z-50 mix-blend-screen"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 p-0"
                size="sm"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Static Left Sidebar */}
        <div className="fixed left-0 top-0 h-full w-20 bg-black/40 backdrop-blur-lg border-r border-purple-500/20 z-40">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="absolute top-6">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SS
              </div>
            </div>
            
            {/* Centered Navigation Widget */}
            <div className="bg-black/60 rounded-2xl p-4 space-y-3 border border-purple-500/20">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                const isClicked = clickedItem === item.id;
                
                return (
                  <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={() => handleNavigation(item.id, item.type)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-400/50'
                            : 'bg-purple-500/10 hover:bg-purple-500/20'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Glow effect on click */}
                        {isClicked && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-60 blur-md"
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        {/* Hover glow effect */}
                        {(isHovered || isActive) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        
                        <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? 'text-purple-300' : 'text-purple-400'
                        }`} />
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div 
                            className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-black/80 border-purple-500/30">
                      <p className="text-purple-200">{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
            
            <div className="absolute bottom-6 flex flex-col items-center space-y-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20">
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Hero Section */}
                <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
                  <div className="container mx-auto px-6">
                    {/* Mobile Layout: Photo First */}
                    <div className="lg:hidden flex flex-col items-center space-y-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                      >
                        <div className="relative">
                          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                              <img
                                src={exampleImage}
                                alt="Siddhesh Jitendra Shinde"
                                className="w-60 h-60 rounded-full object-cover"
                              />
                            </div>
                          </div>
                          {/* Enhanced frame glow */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl -z-10" />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center space-y-6"
                      >
                        <div className="space-y-4">
                          <p className="text-purple-400 text-lg">Hello! I Am</p>
                          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent font-serif tracking-wide uppercase">
                            SIDDHESH JITENDRA SHINDE
                          </h1>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            Final-year CSE (AI & ML) student with an interest in solving real-world problems through technology. 
                            Skilled in web development with JavaScript and MongoDB, and exploring data analytics using Python.
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-3">
                          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full relative overflow-hidden group shadow-lg shadow-purple-500/25">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur" />
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Download className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">Resume</span>
                          </Button>
                          
                          <Button 
                            className="bg-[#0077B5] hover:bg-[#005885] text-white border-0 px-6 py-2 rounded-full relative overflow-hidden group shadow-lg shadow-blue-500/25"
                            onClick={() => window.open('https://www.linkedin.com/in/siddheshinde/', '_blank')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Linkedin className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">LinkedIn</span>
                          </Button>
                          
                          <Button 
                            className="bg-[#333] hover:bg-[#24292e] text-white border-0 px-6 py-2 rounded-full relative overflow-hidden group shadow-lg shadow-gray-500/25"
                            onClick={() => window.open('https://github.com/siddheshinde294', '_blank')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Github className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">GitHub</span>
                          </Button>
                          
                          <Button 
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-6 py-2 rounded-full relative overflow-hidden group shadow-lg shadow-red-500/25"
                            onClick={() => handleNavigation('contact', 'scroll')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Mail className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">Contact</span>
                          </Button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Desktop Layout: Side by Side */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <p className="text-purple-400 text-lg">Hello! I Am</p>
                          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent font-serif tracking-wide uppercase">
                            SIDDHESH JITENDRA SHINDE
                          </h1>
                          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            Final-year CSE (AI & ML) student with an interest in solving real-world problems through technology. 
                            Skilled in web development with JavaScript and MongoDB, and exploring data analytics using Python. 
                            Comfortable with tools like Figma and Canva. Actively learning .NET and Angular to expand my skill set. 
                            Focused on continuous learning and improvement.
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                          <Button 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full relative overflow-hidden group shadow-lg shadow-purple-500/25"
                            onClick={() => window.open('https://drive.google.com/file/d/1SW22D0jFGB37uY3peXaKGKNhHMCQfmjy/view?usp=drive_link', '_blank')}
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur" />
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Download className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">Download Resume</span>
                          </Button>
                          
                          <Button 
                            className="bg-[#0077B5] hover:bg-[#005885] text-white border-0 px-8 py-3 rounded-full relative overflow-hidden group shadow-lg shadow-blue-500/25"
                            onClick={() => window.open('https://www.linkedin.com/in/siddheshinde/', '_blank')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Linkedin className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">LinkedIn</span>
                          </Button>
                          
                          <Button 
                            className="bg-[#333] hover:bg-[#24292e] text-white border-0 px-8 py-3 rounded-full relative overflow-hidden group shadow-lg shadow-gray-500/25"
                            onClick={() => window.open('https://github.com/siddheshinde294', '_blank')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Github className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">GitHub</span>
                          </Button>
                          
                          <Button 
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-3 rounded-full relative overflow-hidden group shadow-lg shadow-red-500/25"
                            onClick={() => handleNavigation('contact', 'scroll')}
                          >
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Mail className="w-4 h-4 mr-2 relative z-10" />
                            <span className="relative z-10">Get In Touch</span>
                          </Button>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                      >
                        <div className="relative">
                          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                              <img
                                src={exampleImage}
                                alt="Siddhesh Jitendra Shinde"
                                className="w-72 h-72 rounded-full object-cover"
                              />
                            </div>
                          </div>
                          {/* Enhanced frame glow */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl -z-10" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>

                {/* Experience Section */}
                <section className="py-20 relative">
                  <div className="container mx-auto px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-12"
                    >
                      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Experience & Leadership
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        {[
                          {
                            role: "Student",
                            organization: "Lokmanya Tilak College of Engineering",
                            duration: "2022-2026",
                            description: "Pursuing BE in Computer Science & Engineering (AI & ML) with focus on innovative technology solutions."
                          },
                          {
                            role: "NSS Coordinator",
                            organization: "National Service Scheme",
                            duration: "2024-25",
                            description: "Leading community service initiatives and social welfare programs for student development."
                          },
                          {
                            role: "Vice President",
                            organization: "AIMSA (AI & ML Student Association)",
                            duration: "2024-25",
                            description: "Organizing technical events, workshops, and fostering AI/ML learning among peers."
                          },
                          {
                            role: "Documentation Coordinator",
                            organization: "Road Safety Club - NSS",
                            duration: "2023-24",
                            description: "Managing documentation and promoting road safety awareness campaigns."
                          }
                        ].map((exp, index) => (
                          <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.02, 
                              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" 
                            }}
                          >
                            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg hover:border-purple-400/40 transition-all duration-300 h-full relative overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <CardContent className="p-6 relative z-10">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                    <p className="text-purple-300">{exp.organization}</p>
                                  </div>
                                  <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                                    {exp.duration}
                                  </Badge>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 relative">
                  <div className="container mx-auto px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-12"
                    >
                      <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Get In Touch
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                          Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
                        </p>
                      </div>
                      
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
                          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <CardContent className="p-8 relative z-10">
                              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Send Message</h3>
                              <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                                    <Input
                                      id="name"
                                      type="text"
                                      value={contactForm.name}
                                      onChange={(e) => handleContactChange('name', e.target.value)}
                                      required
                                      className="bg-purple-900/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                                      placeholder="Enter your full name"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                                    <Input
                                      id="phone"
                                      type="tel"
                                      value={contactForm.phone}
                                      onChange={(e) => handleContactChange('phone', e.target.value)}
                                      className="bg-purple-900/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                                      placeholder="+91 9876543210"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={contactForm.email}
                                    onChange={(e) => handleContactChange('email', e.target.value)}
                                    required
                                    className="bg-purple-900/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                                    placeholder="your.email@example.com"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                                  <Input
                                    id="subject"
                                    type="text"
                                    value={contactForm.subject}
                                    onChange={(e) => handleContactChange('subject', e.target.value)}
                                    required
                                    className="bg-purple-900/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
                                    placeholder="What's this about?"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                                  <Textarea
                                    id="message"
                                    value={contactForm.message}
                                    onChange={(e) => handleContactChange('message', e.target.value)}
                                    required
                                    rows={6}
                                    className="bg-purple-900/20 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 resize-none"
                                    placeholder="Tell me about your project or inquiry..."
                                  />
                                </div>
                                <Button 
                                  type="submit"
                                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 relative overflow-hidden group"
                                >
                                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Message
                                </Button>
                              </form>
                            </CardContent>
                          </Card>
                        </motion.div>
                        
                        {/* Contact Info */}
                        <div className="space-y-6">
                          <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
                            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <CardContent className="p-8 space-y-6 relative z-10">
                                <h3 className="text-2xl font-semibold text-purple-300">Contact Information</h3>
                                
                                <div className="space-y-4">
                                  <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                      <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                      <p className="text-gray-400 text-sm">Email</p>
                                      <a href="mailto:siddheshinde294@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                                        siddheshinde294@gmail.com
                                      </a>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                      <Phone className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                      <p className="text-gray-400 text-sm">Phone</p>
                                      <span className="text-white">+91 9322049117</span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                      <MapPin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                      <p className="text-gray-400 text-sm">Location</p>
                                      <span className="text-white">Ambernath, Maharashtra, India</span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                      <Linkedin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                      <p className="text-gray-400 text-sm">LinkedIn</p>
                                      <a 
                                        href="https://www.linkedin.com/in/siddheshinde/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-purple-300 transition-colors"
                                      >
                                        linkedin.com/in/siddheshinde
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                          
                          <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
                            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <CardContent className="p-8 relative z-10">
                                <h3 className="text-xl font-semibold mb-4 text-purple-300">Let's Connect!</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                  I'm always excited to discuss new opportunities, collaborations, or just have a conversation about technology and innovation. Feel free to reach out!
                                </p>
                                <div className="flex space-x-4">
                                  <Button
                                    className="bg-[#0077B5] hover:bg-[#005885] text-white border-0 px-6 py-2 rounded-lg flex items-center space-x-2"
                                    onClick={() => window.open('https://www.linkedin.com/in/siddheshinde/', '_blank')}
                                  >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                  </Button>
                                  <Button
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-6 py-2 rounded-lg flex items-center space-x-2"
                                    onClick={() => window.open('mailto:siddheshinde294@gmail.com', '_blank')}
                                  >
                                    <Mail className="w-4 h-4" />
                                    <span>Gmail</span>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </section>
              </motion.div>
            )}

            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'skills' && <SkillsPage />}
            {currentPage === 'certifications' && <CertificationsPage />}
            {currentPage === 'projects' && <ProjectsPage />}
          </AnimatePresence>

          {/* Footer - Only show on home page */}
          {currentPage === 'home' && (
            <footer className="py-8 border-t border-purple-500/20">
              <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400">
                  © 2025 Siddhesh Jitendra Shinde. Built with passion and innovation.
                </p>
              </div>
            </footer>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}