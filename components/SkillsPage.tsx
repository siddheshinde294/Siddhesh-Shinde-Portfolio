import { motion } from 'framer-motion';
import { Code, Database, Globe, Cloud, Palette, Briefcase, Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: 'Python', level: 'Advanced', description: 'Data science, AI/ML, automation' },
        { name: 'Java', level: 'Intermediate', description: 'Object-oriented programming, enterprise apps' },
        { name: 'JavaScript', level: 'Advanced', description: 'Frontend & backend development' },
        { name: 'C++', level: 'Intermediate', description: 'System programming, competitive coding' }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: 'HTML5', level: 'Advanced', description: 'Semantic markup, accessibility' },
        { name: 'CSS3', level: 'Advanced', description: 'Responsive design, animations' },
        { name: 'React', level: 'Intermediate', description: 'Component-based UI development' },
        { name: 'Angular', level: 'Beginner', description: 'Currently learning framework' },
        { name: '.NET', level: 'Beginner', description: 'Backend development, APIs' }
      ]
    },
    {
      title: "Database Systems",
      icon: Database,
      skills: [
        { name: 'MySQL', level: 'Intermediate', description: 'Relational database design' },
        { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL document database' },
        { name: 'PostgreSQL', level: 'Beginner', description: 'Advanced SQL features' }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: 'Google Cloud Platform', level: 'Beginner', description: 'Cloud services, deployment' },
        { name: 'Git & GitHub', level: 'Advanced', description: 'Version control, collaboration' },
        { name: 'Docker', level: 'Beginner', description: 'Containerization basics' }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      skills: [
        { name: 'Figma', level: 'Advanced', description: 'UI/UX design, prototyping' },
        { name: 'Adobe Lightroom', level: 'Advanced', description: 'Photo editing, color grading' },
        { name: 'Canva Pro', level: 'Advanced', description: 'Graphic design, marketing materials' }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Zap,
      skills: [
        { name: 'Data Analytics', level: 'Intermediate', description: 'Statistical analysis, insights' },
        { name: 'Pandas', level: 'Intermediate', description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 'Intermediate', description: 'Numerical computing' },
        { name: 'Matplotlib', level: 'Beginner', description: 'Data visualization' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Leadership', description: 'Leading teams and initiatives' },
    { name: 'Communication', description: 'Clear verbal and written communication' },
    { name: 'Teamwork', description: 'Collaborative problem solving' },
    { name: 'Problem Solving', description: 'Analytical thinking and creativity' },
    { name: 'Time Management', description: 'Prioritizing and meeting deadlines' },
    { name: 'Continuous Learning', description: 'Adapting to new technologies' },
    { name: 'Critical Thinking', description: 'Evaluating information objectively' },
    { name: 'Mentoring', description: 'Guiding and developing others' }
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-green-500/20 text-green-300 border-green-400/50';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-300 border-blue-400/50';
      case 'Beginner': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/50';
      default: return 'bg-purple-500/20 text-purple-300 border-purple-400/50';
    }
  };

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
              Skills & Technologies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and professional competencies, continuously evolving with industry trends.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" 
                  }}
                >
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-purple-300" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                            className="flex items-center justify-between p-3 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 transition-colors duration-300"
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                              <p className="text-sm text-gray-300">{skill.description}</p>
                            </div>
                            <Badge variant="outline" className={`ml-4 ${getSkillLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
          >
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">Soft Skills</h2>
                </div>
                
                <p className="text-gray-300 mb-8">
                  Beyond technical expertise, these interpersonal and professional skills enable me to work effectively 
                  in diverse teams and contribute to positive organizational culture.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-purple-500/10 rounded-lg p-4 hover:bg-purple-500/15 transition-colors duration-300"
                    >
                      <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                      <p className="text-sm text-gray-300">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
          >
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-purple-300" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white">Currently Learning</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3 p-4 rounded-lg bg-purple-500/5">
                    <h3 className="text-xl font-semibold text-purple-300">.NET Framework</h3>
                    <p className="text-gray-300">Building robust backend applications with C# and ASP.NET Core</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">C#</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">ASP.NET</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">Entity Framework</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 p-4 rounded-lg bg-purple-500/5">
                    <h3 className="text-xl font-semibold text-purple-300">Angular Development</h3>
                    <p className="text-gray-300">Creating dynamic single-page applications with Angular framework</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">TypeScript</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">RxJS</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">Angular Material</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3 p-4 rounded-lg bg-purple-500/5">
                    <h3 className="text-xl font-semibold text-purple-300">AI/ML Advanced</h3>
                    <p className="text-gray-300">Deepening knowledge in machine learning algorithms and neural networks</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">TensorFlow</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">PyTorch</Badge>
                      <Badge variant="outline" className="border-purple-400/50 text-purple-300">Deep Learning</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}