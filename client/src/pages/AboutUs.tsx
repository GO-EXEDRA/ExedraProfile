import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Book, BookOpen, BriefcaseIcon, CalendarDays, GraduationCap, 
  Heart, LightbulbIcon, MapPin, Phone, Sparkles, Target, Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '@/lib/animations';

export default function AboutUs() {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Emily Richardson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Former Harvard admissions officer with over 15 years of experience in higher education.",
      education: "Ph.D. in Education, Stanford University"
    },
    {
      name: "Michael Thompson",
      role: "Head of Student Success",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Education consultant specializing in extracurricular development and college admissions strategy.",
      education: "M.Ed. in Counseling, Columbia University"
    },
    {
      name: "Dr. Sarah Williams",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Academic researcher who guides students in developing impressive research projects for college applications.",
      education: "Ph.D. in Biochemistry, MIT"
    },
    {
      name: "James Anderson",
      role: "Essay Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      bio: "Published author and writing coach who helps students craft compelling personal statements.",
      education: "MFA in Creative Writing, NYU"
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "Exedra was founded by Dr. Emily Richardson with a mission to help students stand out in college applications."
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Grew team to include experts from various Ivy League institutions and expanded services nationwide."
    },
    {
      year: "2019",
      title: "Research Program",
      description: "Launched our student research mentorship program, connecting students with academic experts."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Introduced virtual consultations allowing us to serve students globally."
    },
    {
      year: "2023",
      title: "100% Success Rate",
      description: "Achieved 100% college placement rate with 94% of students accepted to one of their top three choices."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exedra</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            We're a team of former college admissions officers, educators, and academic experts dedicated to helping students develop standout profiles for college applications.
          </p>
        </motion.div>
        
        {/* Mission section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={slideInLeft}>
            <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                At Exedra, we believe every student has unique talents and passions that deserve to be showcased. Our mission is to help students discover and develop their strengths, create meaningful extracurricular portfolios, and present themselves authentically to college admissions committees.
              </p>
              <p className="text-gray-300 mb-6">
                We're committed to ethical practices and genuine student development—not quick fixes or resume padding. Our approach focuses on nurturing real interests and capabilities that will serve students throughout their academic and professional lives.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <GraduationCap className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">2,500+</h4>
                    <p className="text-gray-400 text-sm">Students Mentored</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Award className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">94%</h4>
                    <p className="text-gray-400 text-sm">Success Rate</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <BookOpen className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">100+</h4>
                    <p className="text-gray-400 text-sm">Top Schools</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">25+</h4>
                    <p className="text-gray-400 text-sm">Expert Advisors</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={slideInRight}>
            <div className="space-y-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <Target className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Personalized Approach</h4>
                    <p className="text-gray-300">
                      We develop customized strategies based on each student's unique strengths, interests, and academic goals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                    <LightbulbIcon className="text-purple-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Expert Guidance</h4>
                    <p className="text-gray-300">
                      Our advisors include former admissions officers from top universities who understand what makes applications stand out.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-lg mr-4">
                    <Heart className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">Holistic Development</h4>
                    <p className="text-gray-300">
                      We focus on genuine growth that benefits students beyond just college admissions, preparing them for future success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Team section */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our advisors bring decades of experience from elite universities and diverse academic backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden group"
                variants={slideUp}
                custom={index * 0.1}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-3">{member.bio}</p>
                  <p className="text-sm text-gray-400">{member.education}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Our Journey Timeline */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading college advisory service.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative z-10`}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                >
                  <div className="md:w-1/2 flex md:justify-center pb-8 md:pb-0">
                    <div className={`bg-gray-800/70 border border-gray-700 rounded-xl p-6 max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-gray-900 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Contact section */}
        <motion.div 
          className="bg-gray-800/70 border border-gray-700 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                We'd love to hear from you and discuss how we can help with your college admissions journey. Reach out to schedule a free consultation or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Our Office</h4>
                    <p className="text-gray-400">123 Education Lane, Cambridge, MA 02138</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Contact</h4>
                    <p className="text-gray-400">contact@exedra.edu</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <CalendarDays className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Office Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9am - 7pm EST</p>
                    <p className="text-gray-400">Saturday: 10am - 3pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 md:p-8">
                <h4 className="text-xl font-bold mb-6 text-white">Ready to Take the Next Step?</h4>
                <p className="text-gray-300 mb-8">
                  Schedule a free consultation with one of our expert advisors to discuss your college admissions goals.
                </p>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}