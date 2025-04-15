import React from 'react';
import { Link } from 'wouter';
import { 
  Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Calendar, ChevronRight, GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import ExedraLogo from './ExedraLogo';
import { Button } from './ui/button';

export default function Footer() {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="relative bg-gray-900 pt-16 pb-10 border-t border-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-[5%] right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-[5%] left-[5%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Company info and social */}
          <motion.div 
            className="md:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem}>
              <ExedraLogo size="md" />
              <p className="text-gray-400 mt-6 mb-8 max-w-md">
                Exedra helps high school students develop meaningful extracurricular profiles and passion projects to strengthen their college applications and showcase their true potential.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4 mb-8"
              variants={fadeUpItem}
            >
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary/20 flex items-center justify-center text-gray-400 hover:text-primary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </motion.div>
            
            <motion.div 
              className="space-y-3"
              variants={fadeUpItem}
            >
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3 text-primary" />
                <span>contact@exedra.edu</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 mt-1 text-primary" />
                <span>123 Education Lane, Cambridge, MA 02138</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h5 
              className="text-white font-bold mb-5" 
              variants={fadeUpItem}
            >
              Quick Links
            </motion.h5>
            <motion.ul className="space-y-3" variants={staggerContainer}>
              <motion.li variants={fadeUpItem}>
                <Link href="/" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Home
                </Link>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <Link href="/about" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <Link href="/services" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Services
                </Link>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <Link href="/projects" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Projects
                </Link>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <Link href="/pricing" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Pricing
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Services */}
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h5 
              className="text-white font-bold mb-5" 
              variants={fadeUpItem}
            >
              Our Services
            </motion.h5>
            <motion.ul className="space-y-3" variants={staggerContainer}>
              <motion.li variants={fadeUpItem}>
                <a href="#" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Profile Building
                </a>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <a href="#" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Project Development
                </a>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <a href="#" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  College Advising
                </a>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <a href="#" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Essay Assistance
                </a>
              </motion.li>
              <motion.li variants={fadeUpItem}>
                <a href="#" className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300">
                  <ChevronRight size={14} className="mr-2 text-primary" />
                  Interview Prep
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Newsletter and CTA */}
          <motion.div 
            className="md:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem}>
              <h5 className="text-white font-bold mb-5">Schedule a Consultation</h5>
              <p className="text-gray-400 mb-4">
                Book your free college profile consultation with our expert advisors.
              </p>
              <Link href="/calendar">
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center mb-8">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Meeting
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeUpItem}>
              <div className="p-5 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-primary mr-2" />
                  <span className="text-white font-medium">Join Our Newsletter</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Get college admissions tips and updates on our services.
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Subscribe
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom copyright */}
        <div className="pt-8 mt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Exedra. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}