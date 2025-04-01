import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, LogIn, EyeIcon, EyeOffIcon } from "lucide-react";
import ExedraLogo from "@/components/ExedraLogo";
import ThemeToggle from "@/components/ThemeToggle";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignIn() {
  const { isDarkMode } = useTheme();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    // Simulate authentication process
    setTimeout(() => {
      console.log("Sign in data:", data);
      setIsLoading(false);
      toast({
        title: "Sign in successful",
        description: "Welcome back to Exedra!",
      });
      setLocation("/dashboard");
    }, 1500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-amber-50'}`}>
      {/* Header with back button */}
      <header className={`p-4 ${isDarkMode ? 'text-white' : 'text-gray-800'} max-w-5xl mx-auto w-full`}>
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => setLocation("/")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      
      <div className="flex-1 flex justify-center items-center p-6">
        <div className={`w-full max-w-md glass-card rounded-2xl ${
          isDarkMode 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white/80 border-gray-200'
        } shadow-lg overflow-hidden`}>
          {/* Card content with logo, form, etc. */}
          <div className="p-8">
            <motion.div
              className="flex flex-col items-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-2">
                <ExedraLogo size="lg" />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className={`text-2xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Welcome back
              </motion.h1>
              
              <motion.div variants={itemVariants} className="w-full">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              placeholder="you@example.com" 
                              className={`py-6 ${
                                isDarkMode 
                                  ? 'bg-gray-700/70 border-gray-600 text-white' 
                                  : 'bg-white border-gray-200'
                              }`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                {...field} 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                className={`py-6 ${
                                  isDarkMode 
                                    ? 'bg-gray-700/70 border-gray-600 text-white' 
                                    : 'bg-white border-gray-200'
                                }`}
                              />
                              <button
                                type="button"
                                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOffIcon className="h-5 w-5" />
                                ) : (
                                  <EyeIcon className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className={isDarkMode ? 'border-gray-500' : 'border-gray-300'}
                              />
                            </FormControl>
                            <FormLabel className={`font-normal text-sm ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <Link href="/forgot-password">
                        <a className={`text-sm font-medium ${
                          isDarkMode ? 'text-primary hover:text-primary/90' : 'text-primary hover:text-primary/90'
                        }`}>
                          Forgot password?
                        </a>
                      </Link>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full py-6 btn-modern bg-primary hover:bg-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Signing in...</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <LogIn className="mr-2 h-5 w-5" />
                          <span>Sign in</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Don't have an account?{' '}
                  <Link href="/signup">
                    <a className={`font-medium ${
                      isDarkMode ? 'text-primary hover:text-primary/90' : 'text-primary hover:text-primary/90'
                    }`}>
                      Sign up
                    </a>
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className={`p-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Exedra, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}