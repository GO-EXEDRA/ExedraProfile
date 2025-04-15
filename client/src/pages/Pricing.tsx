import React from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn, slideUp } from '@/lib/animations';

export default function Pricing() {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-secondary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pricing Plans</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your college application profile and stand out from the competition.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div 
            className="relative bg-gray-800/80 border border-gray-700 rounded-2xl overflow-hidden p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideUp}
            custom={0}
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">Essential Plan</h3>
              <p className="text-gray-400 mb-6">Perfect for students just starting their college journey</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-gray-400 mb-1">/semester</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Initial consultation (1 hour)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Personalized activity recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Monthly check-in sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Access to resource library</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Premium Plan - Most Popular */}
          <motion.div 
            className="relative bg-gray-800/80 border-2 border-primary/50 rounded-2xl overflow-hidden p-8 shadow-lg shadow-primary/10 scale-105 z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideUp}
            custom={1}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Star className="w-3 h-3 mr-1" fill="currentColor" />
              Most Popular
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">Advanced Plan</h3>
              <p className="text-gray-400 mb-6">Comprehensive support for ambitious students</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$999</span>
                <span className="text-gray-400 mb-1">/semester</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Everything in Essential Plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Bi-weekly strategy sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Custom project development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Activity planning & management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">College selection guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Priority email & phone support</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Elite Plan */}
          <motion.div 
            className="relative bg-gray-800/80 border border-gray-700 rounded-2xl overflow-hidden p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideUp}
            custom={2}
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2 text-white">Elite Plan</h3>
              <p className="text-gray-400 mb-6">Premium service for top-tier college aspirants</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$1,999</span>
                <span className="text-gray-400 mb-1">/semester</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium">What's included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Everything in Advanced Plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Weekly 1-on-1 mentoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Research project guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Leadership opportunity access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Essay review & optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">24/7 concierge support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 mr-3 text-primary" />
                  <span className="text-gray-300">Ivy League advisor matching</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Additional info section */}
        <motion.div 
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Custom Solutions Available</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Need something specific? We offer tailored packages designed to fit your unique needs and goals.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:text-primary hover:bg-primary/10">
            Contact Us for Custom Plans
          </Button>
        </motion.div>
        
        {/* FAQ */}
        <motion.div
          className="mt-24 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-medium mb-3 text-white">Can I switch plans if my needs change?</h4>
              <p className="text-gray-300">
                Yes, you can upgrade or change your plan at any time. We'll prorate the cost based on the time remaining in your current plan.
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-medium mb-3 text-white">Do you offer refunds?</h4>
              <p className="text-gray-300">
                We offer a 100% satisfaction guarantee. If you're not happy with our services within the first 14 days, we'll issue a full refund.
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-medium mb-3 text-white">How do I schedule my consultation calls?</h4>
              <p className="text-gray-300">
                After signing up, you'll have access to our scheduling system where you can book appointments with your advisor at times convenient for you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}