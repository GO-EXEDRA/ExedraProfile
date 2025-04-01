import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ExedraLogo from "../ExedraLogo";
import ThemeToggle from "../ThemeToggle";

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
  
  const NavLink = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        setIsMenuOpen(false);
        onClick();
      }}
      className={`text-base font-medium hover:text-primary transition-colors ${
        isDarkMode ? 'text-gray-300 hover:text-primary' : 'text-gray-700'
      }`}
    >
      {children}
    </a>
  );
  
  return (
    <header className={`sticky top-0 z-50 shadow-md border-b transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
            
            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`md:hidden ${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className={isDarkMode ? 'bg-gray-900 text-white' : ''}>
                <div className="flex flex-col space-y-4 mt-6">
                  <NavLink onClick={onNavigate.howItWorks}>How It Works</NavLink>
                  <NavLink onClick={onNavigate.projects}>Projects</NavLink>
                  <NavLink onClick={onNavigate.testimonials}>Testimonials</NavLink>
                  <NavLink onClick={onNavigate.contact}>Contact</NavLink>
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNavigate.contact();
                    }}
                    className={`mt-4 ${
                      isDarkMode 
                        ? 'bg-secondary hover:bg-secondary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    Sign Up
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            
            {/* CTA Button */}
            <Button
              onClick={onNavigate.contact}
              className={`hidden sm:inline-flex ${
                isDarkMode ? 'bg-secondary hover:bg-secondary/90' : 'bg-secondary hover:bg-secondary/90'
              }`}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
