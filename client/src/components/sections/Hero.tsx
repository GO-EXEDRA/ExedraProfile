import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { CalendarDays, Star, ArrowRight, GraduationCapIcon, BriefcaseIcon, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideUp, popAnimation } from "@/lib/animations";

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <section 
      className={`relative overflow-hidden min-h-[95vh] transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-br from-amber-50 via-orange-50 to-white'
      }`}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-[30%] left-[20%] w-32 h-32 bg-yellow-500 rounded-full opacity-5 blur-2xl"></div>
      
      {/* Floating elements for visual interest */}
      <motion.div 
        className="absolute top-40 right-[20%] w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-[15%] w-20 h-20 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/20"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 15, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Premium badge */}
            <motion.div 
              className={`inline-flex items-center px-4 py-2 rounded-full mb-8 glass-card ${
                isDarkMode 
                  ? 'bg-gray-800/70 border-gray-700' 
                  : 'bg-white/70 border-gray-200'
              }`}
              variants={popAnimation}
              custom={0}
            >
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Premium Extracurricular Advisory Service
              </span>
            </motion.div>
            
            <motion.h1 
              className={`text-5xl md:text-6xl font-bold font-accent leading-tight mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              variants={slideUp}
            >
              Schedule Your
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-primary via-primary to-secondary' 
                  : 'from-primary via-orange-500 to-secondary'
              }`}>
                College Profile Consultation
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              variants={slideUp}
              custom={1}
            >
              Work with our expert advisors to develop impressive extracurricular profiles and 
              passion projects that make your college application stand out. Meet with us to create 
              your personalized strategy.
            </motion.p>
            
            <motion.div 
              className="mb-12"
              variants={slideUp}
              custom={2}
            >
              <Button
                size="lg"
                onClick={onGetStarted}
                className={`btn-modern w-full sm:w-auto px-8 py-7 shadow-lg text-lg ${
                  isDarkMode 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                <CalendarDays className="mr-3 w-5 h-5" />
                <span>Schedule Your Free Consultation</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
            
            {/* Premium service highlights */}
            <motion.div 
              className="space-y-3"
              variants={slideUp}
              custom={3}
            >
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-3`}>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Personalized extracurricular planning
                </p>
              </div>
              
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-3`}>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Expert advisors from top universities
                </p>
              </div>
              
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-3`}>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Strategic profile development for competitive schools
                </p>
              </div>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-12 border-t border-gray-200 dark:border-gray-800 pt-6"
              variants={slideUp}
              custom={4}
            >
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <div className="text-2xl font-bold text-primary">94%</div>
                <div className="text-sm">Admission Rate</div>
              </div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm">Consultations</div>
              </div>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm">Top Colleges</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side with premium design elements */}
          <motion.div 
            className="relative hidden md:block"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            {/* Main premium card */}
            <div className={`relative rounded-2xl overflow-hidden border-2 ${
              isDarkMode 
                ? 'bg-gray-800/70 border-primary/30 shadow-lg shadow-primary/10' 
                : 'bg-white/90 border-primary/20 shadow-xl shadow-orange-900/5'
            } backdrop-blur-sm p-8 z-20`}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="text-center mb-8">
                <GraduationCapIcon className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-primary/80' : 'text-primary'}`} />
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Premium College Advising
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Develop a stand-out application with our expert guidance
                </p>
              </div>
              
              <div className={`rounded-xl p-6 mb-6 ${
                isDarkMode ? 'bg-gray-900/70' : 'bg-gray-50/80'
              }`}>
                <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  What We Offer:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 mr-3 ${isDarkMode ? 'text-primary/80' : 'text-primary'}`} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      <span className="font-medium">Personalized Strategy Sessions</span> - Tailored to your unique strengths and goals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 mr-3 ${isDarkMode ? 'text-primary/80' : 'text-primary'}`} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      <span className="font-medium">Project Development</span> - Create meaningful extracurriculars that impress admissions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 mr-3 ${isDarkMode ? 'text-primary/80' : 'text-primary'}`} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      <span className="font-medium">Application Positioning</span> - Learn how to present your achievements effectively
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={onGetStarted}
                  className={`btn-modern w-full py-6 text-lg ${
                    isDarkMode 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  <CalendarDays className="mr-2 w-5 h-5" />
                  <span>Schedule Now</span>
                </Button>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <motion.div 
              className={`absolute top-[5%] -left-16 z-10 p-4 rounded-xl max-w-[240px] glass-card ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/90 border-gray-200'
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <BriefcaseIcon className="w-4 h-4 text-primary" />
                </div>
                <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Premium Results
                </h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Over 90% of our students get accepted to their top-choice schools
              </p>
            </motion.div>
            
            <motion.div 
              className={`absolute -bottom-10 right-10 z-10 p-4 rounded-xl max-w-[240px] glass-card ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/90 border-gray-200'
              }`}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            >
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                "My advisor helped me develop a research project that got me into Stanford!"
              </p>
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                — Michael Chen, Class of 2023
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Premium wave divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full h-16 ${
          isDarkMode ? 'fill-gray-800' : 'fill-white'
        }`}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
}
