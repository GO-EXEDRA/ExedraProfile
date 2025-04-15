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
      className="relative py-24 bg-gray-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      {/* Vertical line connector */}
      <div className="absolute top-[25%] bottom-[15%] left-[50%] w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/0 hidden md:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-accent text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exedra Works</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our premium process helps you create meaningful projects that showcase your abilities to college admissions officers.
          </motion.p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-800 border border-primary/30 shadow-lg shadow-primary/5 text-primary text-2xl font-bold mb-5 z-20 relative ${
                  index % 2 === 0 ? 'md:ml-auto' : ''
                }`}>
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-sm"></div>
                  <span className="relative z-10">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className={`relative z-10 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector dot for desktop layout */}
                <div className={`absolute top-7 ${index % 2 === 0 ? 'md:left-[-33px]' : 'md:right-[-33px]'} w-8 h-8 rounded-full bg-primary z-10 hidden md:block`}>
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/calendar" className="inline-flex items-center px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white text-lg font-medium transition-colors shadow-lg shadow-primary/20">
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
