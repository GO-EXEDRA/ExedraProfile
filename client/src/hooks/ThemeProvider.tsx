import React, { createContext, useContext, useEffect } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void; // Kept for API compatibility
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Always use dark mode
  const isDarkMode = true;

  // Apply dark mode on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'dark');
      
      // Ensure dark mode is always applied
      const root = window.document.documentElement;
      root.classList.add('dark');
    }
  }, []);

  // Keep the function for API compatibility but it doesn't change the theme
  const toggleTheme = () => {
    // Does nothing - we're always in dark mode
    console.log('Premium design is dark mode only');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}