import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CreditCard, CheckCircle2, Lock, Shield, BanknoteIcon, DollarSign } from "lucide-react";
import ExedraLogo from "@/components/ExedraLogo";
import ThemeToggle from "@/components/ThemeToggle";

// Payment form schema
const cardPaymentSchema = z.object({
  cardHolder: z.string().min(2, "Name must be at least 2 characters"),
  cardNumber: z.string()
    .min(16, "Card number must be 16 digits")
    .max(19, "Card number is too long")
    .regex(/^[0-9\s-]+$/, "Card number must contain only digits, spaces or dashes"),
  expiryDate: z.string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Expiry date must be in format MM/YY"),
  cvc: z.string()
    .min(3, "CVC must be 3-4 digits")
    .max(4, "CVC must be 3-4 digits")
    .regex(/^[0-9]+$/, "CVC must contain only digits"),
  saveCard: z.boolean().optional(),
});

type CardPaymentValues = z.infer<typeof cardPaymentSchema>;

// Bank transfer schema
const bankTransferSchema = z.object({
  accountName: z.string().min(2, "Name must be at least 2 characters"),
  accountNumber: z.string()
    .min(8, "Account number must be at least 8 digits")
    .regex(/^[0-9\s-]+$/, "Account number must contain only digits, spaces or dashes"),
  routingNumber: z.string()
    .min(9, "Routing number must be 9 digits")
    .regex(/^[0-9]+$/, "Routing number must contain only digits"),
  bankName: z.string().min(2, "Bank name is required"),
});

type BankTransferValues = z.infer<typeof bankTransferSchema>;

// Subscription plans
const plans = [
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "$29.99",
    description: "Get started with our monthly plan. Cancel anytime.",
    features: [
      "Access to all projects templates",
      "Basic mentor matching",
      "Community forum access",
      "Email support",
    ],
  },
  {
    id: "annual",
    name: "Annual Plan",
    price: "$299.99",
    description: "Save 17% with annual billing.",
    features: [
      "All features in Monthly Plan",
      "Priority mentor matching",
      "Personalized college roadmap",
      "1-on-1 advisor sessions (2/month)",
      "24/7 priority support",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$499.99",
    description: "For serious college applicants. Our most comprehensive package.",
    features: [
      "All features in Annual Plan",
      "Unlimited mentor access",
      "Personalized project feedback",
      "College essay review service",
      "Mock interviews preparation",
      "Application review service",
    ],
  },
];

export default function Payment() {
  const { isDarkMode } = useTheme();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  
  // Form for credit card payments
  const cardForm = useForm<CardPaymentValues>({
    resolver: zodResolver(cardPaymentSchema),
    defaultValues: {
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      saveCard: false,
    },
  });
  
  // Form for bank transfers
  const bankForm = useForm<BankTransferValues>({
    resolver: zodResolver(bankTransferSchema),
    defaultValues: {
      accountName: "",
      accountNumber: "",
      routingNumber: "",
      bankName: "",
    },
  });
  
  const onCardSubmit = (data: CardPaymentValues) => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      console.log("Card payment data:", data);
      setIsLoading(false);
      setIsPaymentComplete(true);
    }, 2000);
  };
  
  const onBankSubmit = (data: BankTransferValues) => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      console.log("Bank transfer data:", data);
      setIsLoading(false);
      setIsPaymentComplete(true);
    }, 2000);
  };
  
  const handleGoToDashboard = () => {
    toast({
      title: "Subscription activated",
      description: "Your subscription has been successfully activated.",
    });
    setLocation("/dashboard");
  };
  
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
        <motion.div
          className="w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {isPaymentComplete ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-center p-8 rounded-2xl glass-card ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700 text-white' 
                  : 'bg-white/80 border-gray-200'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
                <p className={`text-lg max-w-md mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for subscribing to Exedra. Your account has been set up successfully.
                </p>
                <Button 
                  onClick={handleGoToDashboard} 
                  className="bg-primary hover:bg-primary/90 btn-modern py-6 px-8"
                >
                  Continue to Dashboard
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-12 gap-6">
              {/* Subscription Selection */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-5"
              >
                <div className={`rounded-2xl glass-card overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 text-white' 
                    : 'bg-white/80 border-gray-200'
                }`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Select a Plan</h2>
                      <ExedraLogo size="sm" />
                    </div>
                    
                    <RadioGroup 
                      defaultValue={selectedPlan}
                      onValueChange={setSelectedPlan}
                      className="space-y-4"
                    >
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className={`relative rounded-lg border p-4 transition-all ${
                            selectedPlan === plan.id
                              ? isDarkMode 
                                ? 'border-primary bg-primary/10' 
                                : 'border-primary bg-primary/5'
                              : isDarkMode
                                ? 'border-gray-700 hover:border-gray-600'
                                : 'border-gray-200 hover:border-gray-300'
                          } ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-2 -right-2 px-3 py-0.5 rounded-full bg-primary text-white text-xs font-semibold">
                              MOST POPULAR
                            </div>
                          )}
                          
                          <RadioGroupItem 
                            value={plan.id} 
                            id={plan.id}
                            className="absolute top-5 left-4"
                          />
                          
                          <div className="pl-8">
                            <div className="flex items-baseline justify-between mb-1">
                              <label 
                                htmlFor={plan.id}
                                className="font-semibold text-base cursor-pointer"
                              >
                                {plan.name}
                              </label>
                              <span className="font-bold">{plan.price}</span>
                            </div>
                            <p className={`text-sm mb-3 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {plan.description}
                            </p>
                            <ul className={`text-sm space-y-1 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <span className="text-primary mr-2">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    <div className="mt-6">
                      <div className={`p-4 rounded-lg flex items-center ${
                        isDarkMode ? 'bg-gray-700/50' : 'bg-amber-50'
                      }`}>
                        <Shield className={`w-10 h-10 mr-3 ${
                          isDarkMode ? 'text-amber-400' : 'text-amber-500'
                        }`} />
                        <div>
                          <h3 className="font-medium">100% Satisfaction Guarantee</h3>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            Try risk-free for 14 days. Cancel anytime during this period for a full refund.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Payment Form */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-7"
              >
                <div className={`rounded-2xl glass-card overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 text-white' 
                    : 'bg-white/80 border-gray-200'
                }`}>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                    
                    <Tabs defaultValue="card" className="w-full" onValueChange={setPaymentMethod}>
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="card" className="text-base">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Credit Card
                        </TabsTrigger>
                        <TabsTrigger value="bank" className="text-base">
                          <BanknoteIcon className="mr-2 h-4 w-4" />
                          Bank Transfer
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card">
                        <Form {...cardForm}>
                          <form onSubmit={cardForm.handleSubmit(onCardSubmit)} className="space-y-4">
                            <FormField
                              control={cardForm.control}
                              name="cardHolder"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Cardholder Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="John Doe" 
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
                              control={cardForm.control}
                              name="cardNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Card Number
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="1234 5678 9012 3456" 
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
                            
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={cardForm.control}
                                name="expiryDate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Expiry Date
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        {...field} 
                                        placeholder="MM/YY" 
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
                                control={cardForm.control}
                                name="cvc"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      CVC
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        {...field} 
                                        placeholder="123" 
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
                            </div>
                            
                            <FormField
                              control={cardForm.control}
                              name="saveCard"
                              render={({ field }) => (
                                <FormItem className="flex items-start space-x-2 space-y-0 pt-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                      className={isDarkMode ? 'border-gray-500 mt-1' : 'border-gray-300 mt-1'}
                                    />
                                  </FormControl>
                                  <FormLabel className={`font-normal text-sm ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    Save this card for future payments
                                  </FormLabel>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="pt-4">
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
                                    <span>Processing...</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center">
                                    <Lock className="mr-2 h-5 w-5" />
                                    <span>Pay {plans.find(p => p.id === selectedPlan)?.price}</span>
                                  </div>
                                )}
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </TabsContent>
                      
                      <TabsContent value="bank">
                        <Form {...bankForm}>
                          <form onSubmit={bankForm.handleSubmit(onBankSubmit)} className="space-y-4">
                            <FormField
                              control={bankForm.control}
                              name="accountName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Account Holder Name
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="John Doe" 
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
                              control={bankForm.control}
                              name="accountNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Account Number
                                  </FormLabel>
                                  <FormControl>
                                    <Input 
                                      {...field} 
                                      placeholder="123456789" 
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
                            
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={bankForm.control}
                                name="routingNumber"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Routing Number
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        {...field} 
                                        placeholder="123456789" 
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
                                control={bankForm.control}
                                name="bankName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      Bank Name
                                    </FormLabel>
                                    <FormControl>
                                      <Input 
                                        {...field} 
                                        placeholder="Your Bank" 
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
                            </div>
                            
                            <div className={`p-4 rounded-lg my-4 ${
                              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                            }`}>
                              <p className={`text-sm ${
                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                              }`}>
                                Bank transfers may take 1-3 business days to process. Your subscription will be activated once the payment is confirmed.
                              </p>
                            </div>
                            
                            <div className="pt-4">
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
                                    <span>Processing...</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center">
                                    <DollarSign className="mr-2 h-5 w-5" />
                                    <span>Confirm Payment ({plans.find(p => p.id === selectedPlan)?.price})</span>
                                  </div>
                                )}
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </TabsContent>
                    </Tabs>
                    
                    <div className={`flex items-center mt-6 p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-700/30' : 'bg-gray-50'
                    }`}>
                      <Lock className={`h-4 w-4 mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Your payment information is encrypted and secure. We never store your full card details.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
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