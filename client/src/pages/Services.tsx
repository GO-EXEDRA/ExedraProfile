import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Brain, Calendar, FileText, GraduationCap, LightbulbIcon, Target, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, slideUp, fadeInUp } from '@/lib/animations';

export default function Services() {
  const services = [
    {
      title: "Extracurricular Strategy",
      description: "Custom-tailored activity planning that showcases your strengths and passions while maximizing impact.",
      icon: Target,
      color: "from-primary to-secondary"
    },
    {
      title: "Project Development",
      description: "Expert guidance on developing impressive passion projects that make college applications stand out.",
      icon: LightbulbIcon,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Research Mentorship",
      description: "Work with academic experts to create meaningful research projects worthy of college recognition.",
      icon: Brain,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Essay Development",
      description: "Comprehensive support for crafting compelling personal statements and supplemental essays.",
      icon: FileText,
      color: "from-green-400 to-green-600"
    },
    {
      title: "College Selection",
      description: "Strategic guidance on choosing the right schools based on your profile, interests, and ambitions.",
      icon: GraduationCap,
      color: "from-amber-400 to-amber-600"
    },
    {
      title: "Interview Preparation",
      description: "Mock interviews and coaching to help you communicate your value with confidence.",
      icon: Users,
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Academic Planning",
      description: "Course selection advice to build a competitive transcript that aligns with your college goals.",
      icon: BookOpen,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Admission Consulting",
      description: "End-to-end support through every step of the college application process.",
      icon: Award,
      color: "from-red-400 to-red-600"
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive support designed to help students create outstanding college applications and achieve their academic dreams.
          </p>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={slideUp}
              custom={index * 0.1}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a href="#" className="text-primary font-medium flex items-center hover:text-secondary transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Premium offering highlight */}
        <motion.div 
          className="mt-20 bg-gray-800/80 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Elite College Preparation Package</h3>
              <p className="text-gray-300 mb-6">
                Our most comprehensive offering combines all key services into one intensive program, designed specifically for students aiming for top-tier universities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <span className="text-gray-300">Weekly 1-on-1 mentoring sessions</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <span className="text-gray-300">Personalized extracurricular roadmap</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <span className="text-gray-300">Full application review with detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 mt-1 mr-3 text-primary" />
                  <span className="text-gray-300">Mock interviews with admissions experts</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Button>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-30"></div>
              <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-bold text-xl text-white">Success Rate</h4>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">94%</div>
                    <p className="text-gray-400 text-sm">of our students get into their top-choice schools</p>
                  </div>
                  <GraduationCap className="w-12 h-12 text-primary/80" />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4">
                    <div className="font-medium text-white mb-1">Ivy League Placements</div>
                    <div className="text-gray-300">Twice the national average acceptance rate</div>
                  </div>
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4">
                    <div className="font-medium text-white mb-1">Scholarship Success</div>
                    <div className="text-gray-300">Over $12M in scholarships earned last year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial */}
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-10 relative">
            <div className="absolute top-6 left-10 text-6xl text-primary/30 font-serif">"</div>
            <div className="absolute bottom-6 right-10 text-6xl text-primary/30 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light relative z-10 px-8">
              Exedra's services completely transformed my college application journey. Their personalized approach helped me develop a research project that caught the attention of admissions officers, and their guidance led me to acceptances at three Ivy League schools.
            </blockquote>
            <div className="mt-6 flex flex-col items-center">
              <div className="text-white font-medium">Alexandria Winters</div>
              <div className="text-gray-400">Accepted to Stanford University</div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your free initial consultation today and discover how our premium services can help you achieve your academic dreams.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
            Schedule Your Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}