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
      className={`rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
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
    <section className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl font-bold mb-4 font-accent ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Students Choose Exedra
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our platform is designed specifically to help you build impressive college applications through meaningful extracurricular activities.
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
      </div>
    </section>
  );
}
