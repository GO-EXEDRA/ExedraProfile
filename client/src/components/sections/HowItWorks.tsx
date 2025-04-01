import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface StepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

function Step({ number, title, description, index }: StepProps) {
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
      className="flex flex-col md:flex-row items-center mb-12 last:mb-0"
    >
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold bg-primary`}>
          {number}
        </div>
      </div>
      <div>
        <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const steps = [
    {
      number: 1,
      title: "Explore Your Interests",
      description: "Take our interactive assessment to discover project categories that align with your natural interests and college aspirations."
    },
    {
      number: 2,
      title: "Design Your Project",
      description: "Use our guided templates and expert advice to create a project plan that's challenging yet achievable in your timeline."
    },
    {
      number: 3,
      title: "Execute with Support",
      description: "Receive regular check-ins, resource recommendations, and milestone tracking to keep your project moving forward."
    },
    {
      number: 4,
      title: "Showcase & Apply",
      description: "Document your journey and results in our portfolio builder, then learn how to effectively present your projects on college applications."
    }
  ];
  
  return (
    <section 
      id="how-it-works" 
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
            How Exedra Works
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our simple process helps you create meaningful projects that showcase your abilities.
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
