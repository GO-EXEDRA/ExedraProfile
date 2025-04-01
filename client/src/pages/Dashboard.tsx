import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  CalendarDays,
  Clock,
  Home,
  LogOut,
  Settings,
  User,
  Users,
  Grid3X3,
  BarChart3,
  HelpCircle,
  Plus,
  BookOpen,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import ExedraLogo from "@/components/ExedraLogo";
import ThemeToggle from "@/components/ThemeToggle";

// Schedule meeting form schema
const scheduleFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.date(),
  startTime: z.string().min(1, "Please select a start time"),
  duration: z.string().min(1, "Please select a duration"),
  meetingType: z.string().min(1, "Please select a meeting type"),
  notes: z.string().optional(),
});

type ScheduleFormValues = z.infer<typeof scheduleFormSchema>;

export default function Dashboard() {
  const { isDarkMode } = useTheme();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Sample meetings data
  const upcomingMeetings = [
    { 
      id: 1,
      title: "Project Review with Ms. Johnson",
      date: new Date(2025, 3, 5, 15, 0),
      duration: "30 minutes",
      type: "College Advising",
      participants: ["Sarah Johnson"],
    },
    {
      id: 2,
      title: "Research Project Progress",
      date: new Date(2025, 3, 8, 10, 0),
      duration: "45 minutes",
      type: "Project Mentoring",
      participants: ["Dr. Michael Chen", "Emma Rodriguez"],
    },
  ];
  
  // Sample tasks
  const tasks = [
    { id: 1, title: "Complete science project proposal", dueDate: "Apr 10", priority: "high", completed: false },
    { id: 2, title: "Prepare for mock interview", dueDate: "Apr 12", priority: "medium", completed: false },
    { id: 3, title: "Finalize college essay draft", dueDate: "Apr 15", priority: "high", completed: true },
  ];
  
  // Form setup for scheduling meetings
  const form = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      title: "",
      date: new Date(),
      startTime: "",
      duration: "",
      meetingType: "",
      notes: "",
    },
  });
  
  const onSubmit = (data: ScheduleFormValues) => {
    console.log("Meeting scheduled:", data);
    toast({
      title: "Meeting scheduled",
      description: `Your meeting "${data.title}" has been scheduled for ${format(data.date, "MMMM d, yyyy")} at ${data.startTime}.`,
    });
    setIsDialogOpen(false);
    form.reset();
  };
  
  // Time slots for the select input
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const period = i < 12 ? "AM" : "PM";
    return `${hour}:00 ${period}`;
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header/Navbar */}
      <header className={`sticky top-0 z-30 w-full navbar-modern ${
        isDarkMode 
          ? 'dark-glass border-gray-800' 
          : 'light-glass border-gray-200'
      }`}>
        <div className="container px-4 sm:px-6 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ExedraLogo />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-1">
                <Button variant="ghost" size="sm" className="flex items-center text-sm gap-1 px-3">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center text-sm gap-1 px-3">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </div>
              
              <ThemeToggle />
              
              <div className="flex items-center space-x-2">
                <div className={`hidden sm:block text-right ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-sm font-medium">Jason Chen</p>
                  <p className="text-xs opacity-75">Student</p>
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  className={`rounded-full h-9 w-9 ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span className="sr-only">User menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`w-16 md:w-64 fixed inset-y-0 pt-16 hidden md:block ${
          isDarkMode 
            ? 'bg-gray-900 border-r border-gray-800' 
            : 'bg-white border-r border-gray-200'
        }`}>
          <div className="px-3 py-4 h-full flex flex-col">
            <nav className="space-y-1 flex-1">
              <Button 
                variant="ghost" 
                className={`w-full justify-start mb-1 ${
                  isDarkMode ? 'bg-gray-800/90 text-white' : 'bg-gray-100 text-gray-900'
                }`}
                onClick={() => setLocation("/dashboard")}
              >
                <Home className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setLocation("/projects")}
              >
                <Grid3X3 className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Projects</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setLocation("/meetings")}
              >
                <CalendarDays className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Meetings</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setLocation("/mentors")}
              >
                <Users className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Mentors</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setLocation("/resources")}
              >
                <BookOpen className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Resources</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setLocation("/progress")}
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Progress</span>
              </Button>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={() => setLocation("/")}
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span className="hidden md:inline">Sign Out</span>
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 md:ml-64 pt-16 pb-10">
          <div className="container px-4 sm:px-6 mx-auto">
            <motion.div
              className="my-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4"
              >
                <div>
                  <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Dashboard
                  </h1>
                  <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Welcome back, Jason. Here's what's happening with your projects.
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="btn-modern bg-primary hover:bg-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Schedule Meeting
                      </Button>
                    </DialogTrigger>
                    <DialogContent className={`sm:max-w-[500px] ${
                      isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white'
                    }`}>
                      <DialogHeader>
                        <DialogTitle>Schedule a Meeting</DialogTitle>
                        <DialogDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          Fill in the details below to schedule a new meeting.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  Meeting Title
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field} 
                                    placeholder="e.g., Project Discussion" 
                                    className={
                                      isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                    }
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Date
                                  </FormLabel>
                                  <FormControl>
                                    <div className={`p-1 rounded-md border ${
                                      isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                                    }`}>
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={(date) => {
                                          field.onChange(date);
                                          setDate(date);
                                        }}
                                        disabled={(date) => date < new Date()}
                                        className={`w-full ${isDarkMode ? 'text-white' : ''}`}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="space-y-4">
                              <FormField
                                control={form.control}
                                name="startTime"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Start Time
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
                              
                              <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Duration
                                    </FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className={
                                          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                        }>
                                          <SelectValue placeholder="Select duration" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className={
                                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                                      }>
                                        <SelectItem value="15">15 minutes</SelectItem>
                                        <SelectItem value="30">30 minutes</SelectItem>
                                        <SelectItem value="45">45 minutes</SelectItem>
                                        <SelectItem value="60">1 hour</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="meetingType"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Meeting Type
                                    </FormLabel>
                                    <Select 
                                      onValueChange={field.onChange} 
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className={
                                          isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'
                                        }>
                                          <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent className={
                                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
                                      }>
                                        <SelectItem value="project">Project Review</SelectItem>
                                        <SelectItem value="mentor">Mentor Meeting</SelectItem>
                                        <SelectItem value="advising">College Advising</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  Notes (Optional)
                                </FormLabel>
                                <FormControl>
                                  <Textarea 
                                    {...field} 
                                    placeholder="Add any additional notes or agenda items" 
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
                            >
                              Schedule
                            </Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main content area */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Recent activity and stats cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className={`${
                      isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                    }`}>
                      <CardHeader className="pb-2">
                        <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          Active Projects
                        </CardDescription>
                        <CardTitle className="text-2xl font-bold">3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`flex items-center text-sm ${
                          isDarkMode ? 'text-green-400' : 'text-green-600'
                        }`}>
                          <span>+1 this month</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className={`${
                      isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                    }`}>
                      <CardHeader className="pb-2">
                        <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          Upcoming Meetings
                        </CardDescription>
                        <CardTitle className="text-2xl font-bold">2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-orange-500">
                          <span>Next: Apr 5, 3:00 PM</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className={`${
                      isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                    }`}>
                      <CardHeader className="pb-2">
                        <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                          Tasks Completed
                        </CardDescription>
                        <CardTitle className="text-2xl font-bold">8/12</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`flex items-center text-sm ${
                          isDarkMode ? 'text-green-400' : 'text-green-600'
                        }`}>
                          <span>66% completion rate</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Upcoming meetings */}
                  <Card className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Upcoming Meetings</CardTitle>
                        <Button variant="ghost" size="sm" className="text-primary">View All</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingMeetings.map((meeting) => (
                          <div key={meeting.id} className={`p-4 rounded-lg ${
                            isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                          }`}>
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className={`font-medium ${
                                  isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {meeting.title}
                                </h3>
                                <div className={`flex items-center mt-1 text-sm ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  <CalendarDays className="w-3.5 h-3.5 mr-1" />
                                  <span>{format(meeting.date, "MMMM d, yyyy")}</span>
                                  <span className="mx-2">•</span>
                                  <Clock className="w-3.5 h-3.5 mr-1" />
                                  <span>{format(meeting.date, "h:mm a")}</span>
                                  <span className="mx-2">•</span>
                                  <span>{meeting.duration}</span>
                                </div>
                              </div>
                              <Badge variant="outline" className={
                                isDarkMode ? 'border-primary/50 text-primary bg-primary/10' : 'border-primary/30 text-primary bg-primary/10'
                              }>
                                {meeting.type}
                              </Badge>
                            </div>
                            <div className={`mt-3 flex items-center text-sm ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              <Users className="w-3.5 h-3.5 mr-1" />
                              <span>{meeting.participants.join(", ")}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Tasks */}
                  <Card className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Tasks</CardTitle>
                        <Button variant="ghost" size="sm" className="text-primary">View All</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tasks.map((task) => (
                          <div 
                            key={task.id} 
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              isDarkMode 
                                ? task.completed ? 'bg-gray-700/30' : 'bg-gray-700/50'
                                : task.completed ? 'bg-gray-50/80' : 'bg-gray-50'
                            } ${task.completed ? 'opacity-60' : ''}`}
                          >
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full mr-3 flex-shrink-0 ${
                                task.priority === 'high' 
                                  ? 'bg-red-500' 
                                  : task.priority === 'medium' 
                                    ? 'bg-yellow-500' 
                                    : 'bg-green-500'
                              }`}>
                                {task.completed && (
                                  <CheckCircle2 className="w-5 h-5 text-white" />
                                )}
                              </div>
                              <div>
                                <h3 className={`font-medium ${
                                  isDarkMode ? 'text-white' : 'text-gray-900'
                                } ${task.completed ? 'line-through' : ''}`}>
                                  {task.title}
                                </h3>
                                <p className={`text-sm ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  Due: {task.dueDate}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-xs">
                              {task.completed ? "Completed" : "Mark as done"}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Sidebar/Calendar */}
                <div className="space-y-6">
                  <Card className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                  }`}>
                    <CardHeader>
                      <CardTitle>Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`border rounded-md p-2 ${
                        isDarkMode ? 'bg-gray-700/50 border-gray-700' : 'bg-white border-gray-200'
                      }`}>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className={`w-full ${isDarkMode ? 'text-white' : ''}`}
                        />
                      </div>
                      
                      {date && (
                        <div className="mt-6">
                          <h3 className={`font-medium mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {format(date, "MMMM d, yyyy")}
                          </h3>
                          
                          {upcomingMeetings.some(m => 
                            m.date.getDate() === date.getDate() && 
                            m.date.getMonth() === date.getMonth() &&
                            m.date.getFullYear() === date.getFullYear()
                          ) ? (
                            <div className="space-y-2">
                              {upcomingMeetings.filter(m => 
                                m.date.getDate() === date.getDate() && 
                                m.date.getMonth() === date.getMonth() &&
                                m.date.getFullYear() === date.getFullYear()
                              ).map((meeting) => (
                                <div key={meeting.id} className={`p-3 rounded-lg text-sm ${
                                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                                }`}>
                                  <div className="flex items-center">
                                    <div className={`w-1 h-10 rounded-full mr-3 bg-primary`} />
                                    <div>
                                      <p className="font-medium">{meeting.title}</p>
                                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                                        {format(meeting.date, "h:mm a")} • {meeting.duration}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className={`p-4 rounded-lg text-center ${
                              isDarkMode ? 'bg-gray-700/30' : 'bg-gray-50'
                            }`}>
                              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                                No meetings scheduled
                              </p>
                              <Button
                                variant="link"
                                onClick={() => setIsDialogOpen(true)}
                                className="mt-1 text-primary hover:text-primary/90"
                              >
                                Schedule a meeting
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className={`${
                    isDarkMode ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-white'
                  }`}>
                    <CardHeader>
                      <CardTitle>Your Mentors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full mr-3 bg-blue-500 flex items-center justify-center text-white font-medium`}>
                            SJ
                          </div>
                          <div>
                            <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              Sarah Johnson
                            </h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              College Advisor
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full mr-3 bg-green-500 flex items-center justify-center text-white font-medium`}>
                            MC
                          </div>
                          <div>
                            <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              Dr. Michael Chen
                            </h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Research Mentor
                            </p>
                          </div>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Find New Mentors
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}