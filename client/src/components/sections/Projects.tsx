import { useTheme } from "@/hooks/use-theme";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  image: string;
  category: {
    name: string;
    color: string;
    bgColor: string;
  };
  student: string;
  title: string;
  description: string;
  school: string;
  index: number;
}

function ProjectCard({ image, category, student, title, description, school, index }: ProjectCardProps) {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index}
    >
      <Card className={`overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
      }`}>
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge className={`px-3 py-1 ${category.bgColor} ${category.color}`}>
              {category.name}
            </Badge>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {student}
            </span>
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className={`w-5 h-5 mr-1 ${isDarkMode ? 'text-primary' : 'text-primary'}`} />
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                {school}
              </span>
            </div>
            <a 
              href="#" 
              className={`text-sm font-medium hover:underline ${
                isDarkMode ? 'text-primary' : 'text-primary'
              }`}
            >
              Read Case Study →
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: {
        name: "Technology",
        color: isDarkMode ? 'text-blue-200' : 'text-blue-800',
        bgColor: isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
      },
      student: "Emma L., Class of 2023",
      title: "EcoTrack: Local Water Quality Monitoring",
      description: "Developed a mobile app that allows citizens to report and track water quality issues in local lakes and streams.",
      school: "Stanford"
    },
    {
      image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: {
        name: "Social Impact",
        color: isDarkMode ? 'text-green-200' : 'text-green-800',
        bgColor: isDarkMode ? 'bg-green-900' : 'bg-green-100'
      },
      student: "Marcus J., Class of 2022",
      title: "HomeBridge: Youth Homeless Support",
      description: "Created a nonprofit that connects homeless youth with temporary housing and essential resources in the community.",
      school: "Yale"
    },
    {
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: {
        name: "Arts",
        color: isDarkMode ? 'text-orange-200' : 'text-orange-800',
        bgColor: isDarkMode ? 'bg-orange-900' : 'bg-orange-100'
      },
      student: "Sophia T., Class of 2024",
      title: "Harmony Hub: Youth Orchestra Initiative",
      description: "Founded a music education program that provides free lessons and instrument access to underprivileged elementary students.",
      school: "Juilliard"
    }
  ];
  
  return (
    <section 
      id="featured-projects" 
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl font-bold mb-4 font-accent ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Student Projects
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See what other students have accomplished with Exedra.
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              student={project.student}
              title={project.title}
              description={project.description}
              school={project.school}
              index={index}
            />
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className={`inline-flex items-center px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300 ${
              isDarkMode ? 'bg-primary hover:bg-primary/90' : 'bg-primary hover:bg-primary/90'
            }`}
          >
            Explore All Projects
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
