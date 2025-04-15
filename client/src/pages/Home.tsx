import { useRef, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarDays, Clock, Users, CheckCircle2, BriefcaseIcon, GraduationCapIcon, AwardIcon } from "lucide-react";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/sections/Footer";

// Meeting scheduling form schema
const scheduleFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().optional(),
});

type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;

export default function Home() {
  const { isDarkMode } = useTheme();
  const { toast } = useToast();
  
  // Refs for scroll navigation
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const schedulingRef = useRef<HTMLDivElement>(null);
  
  // States for scheduling dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Time slots
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];
  
  // Meeting topics
  const topics = [
    { value: "project-review", label: "Project Review" },
    { value: "college-advising", label: "College Advising" },
    { value: "profile-building", label: "Profile Building" },
    { value: "initial-consultation", label: "Initial Consultation" }
  ];
  
  // Form setup for scheduling meetings
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      topic: "",
      message: "",
    },
  });
  
  const onSubmit = (data: ScheduleFormValues) => {
    setIsSubmitting(true);
    // Simulate scheduling process
    setTimeout(() => {
      console.log("Meeting scheduled:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Meeting Scheduled!",
        description: `Your meeting has been scheduled for ${format(data.date, "MMMM d, yyyy")} at ${data.time}.`,
      });
    }, 1500);
  };
  
  const resetForm = () => {
    setIsSuccess(false);
    setIsDialogOpen(false);
    form.reset();
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-300 transition-colors duration-300`}>
      
      <main>
        <Hero onGetStarted={() => scrollToSection(schedulingRef)} />
        
        <div ref={featuresRef}>
          <Features />
        </div>
        
        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>
        
        {/* Scheduling Section */}
        <section 
          ref={schedulingRef}
          className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-amber-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Schedule Your <span className="text-primary">Consultation</span>
              </motion.h2>
              <motion.p 
                className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Book a meeting with our expert advisors to discuss your college application strategy and how we can help you build an outstanding extracurricular profile.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className={`rounded-2xl shadow-xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <Calendar 
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      // Disable past dates, weekends, and dates more than 30 days in future
                      const now = new Date();
                      now.setHours(0, 0, 0, 0);
                      const thirtyDaysFromNow = new Date();
                      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
                      
                      return (
                        date < now ||
                        date > thirtyDaysFromNow ||
                        date.getDay() === 0 || 
                        date.getDay() === 6
                      );
                    }}
                    className={`rounded-xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
                  />
                  
                  <div className="mt-8">
                    <h3 className={`font-bold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Why Schedule With Us?
                    </h3>
                    <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>Personalized guidance tailored to your goals</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>Expert advisors from top universities</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>Flexible scheduling to fit your calendar</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                        <span>No obligation, complimentary first session</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full py-8 text-xl bg-primary hover:bg-primary/90 btn-modern">
                      Schedule Your Meeting
                    </Button>
                  </DialogTrigger>
                  <DialogContent className={`sm:max-w-[500px] ${
                    isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white'
                  }`}>
                    {isSuccess ? (
                      <div className="text-center py-6">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="h-10 w-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                        <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          We've sent the details to your email. Our team will contact you shortly to confirm.
                        </p>
                        <Button onClick={resetForm} className="bg-primary hover:bg-primary/90">
                          Schedule Another
                        </Button>
                      </div>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle>Schedule a Meeting</DialogTitle>
                          <DialogDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                            Fill in your details to book a consultation with our experts.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Your Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="John Doe" 
                                      className={
                                        isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Email Address
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      type="email"
                                      placeholder="you@example.com" 
                                      className={
                                        isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                      }
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Date
                                    </FormLabel>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={`w-full justify-start text-left font-normal ${
                                          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                        }`}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          if (selectedDate) {
                                            field.onChange(selectedDate);
                                          }
                                        }}
                                      >
                                        <CalendarDays className="mr-2 h-4 w-4" />
                                        {selectedDate ? (
                                          format(selectedDate, "PPP")
                                        ) : (
                                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                                            {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                                          </span>
                                        )}
                                      </Button>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Time
                                    </FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className={
                                          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                        }>
                                          <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className={
                                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                                      }>
                                        {timeSlots.map((time) => (
                                          <SelectItem key={time} value={time}>
                                            {time}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            
                            <FormField
                              control={form.control}
                              name="topic"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Meeting Topic
                                  </FormLabel>
                                  <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger className={
                                        isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                      }>
                                        <SelectValue placeholder="Select topic" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className={
                                      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                                    }>
                                      {topics.map((topic) => (
                                        <SelectItem key={topic.value} value={topic.value}>
                                          {topic.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Message (Optional)
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      {...field} 
                                      placeholder="Let us know if you have any specific questions or needs" 
                                      className={
                                        isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                      }
                                      rows={3}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <DialogFooter className="gap-2 sm:gap-0 mt-6">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsDialogOpen(false)}
                                className={
                                  isDarkMode ? 'border-gray-600' : ''
                                }
                              >
                                Cancel
                              </Button>
                              <Button 
                                type="submit"
                                className="bg-primary hover:bg-primary/90"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Scheduling...</span>
                                  </div>
                                ) : (
                                  <span>Schedule Meeting</span>
                                )}
                              </Button>
                            </DialogFooter>
                          </form>
                        </Form>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <CalendarDays className="h-10 w-10 text-primary mb-4" />
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Flexible Scheduling
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Choose from a wide range of available time slots that work with your schedule.
                    </p>
                  </div>
                  
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      45-Minute Sessions
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Each consultation is designed to give you comprehensive guidance and answer all your questions.
                    </p>
                  </div>
                </div>
                
                {/* Premium services */}
                <div className={`mt-12 p-8 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'bg-gray-800/70 border-primary' 
                    : 'bg-white border-primary/20'
                } shadow-lg`}>
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Premium Services We Offer
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-4`}>
                        <GraduationCapIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          College Application Strategy
                        </h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          Personalized roadmap to optimize your application for your dream schools.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-4`}>
                        <BriefcaseIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Extracurricular Profile Development
                        </h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          Design and execute standout passion projects that showcase your unique abilities.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${isDarkMode ? 'bg-primary/20' : 'bg-primary/10'} mr-4`}>
                        <AwardIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Competition & Recognition
                        </h4>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          Identify and prepare for prestigious competitions that strengthen your application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
