import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { fadeIn, slideUp } from '@/lib/animations';

export default function Projects() {
  // Sample project data - in a real app, this would come from an API or database
  const projectsData = [
    {
      id: 1,
      title: "Green Energy Research Initiative",
      student: "Michael Chen",
      school: "Stanford University",
      image: "https://images.unsplash.com/photo-1508247967583-7d982ea01526?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Innovative research project on renewable energy sources that led to publication in a scientific journal.",
      category: { name: "Research", color: "bg-blue-500", textColor: "text-blue-500", bgColor: "bg-blue-500/10" },
      year: "2023"
    },
    {
      id: 2,
      title: "Community Health Education Program",
      student: "Sophia Martinez",
      school: "Harvard University",
      image: "https://images.unsplash.com/photo-1652694970292-40ca239eebfe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Outreach program that provided health education to underserved communities, reaching over 500 individuals.",
      category: { name: "Community Service", color: "bg-green-500", textColor: "text-green-500", bgColor: "bg-green-500/10" },
      year: "2023"
    },
    {
      id: 3,
      title: "AI-Powered Educational App",
      student: "David Johnson",
      school: "MIT",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Developed an application using machine learning to personalize learning experiences for K-12 students.",
      category: { name: "Technology", color: "bg-purple-500", textColor: "text-purple-500", bgColor: "bg-purple-500/10" },
      year: "2022"
    },
    {
      id: 4,
      title: "Historical Documentary Series",
      student: "Emma Wilson",
      school: "Yale University",
      image: "https://images.unsplash.com/photo-1676037150246-be2a18e6287d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Created a documentary series exploring local historical events, which was featured in a regional film festival.",
      category: { name: "Arts", color: "bg-amber-500", textColor: "text-amber-500", bgColor: "bg-amber-500/10" },
      year: "2022"
    },
    {
      id: 5,
      title: "Global Economic Analysis Journal",
      student: "Alexander Kim",
      school: "Princeton University",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Founded and edited a student journal focused on international economic trends and policies.",
      category: { name: "Business", color: "bg-red-500", textColor: "text-red-500", bgColor: "bg-red-500/10" },
      year: "2023"
    },
    {
      id: 6,
      title: "Marine Conservation Initiative",
      student: "Olivia Thompson",
      school: "Columbia University",
      image: "https://images.unsplash.com/photo-1596741964069-27dafc8a999a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Led a project to clean coastal areas and developed educational materials about marine ecosystems.",
      category: { name: "Environmental", color: "bg-emerald-500", textColor: "text-emerald-500", bgColor: "bg-emerald-500/10" },
      year: "2022"
    },
  ];

  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projectsData.map(project => project.category.name))];
  
  // Filter projects based on search and category
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || project.category.name === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900 min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore impressive projects developed by students with our guidance and mentorship.
          </p>
        </motion.div>
        
        {/* Search and filter controls */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row gap-4 bg-gray-800/70 rounded-xl p-4 border border-gray-700">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search projects, students, or keywords..."
                className="pl-10 bg-gray-900/70 border-gray-700 text-gray-300 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 h-4 w-4" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    className={`cursor-pointer ${
                      selectedCategory === category 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-gray-800/70 border border-gray-700 rounded-xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideUp}
                custom={index * 0.1}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`${project.category.bgColor} ${project.category.textColor}`}>
                      {project.category.name}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-gray-500 text-gray-300">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {project.student} • {project.school}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0 h-auto gap-2 group"
                  >
                    View project details
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No projects match your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-20 text-center bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Create Your Own Success Story?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our program and work with expert mentors to develop standout projects that will impress college admissions officers.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}