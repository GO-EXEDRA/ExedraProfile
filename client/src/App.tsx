import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/hooks/use-theme";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import pages
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";
import Payment from "@/pages/Payment";
import NotFound from "@/pages/not-found";

// Import new pages
import Pricing from "@/pages/Pricing";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import AboutUs from "@/pages/AboutUs";
import Calendar from "@/pages/Calendar";

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navigation />
      <main className="flex-grow pt-16"> {/* Add padding to account for fixed navbar */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={AboutUs} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/payment" component={Payment} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
