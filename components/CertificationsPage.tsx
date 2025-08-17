/**
 * Copyright (c) 2025 Siddhesh Jitendra Shinde
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function CertificationsPage() {
  const certifications = [
    {
      title: "IBM SkillsBuild – Data Analytics",
      issuer: "IBM",
      date: "2024",
      type: "Professional Certificate",
      description: "Comprehensive program covering data analysis techniques, statistical methods, and visualization tools for business insights.",
      skills: ["Data Analysis", "Statistical Methods", "Excel", "Data Visualization"],
      featured: true,
      credentialId: "IBM-DA-2024-001"
    },
    {
      title: "IBM SkillsBuild – Enterprise Data Science",
      issuer: "IBM",
      date: "2024",
      type: "Professional Certificate", 
      description: "Advanced certification in enterprise-level data science methodologies, machine learning, and business intelligence.",
      skills: ["Machine Learning", "Python", "Business Intelligence", "Data Mining"],
      featured: true,
      credentialId: "IBM-EDS-2024-002"
    },
    {
      title: "Code Unnati – SAP Program",
      issuer: "SAP India",
      date: "2024",
      type: "Foundation Course",
      description: "Specialized training in SAP technologies and enterprise software solutions for business process optimization.",
      skills: ["SAP", "Enterprise Software", "Business Process", "ERP Systems"],
      featured: false,
      credentialId: "CU24_5961"
    }
  ];

  const achievements = [
    {
      title: "Innovation Marathon",
      category: "Competition",
      achievement: "Semi-Finalist",
      date: "2024",
      description: "Reached semi-finals in the prestigious Innovation Marathon, competing with innovative technology solutions.",
      impact: "Top 50 teams nationwide"
    },
    {
      title: "District Science Exhibition",
      category: "Academic",
      achievement: "Winner",
      date: "2023",
      description: "First place in the Government of Maharashtra District Science Exhibition for innovative project in computer science domain.",
      impact: "District level recognition"
    },
    {
      title: "College Academic Excellence",
      category: "Academic",
      achievement: "8.10 CGPA",
      date: "Ongoing",
      description: "Maintaining consistent academic performance with 8.10 CGPA in Computer Science Engineering (AI & ML).",
      impact: "Top 10% of class"
    }
  ];

  const upcomingGoals = [
    {
      title: "AWS Cloud Practitioner",
      target: "Q2 2025",
      description: "Planning to achieve AWS Cloud Practitioner certification to strengthen cloud computing knowledge."
    },
    {
      title: "Google Cloud Professional",
      target: "Q3 2025", 
      description: "Targeting Google Cloud Professional Data Engineer certification for advanced cloud data skills."
    },
    {
      title: "Microsoft Azure Fundamentals",
      target: "Q4 2025",
      description: "Expanding cloud expertise with Microsoft Azure fundamentals certification."
    }
  ];

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
              Certifications & Achievements
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of professional certifications, academic achievements, and recognition that validate my expertise and commitment to continuous learning.
            </p>
          </div>

          {/* Professional Certifications */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-purple-300 flex items-center">
              <Award className="w-8 h-8 mr-3" />
              Professional Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <Card className={`bg-black/40 border-purple-500/20 backdrop-blur-lg hover:border-purple-400/40 transition-all duration-300 h-full ${cert.featured ? 'ring-2 ring-purple-400/30' : ''} relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {cert.featured && (
                            <Badge className="mb-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                              Featured
                            </Badge>
                          )}
                          <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                          <p className="text-purple-400 font-medium">{cert.issuer}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge variant="outline" className="border-purple-400/50 text-purple-300 mb-2">
                            {cert.type}
                          </Badge>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Skills Covered:</p>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="border-purple-400/30 text-purple-200 text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>
                          <div className="flex gap-2">
                            {cert.title === "IBM SkillsBuild – Data Analytics" && (
                              <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-4 py-2 text-xs"
                                onClick={() => window.open('https://drive.google.com/file/d/1uqWRhhNNUlwJi5IIaDUZ642O0ynGcQ3n/view?usp=drive_link', '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                View Certificate
                              </Button>
                            )}
                            {cert.title === "IBM SkillsBuild – Enterprise Data Science" && (
                              <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-4 py-2 text-xs"
                                onClick={() => window.open('https://www.credly.com/go/xReoRPmI', '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Verify Certificate
                              </Button>
                            )}
                            {cert.title === "Code Unnati – SAP Program" && (
                              <>
                                <Button 
                                  size="sm" 
                                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-4 py-2 text-xs"
                                  onClick={() => window.open('https://codeunnati.edunetfoundation.com/verify-certificate/CU24_5961', '_blank')}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Verify Certificate
                                </Button>
                                <Button 
                                  size="sm" 
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-4 py-2 text-xs"
                                  onClick={() => window.open('https://drive.google.com/file/d/16B4-thsUeZhqraJ-D-_eAi1Kbs7Mzg3D/view?usp=sharing', '_blank')}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  View Certificate
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic & Competition Achievements */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-purple-300 flex items-center">
              <Trophy className="w-8 h-8 mr-3" />
              Achievements & Recognition
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                          <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                          <p className="text-purple-400 font-medium">{achievement.achievement}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="border-purple-400/50 text-purple-300 mb-1">
                            {achievement.category}
                          </Badge>
                          <p className="text-gray-400 text-sm">{achievement.date}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-purple-300 text-sm">
                          <Star className="w-4 h-4 mr-1" />
                          {achievement.impact}
                        </div>
                        {achievement.title === "Innovation Marathon" && (
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-3 py-1 text-xs"
                            onClick={() => window.open('https://drive.google.com/file/d/1XSNUkkWu3iv9fAPRu6zW-21ig_WfE4Co/view?usp=drive_link', '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View Certificate
                          </Button>
                        )}
                        {achievement.title === "District Science Exhibition" && (
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-3 py-1 text-xs"
                            onClick={() => window.open('https://drive.google.com/file/d/1-tIpVC9IW8peqxyosd_vuRgLDLR_Qo5r/view?usp=drive_link', '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View Certificate
                          </Button>
                        )}

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Verification */}
          <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-semibold mb-6 text-white flex items-center">
                  <Award className="w-8 h-8 mr-3" />
                  Verified Skills
                </h2>
                <p className="text-gray-300 mb-6">
                  These skills have been formally validated through certifications, competitions, and practical applications.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-purple-300">Data & Analytics</h3>
                    <div className="space-y-2">
                      {["Data Analysis", "Statistical Methods", "Python for Data Science", "Data Visualization"].map((skill) => (
                        <div key={skill} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-purple-300">Enterprise Technology</h3>
                    <div className="space-y-2">
                      {["SAP Systems", "Enterprise Software", "Business Process", "ERP Integration"].map((skill) => (
                        <div key={skill} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-purple-300">Innovation & Research</h3>
                    <div className="space-y-2">
                      {["Problem Solving", "Research Methodology", "Technical Innovation", "Project Management"].map((skill) => (
                        <div key={skill} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Future Learning Goals */}
          <motion.div whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}>
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-semibold mb-6 text-white">Future Learning Goals</h2>
                <p className="text-gray-300 mb-6">
                  Continuous learning is key to staying relevant in technology. Here are my upcoming certification targets.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {upcomingGoals.map((goal, index) => (
                    <motion.div
                      key={goal.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-purple-500/10 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-white">{goal.title}</h3>
                        <Badge variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                          {goal.target}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300">{goal.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}