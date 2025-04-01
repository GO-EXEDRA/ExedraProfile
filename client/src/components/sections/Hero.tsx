import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <section 
      className={`relative overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-r from-blue-50 to-indigo-100'
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="max-w-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1 
              className={`text-4xl md:text-5xl font-bold font-accent tracking-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              variants={slideUp}
            >
              Build Your Future with{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-primary to-secondary' 
                  : 'from-primary to-secondary'
              }`}>
                Extraordinary
              </span> Projects
            </motion.h1>
            
            <motion.p 
              className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              variants={slideUp}
              custom={1}
            >
              Exedra helps high school students develop impressive extracurricular profiles and passion projects that stand out on college applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={slideUp}
              custom={2}
            >
              <Button
                size="lg"
                onClick={onGetStarted}
                className={`px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-secondary hover:bg-secondary/90' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
              >
                Start Building Today
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={onGetStarted}
                className={`px-8 py-3 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Learn More
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            <div className="rounded-xl shadow-2xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Students collaborating on a project" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${
        isDarkMode ? 'from-gray-900' : 'from-white'
      }`}></div>
    </section>
  );
}
