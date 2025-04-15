import { useTheme } from "@/hooks/use-theme";
import { Trophy, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  index: number;
}

function FeatureCard({ icon, title, description, color, bgColor, index }: FeatureCardProps) {
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
      className="relative rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 bg-gray-800/70 border border-gray-700 backdrop-blur-sm shadow-lg overflow-hidden group hover:border-primary/30 hover:shadow-primary/5"
    >
      {/* Subtle glow effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-30"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
      
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${bgColor} group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const features = [
    {
      icon: <Trophy className="text-xl" />,
      title: "Stand Out to Colleges",
      description: "Build a unique extracurricular profile that demonstrates your passion, initiative, and leadership to admissions officers.",
      color: isDarkMode ? 'text-primary' : 'text-primary',
      bgColor: isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
    },
    {
      icon: <Lightbulb className="text-xl" />,
      title: "Discover Your Passion",
      description: "Explore different interests through guided projects that help you find what truly excites and motivates you.",
      color: isDarkMode ? 'text-secondary' : 'text-secondary',
      bgColor: isDarkMode ? 'bg-orange-900' : 'bg-orange-100'
    },
    {
      icon: <Users className="text-xl" />,
      title: "Expert Mentorship",
      description: "Connect with college students and professionals who provide guidance, feedback, and support for your projects.",
      color: isDarkMode ? 'text-green-400' : 'text-green-600',
      bgColor: isDarkMode ? 'bg-green-900' : 'bg-green-100'
    }
  ];
  
  return (
    <section className="relative py-16 overflow-hidden bg-gray-900">
      {/* Enhanced premium background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[5%] w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-accent text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exedra Advantage</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our premium platform is designed specifically to help you build impressive college applications through meaningful extracurricular activities.
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              bgColor={feature.bgColor}
            />
          ))}
        </motion.div>
        
        {/* Added premium statistic cards */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">94%</div>
            <p className="text-gray-400">Admission Success Rate</p>
          </div>
          
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">800+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-400">Expert Advisors</p>
          </div>
          
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-primary mb-2">12M+</div>
            <p className="text-gray-400">Scholarship Dollars</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
