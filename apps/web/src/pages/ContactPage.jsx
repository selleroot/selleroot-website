
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import CalendlyButton from '@/components/CalendlyButton.jsx';
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  issueType: z.string().min(1, 'Please select your primary issue'),
  message: z.string().min(20, 'Please provide more details about your situation'),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-load saved state
  const savedState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('selleroot_contact_draft') || '{}') : {};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: savedState.name || '',
      email: savedState.email || '',
      phone: savedState.phone || '',
      issueType: savedState.issueType || '',
      message: savedState.message || '',
    },
  });

  // Auto-save form state
  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('selleroot_contact_draft', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const submissions = JSON.parse(localStorage.getItem('selleroot_contacts') || '[]');
      submissions.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem('selleroot_contacts', JSON.stringify(submissions));
      
      // Clear draft on success
      localStorage.removeItem('selleroot_contact_draft');
      
      trackFormSubmit('contact_form', 'success');
      
      toast({
        title: 'Message Received Successfully',
        description: 'A Selleroot specialist will review your case and contact you shortly.',
      });
      
      form.reset();
    } catch (err) {
      trackFormSubmit('contact_form', 'error');
      toast({
        title: 'Submission Failed',
        description: 'We encountered an error. Please try again or use the WhatsApp option.',
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent('Hi Selleroot, I would like to schedule a consultation.');
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Contact Us | Selleroot</title>
        <meta name="description" content="Get in touch with Selleroot's Amazon compliance specialists. Confidential, professional consulting for seller account issues." />
      </Helmet>
      
      <main className="pt-20 bg-background min-h-screen">
        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Discuss Your Case</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below or book directly. All information provided is kept strictly confidential.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              <motion.div 
                className="lg:col-span-7 bg-card border border-border/60 rounded-3xl p-8 lg:p-10 shadow-sm"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="mb-8 p-6 bg-muted/50 rounded-2xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Prefer to book directly?</h3>
                    <p className="text-sm text-muted-foreground">Skip the form and pick a time on our calendar.</p>
                  </div>
                  <CalendlyButton className="w-full sm:w-auto bg-primary text-primary-foreground" text="Open Calendar" />
                </div>
                
                <div className="flex items-center gap-4 mb-8">
                  <hr className="flex-1 border-border" />
                  <span className="text-sm font-medium text-muted-foreground uppercase">OR SEND DETAILS</span>
                  <hr className="flex-1 border-border" />
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-background focus:ring-2 focus:ring-primary/20 touch-target w-full" {...field} />
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
                            <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="bg-background focus:ring-2 focus:ring-primary/20 touch-target w-full" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-background focus:ring-2 focus:ring-primary/20 touch-target w-full" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="issueType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold">Primary Issue</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background focus:ring-2 focus:ring-primary/20 touch-target w-full">
                                  <SelectValue placeholder="Select issue type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="account-reinstatement">Account Deactivation</SelectItem>
                                <SelectItem value="section-3">Section 3 Violation</SelectItem>
                                <SelectItem value="related-account">Related Account Linkage</SelectItem>
                                <SelectItem value="funds-release">Funds Withheld</SelectItem>
                                <SelectItem value="video-verification">Video Verification Help</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Case Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe why your account was suspended..." 
                              className="min-h-[150px] bg-background resize-y focus:ring-2 focus:ring-primary/20 w-full" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        className="w-full touch-target bg-primary text-primary-foreground h-14 text-lg rounded-xl font-bold hover:bg-primary/90 transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                          </span>
                        ) : 'Submit Request'}
                      </Button>
                    </motion.div>
                    <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> Securely transmitted and strictly confidential.
                    </p>
                  </form>
                </Form>
              </motion.div>

              <motion.div 
                className="lg:col-span-5 space-y-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem} className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
                  <h3 className="text-2xl font-bold mb-8 text-white">Direct Contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Email Us</p>
                        <a href="mailto:info@selleroot.com" className="text-lg font-semibold text-white hover:text-secondary transition-colors touch-target">info@selleroot.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                        <p className="text-lg font-semibold text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Global Support</p>
                        <p className="text-lg font-semibold text-white">Assisting Sellers Worldwide</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-muted rounded-3xl p-8 border border-border/50 text-center">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Need Immediate Answers?</h3>
                  <p className="text-muted-foreground mb-6">Connect with a consultant right now via WhatsApp.</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button asChild className="w-full touch-target bg-[#25D366] text-white hover:bg-[#20bd5a] h-12 rounded-xl font-semibold border-none">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('contact_sidebar')}>
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(ContactPage);
