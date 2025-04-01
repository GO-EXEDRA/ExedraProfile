import { useTheme } from "@/hooks/use-theme";

interface ExedraLogoProps {
  size?: "sm" | "md" | "lg";
}

export default function ExedraLogo({ size = "md" }: ExedraLogoProps) {
  const { isDarkMode } = useTheme();
  
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };
  
  return (
    <div className="flex items-center space-x-2">
      <svg 
        className={`${sizeClasses[size]} ${isDarkMode ? 'text-primary' : 'text-primary'}`} 
        viewBox="0 0 40 40" 
        fill="currentColor"
      >
        <path d="M34 20a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V22a2 2 0 012-2h28zm-1.73-10.66L19.33 3.75a2 2 0 00-1.8 0L4.74 9.34A2 2 0 004 11.11v1.34c0 .64.33 1.23.86 1.57l12.73 8.13a2 2 0 002.11.01l12.73-8.14c.53-.34.86-.93.86-1.57v-1.34a2 2 0 00-.74-1.77z" />
      </svg>
      <span className={`font-accent font-bold ${size === "lg" ? "text-3xl" : size === "md" ? "text-2xl" : "text-xl"}`}>
        Exedra
      </span>
    </div>
  );
}
