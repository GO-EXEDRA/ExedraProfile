import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className={`rounded-full p-2 ${
        isDarkMode 
          ? 'bg-gray-700 hover:bg-gray-600 focus:ring-gray-500' 
          : 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-400'
      } focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      <span className="sr-only">Toggle dark mode</span>
      {isDarkMode ? (
        <motion.div
          initial={{ rotate: -30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-5 w-5 text-yellow-300" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 30, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-5 w-5 text-gray-700" />
        </motion.div>
      )}
    </Button>
  );
}
