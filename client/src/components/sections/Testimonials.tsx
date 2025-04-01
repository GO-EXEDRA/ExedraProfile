import { useTheme } from "@/hooks/use-theme";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  school: string;
  stars: number;
  quote: string;
  year: string;
  index: number;
}

function TestimonialCard({ avatar, name, school, stars, quote, year, index }: TestimonialCardProps) {
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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
        <CardContent className="p-0">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {name}
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Admitted to {school}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex text-yellow-400">
              {[...Array(Math.floor(stars))].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              {stars % 1 !== 0 && (
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
            </div>
          </div>
          <p className={`italic mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            "{quote}"
          </p>
          <div className={`text-sm font-medium text-right ${isDarkMode ? 'text-primary' : 'text-primary'}`}>
            {year}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      name: "Aisha K.",
      school: "Columbia University",
      stars: 5,
      quote: "Exedra helped me turn my interest in data science into a real research project that I presented at a state competition. My admissions counselor specifically mentioned how impressed they were with my initiative.",
      year: "Class of 2022"
    },
    {
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      name: "Jason M.",
      school: "UC Berkeley",
      stars: 5,
      quote: "I had no idea how to stand out from other applicants until I found Exedra. The mentorship program connected me with a CS major who helped me develop an app that's now being used by over 500 people in my community.",
      year: "Class of 2023"
    },
    {
      avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
      name: "Maya R.",
      school: "Northwestern",
      stars: 4.5,
      quote: "The structure Exedra provided helped me turn my passion for environmental justice into a documentary film project. I went from having no direction to winning a regional film competition in just 6 months.",
      year: "Class of 2021"
    }
  ];
  
  return (
    <section 
      id="testimonials" 
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
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
            What Students Say
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from students who transformed their college applications with Exedra.
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              school={testimonial.school}
              stars={testimonial.stars}
              quote={testimonial.quote}
              year={testimonial.year}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
