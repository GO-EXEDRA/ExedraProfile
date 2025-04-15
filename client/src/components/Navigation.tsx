import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExedraLogo from '@/components/ExedraLogo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Projects', href: '/projects' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'About Us', href: '/about' },
  ];

  // Animations
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex">
            <ExedraLogo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}>
                  {link.text}
                </a>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <Link href="/calendar">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          variants={menuVariants}
          className="md:hidden bg-gray-900 border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link href={link.href}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        location === link.href
                          ? 'bg-gray-800 text-primary'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      {link.text}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-2">
                <Link href="/calendar">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md text-center"
                  >
                    Schedule Consultation
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}