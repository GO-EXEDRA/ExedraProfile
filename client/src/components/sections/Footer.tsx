import { useTheme } from "@/hooks/use-theme";
import ExedraLogo from "../ExedraLogo";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin
} from "lucide-react";

export default function Footer() {
  const { isDarkMode } = useTheme();
  
  const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li>
      <a 
        href={href} 
        className={`text-base hover:underline ${
          isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {children}
      </a>
    </li>
  );
  
  const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
    <a 
      href={href}
      className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </a>
  );
  
  return (
    <footer 
      className={`py-12 border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-800 text-gray-400' 
          : 'bg-gray-100 border-gray-200 text-gray-600'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className={`text-sm font-semibold tracking-wider uppercase ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  Platform
                </h4>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#">How It Works</FooterLink>
                  <FooterLink href="#">Projects</FooterLink>
                  <FooterLink href="#">Mentorship</FooterLink>
                  <FooterLink href="#">Resources</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className={`text-sm font-semibold tracking-wider uppercase ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  Support
                </h4>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#">Pricing</FooterLink>
                  <FooterLink href="#">Documentation</FooterLink>
                  <FooterLink href="#">FAQs</FooterLink>
                  <FooterLink href="#">Contact Us</FooterLink>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className={`text-sm font-semibold tracking-wider uppercase ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  Company
                </h4>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#">About</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Jobs</FooterLink>
                  <FooterLink href="#">Partners</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className={`text-sm font-semibold tracking-wider uppercase ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-900'
                }`}>
                  Legal
                </h4>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#">Privacy</FooterLink>
                  <FooterLink href="#">Terms</FooterLink>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 border-t pt-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center">
            <ExedraLogo size="sm" />
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            </div>
          </div>
          <p className={`mt-8 text-base text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Exedra, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
