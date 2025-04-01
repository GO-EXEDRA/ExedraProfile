import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ExedraLogo from "../ExedraLogo";
import ThemeToggle from "../ThemeToggle";
import { Link } from "wouter";

interface HeaderProps {
  onNavigate: {
    howItWorks: () => void;
    projects: () => void;
    testimonials: () => void;
    contact: () => void;
  };
}

export default function Header({ onNavigate }: HeaderProps) {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const NavLink = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        onClick();
      }}
      className={`text-base font-medium relative group ${
        isDarkMode ? 'text-gray-200' : 'text-gray-700'
      }`}
    >
      <span className="block">{children}</span>
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out ${
        isDarkMode ? 'bg-opacity-90' : 'bg-opacity-80'
      }`}></span>
    </a>
  );
  
  return (
    <motion.header 
      className={`sticky top-0 z-50 navbar-modern transition-all duration-300 ${
        isDarkMode 
          ? 'dark-glass border-gray-800' 
          : 'light-glass border-gray-200'
      } ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ExedraLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink onClick={onNavigate.howItWorks}>How It Works</NavLink>
            <NavLink onClick={onNavigate.projects}>Projects</NavLink>
            <NavLink onClick={onNavigate.testimonials}>Testimonials</NavLink>
            <NavLink onClick={onNavigate.contact}>Contact</NavLink>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Sign In Button */}
            <Button
              variant="ghost"
              className="hidden sm:flex items-center space-x-2 hover:bg-primary/10"
              asChild
            >
              <Link href="/signin">
                <LogIn className="w-4 h-4 mr-2" />
                <span>Sign In</span>
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`md:hidden btn-modern ${
                    isDarkMode 
                      ? 'bg-gray-800/70 hover:bg-gray-700/90 border-gray-700' 
                      : 'bg-white/80 hover:bg-gray-100 border-gray-200'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                className={`${isDarkMode 
                  ? 'bg-gray-900/95 text-white border-gray-800' 
                  : 'bg-white/95 border-gray-200'
                } backdrop-blur-md`}
              >
                <div className="flex flex-col space-y-5 mt-8">
                  <NavLink onClick={onNavigate.howItWorks}>How It Works</NavLink>
                  <NavLink onClick={onNavigate.projects}>Projects</NavLink>
                  <NavLink onClick={onNavigate.testimonials}>Testimonials</NavLink>
                  <NavLink onClick={onNavigate.contact}>Contact</NavLink>
                  
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                    <Button
                      variant="outline"
                      className="w-full justify-start mb-3"
                      asChild
                    >
                      <Link href="/signin">
                        <LogIn className="w-4 h-4 mr-2" />
                        <span>Sign In</span>
                      </Link>
                    </Button>
                    
                    <Button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onNavigate.contact();
                      }}
                      className={`w-full btn-modern ${
                        isDarkMode 
                          ? 'bg-secondary hover:bg-secondary/90' 
                          : 'bg-secondary hover:bg-secondary/90'
                      }`}
                    >
                      <User className="w-4 h-4 mr-2" />
                      <span>Sign Up</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* CTA Button */}
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button
                  onClick={onNavigate.contact}
                  className={`hidden sm:inline-flex items-center btn-modern ${
                    isDarkMode ? 'bg-secondary hover:bg-secondary/90' : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>Sign Up</span>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
