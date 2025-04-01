import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1
      }}
    >
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        className={`rounded-full p-2 glass-card ${
          isDarkMode 
            ? 'bg-gray-800/80 hover:bg-gray-700/90 border border-gray-700/50' 
            : 'bg-white/80 hover:bg-gray-100/90 border border-gray-200/50'
        } shadow-sm`}
      >
        <span className="sr-only">Toggle dark mode</span>
        <div className="relative w-5 h-5">
          {/* Sun icon with rays */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ 
              opacity: isDarkMode ? 1 : 0, 
              scale: isDarkMode ? 1 : 0.5,
              rotate: isDarkMode ? 0 : -30
            }}
            transition={{ duration: 0.4 }}
          >
            <Sun className="h-5 w-5 text-amber-300" />
            {/* Animated rays around sun */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-[2px] h-[5px] bg-amber-300/60 rounded-full"
                  style={{ 
                    left: '50%', 
                    top: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${i * 45}deg) translateY(-8px)`
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Moon icon with stars */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
            animate={{ 
              opacity: isDarkMode ? 0 : 1, 
              scale: isDarkMode ? 0.5 : 1,
              rotate: isDarkMode ? 30 : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <Moon className="h-5 w-5 text-primary" />

            {/* Stars */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-primary rounded-full"
                style={{
                  left: `${50 + (i - 1) * 12}%`,
                  top: `${35 + (i % 2) * 20}%`
                }}
                animate={{ 
                  opacity: [0.5, 1, 0.5], 
                  scale: [0.8, 1.2, 0.8] 
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity 
                }}
              />
            ))}
          </motion.div>
        </div>
      </Button>
    </motion.div>
  );
}
