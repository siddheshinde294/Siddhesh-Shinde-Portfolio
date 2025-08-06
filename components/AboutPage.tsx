/**
 * Copyright (c) 2025 Siddhesh Jitendra Shinde
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

export function AboutPage() {
  const achievements = [
    "Maintained 8.10 CGPA in Computer Science Engineering",
    "Active contributor to various technical projects",
    "Proficient in multiple programming languages",
    "Strong foundation in AI/ML concepts",
    "Leadership experience in student organizations"
  ];

  const interests = [
    "Artificial Intelligence", "Machine Learning", "Web Development", 
    "Data Analytics", "Cloud Computing", "UI/UX Design"
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about technology, driven by curiosity, and committed to making a positive impact through innovative solutions.
            </p>
          </div>

          {/* Personal Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who I Am */}
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold mb-6 text-purple-300 flex items-center">
                  <GraduationCap className="w-8 h-8 mr-3" />
                  Who I Am
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    I'm Siddhesh Jitendra Shinde, a passionate final-year Computer Science & Engineering student 
                    specializing in AI & ML at Lokmanya Tilak College of Engineering, Navi Mumbai. My journey in 
                    technology began with a curiosity about how things work, which has evolved into a deep passion 
                    for creating innovative solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    With a strong foundation in programming and web development, I'm constantly exploring new 
                    technologies and frameworks. My experience spans across Python, JavaScript, Java, and emerging 
                    technologies like .NET and Angular.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond academics, I actively participate in leadership roles, including serving as NSS Coordinator 
                    and Vice President of AIMSA, where I organize technical events and foster learning communities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <div className="space-y-6">
              <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-purple-300">Quick Facts</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-gray-400">Ambernath, Maharashtra, India</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">Age</p>
                        <p className="text-gray-400">21 years old</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">Education</p>
                        <p className="text-gray-400">BE CSE (AI & ML) - Final Year</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">CGPA</p>
                        <p className="text-gray-400">8.10/10.0</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-purple-300">Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                          {interest}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Timeline */}
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-8 text-purple-300">Educational Journey</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-8 border-l-2 border-purple-400/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Bachelor of Engineering - CSE (AI & ML)</h3>
                    <p className="text-purple-400">Lokmanya Tilak College of Engineering, Navi Mumbai</p>
                    <p className="text-gray-400">2022 – Present • CGPA: 8.10</p>
                    <p className="text-gray-300 text-sm">
                      Specializing in Artificial Intelligence and Machine Learning with focus on practical applications, 
                      data structures, algorithms, and modern software development practices.
                    </p>
                  </div>
                </motion.div>
                
                <Separator className="bg-purple-500/20" />
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative pl-8 border-l-2 border-purple-400/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-purple-400">New English Jr College, Ulhasnagar</p>
                    <p className="text-gray-400">2020 – 2022 • 62.5%</p>
                    <p className="text-gray-300 text-sm">
                      Completed science stream with Mathematics, Physics, and Chemistry, building strong analytical 
                      and problem-solving foundations.
                    </p>
                  </div>
                </motion.div>
                
                <Separator className="bg-purple-500/20" />
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative pl-8 border-l-2 border-purple-400/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">Secondary School Certificate (SSC)</h3>
                    <p className="text-purple-400">S.I.C.E.S High School, Ambernath</p>
                    <p className="text-gray-400">2010 – 2020 • 94%</p>
                    <p className="text-gray-300 text-sm">
                      Achieved excellent academic performance with strong fundamentals in science and mathematics, 
                      laying the groundwork for technical education.
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">Key Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}