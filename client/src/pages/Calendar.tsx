import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, Calendar as CalendarIcon2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeIn, slideUp } from '@/lib/animations';
import { format } from 'date-fns';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Time slots - in a real app, these would be fetched dynamically based on availability
  const availableTimeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit to an API here
    console.log({
      ...formData,
      date: date ? format(date, 'yyyy-MM-dd') : '',
      timeSlot
    });
    setSubmitted(true);
  };

  const timeSlotIsAvailable = (slot: string) => {
    // In a real app, this would check against booked appointments
    // For now, we'll just simulate some unavailable slots
    const unavailableRandomSlots = ['10:00 AM', '2:00 PM']; // These would be dynamic in a real app
    return !unavailableRandomSlots.includes(slot);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900 min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Consultation</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book a free consultation with one of our expert advisors to discuss your college admissions goals.
          </p>
        </motion.div>
        
        {submitted ? (
          <motion.div 
            className="max-w-3xl mx-auto bg-gray-800/70 border border-gray-700 rounded-2xl p-8 md:p-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Booking Confirmed!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for scheduling a consultation. We've sent a confirmation email to <span className="text-primary">{formData.email}</span> with all the details.
            </p>
            <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <CalendarIcon2 className="w-5 h-5 text-primary mr-2" />
                  <span className="text-white">{date ? format(date, 'MMMM d, yyyy') : ''}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span className="text-white">{timeSlot}</span>
                </div>
              </div>
              <div className="text-left text-gray-400">
                <p className="mb-1"><span className="text-gray-300 font-medium">Name:</span> {formData.name}</p>
                <p className="mb-1"><span className="text-gray-300 font-medium">Email:</span> {formData.email}</p>
                <p><span className="text-gray-300 font-medium">Phone:</span> {formData.phone}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8">
              One of our advisors will be in touch shortly to confirm your appointment.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                setSubmitted(false);
                setFormStep(1);
                setDate(undefined);
                setTimeSlot(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  notes: ''
                });
              }}
            >
              Schedule Another Appointment
            </Button>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto bg-gray-800/70 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Booking Steps</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${formStep >= 1 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                  <div className={`w-10 h-1 ${formStep >= 2 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                  <div className={`w-3 h-3 rounded-full ${formStep >= 2 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                  <div className={`w-10 h-1 ${formStep >= 3 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                  <div className={`w-3 h-3 rounded-full ${formStep >= 3 ? 'bg-primary' : 'bg-gray-600'}`}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className={`p-3 rounded-lg ${formStep === 1 ? 'bg-primary/20 border border-primary/30' : 'bg-gray-900/30 border border-gray-800'}`}>
                  <CalendarIcon className={`w-5 h-5 mx-auto mb-2 ${formStep === 1 ? 'text-primary' : 'text-gray-500'}`} />
                  <p className={`text-sm font-medium ${formStep === 1 ? 'text-white' : 'text-gray-500'}`}>Select Date & Time</p>
                </div>
                <div className={`p-3 rounded-lg ${formStep === 2 ? 'bg-primary/20 border border-primary/30' : 'bg-gray-900/30 border border-gray-800'}`}>
                  <User className={`w-5 h-5 mx-auto mb-2 ${formStep === 2 ? 'text-primary' : 'text-gray-500'}`} />
                  <p className={`text-sm font-medium ${formStep === 2 ? 'text-white' : 'text-gray-500'}`}>Your Information</p>
                </div>
                <div className={`p-3 rounded-lg ${formStep === 3 ? 'bg-primary/20 border border-primary/30' : 'bg-gray-900/30 border border-gray-800'}`}>
                  <CheckCircle2 className={`w-5 h-5 mx-auto mb-2 ${formStep === 3 ? 'text-primary' : 'text-gray-500'}`} />
                  <p className={`text-sm font-medium ${formStep === 3 ? 'text-white' : 'text-gray-500'}`}>Confirm Booking</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Select a Date</h4>
                      <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border-gray-800 bg-gray-900/50"
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            
                            // Disable past dates, Saturdays (6) and Sundays (0)
                            return (
                              date < today ||
                              date.getDay() === 0 ||
                              date.getDay() === 6
                            );
                          }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Select a Time Slot</h4>
                      <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6">
                        {date ? (
                          <div className="grid grid-cols-2 gap-3">
                            {availableTimeSlots.map((slot) => (
                              <Button 
                                key={slot}
                                type="button"
                                variant={timeSlot === slot ? "default" : "outline"}
                                className={`
                                  py-6 font-medium relative
                                  ${timeSlot === slot ? 'bg-primary hover:bg-primary/90 text-white' : 'border-gray-700 text-gray-300 hover:text-white'}
                                  ${!timeSlotIsAvailable(slot) ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                                onClick={() => timeSlotIsAvailable(slot) && setTimeSlot(slot)}
                                disabled={!timeSlotIsAvailable(slot)}
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {slot}
                                {!timeSlotIsAvailable(slot) && (
                                  <div className="absolute top-1 right-1">
                                    <span className="text-xs text-red-400">Booked</span>
                                  </div>
                                )}
                              </Button>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-10 text-gray-400">
                            <CalendarIcon className="mx-auto h-12 w-12 text-gray-600 mb-4" />
                            <p>Please select a date first</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button 
                      type="button" 
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => setFormStep(2)}
                      disabled={!date || !timeSlot}
                    >
                      Continue to Personal Details
                    </Button>
                  </div>
                </motion.div>
              )}
              
              {formStep === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-white mb-6">Your Information</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className="pl-10 bg-gray-900/70 border-gray-700 text-gray-300 focus:ring-primary"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10 bg-gray-900/70 border-gray-700 text-gray-300 focus:ring-primary"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          className="pl-10 bg-gray-900/70 border-gray-700 text-gray-300 focus:ring-primary"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Let us know about your specific needs or questions"
                        className="bg-gray-900/70 border-gray-700 text-gray-300 focus:ring-primary"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="border-gray-700 text-gray-300"
                      onClick={() => setFormStep(1)}
                    >
                      Back
                    </Button>
                    <Button 
                      type="button" 
                      className="bg-primary hover:bg-primary/90 text-white"
                      onClick={() => setFormStep(3)}
                      disabled={!formData.name || !formData.email || !formData.phone}
                    >
                      Review Booking
                    </Button>
                  </div>
                </motion.div>
              )}
              
              {formStep === 3 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-white mb-6">Review Your Booking</h4>
                  
                  <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 mb-8">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                      <h5 className="font-medium text-white">Consultation Details</h5>
                      <span className="text-sm text-primary">Initial Consultation (Free)</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-start mb-4">
                          <CalendarIcon className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-400">Date</p>
                            <p className="text-white">{date ? format(date, 'EEEE, MMMM d, yyyy') : ''}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-400">Time</p>
                            <p className="text-white">{timeSlot}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-start mb-4">
                          <User className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-400">Name</p>
                            <p className="text-white">{formData.name}</p>
                          </div>
                        </div>
                        <div className="flex items-start mb-4">
                          <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-white">{formData.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="text-white">{formData.phone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {formData.notes && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">Additional Notes</p>
                        <p className="text-gray-300">{formData.notes}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 mb-8 flex items-start">
                    <AlertCircle className="text-blue-400 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-300 text-sm">
                        By confirming this booking, you agree to our terms and conditions. You'll receive a confirmation email with details about your consultation and instructions for joining the virtual meeting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      className="border-gray-700 text-gray-300"
                      onClick={() => setFormStep(2)}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}