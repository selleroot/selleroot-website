
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
import { Mail, MessageSquare, Shield, MessageSquare as MessageIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animationVariants.js';
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  whatsapp: z.string().min(10, 'Valid WhatsApp number is required'),
  country: z.string().min(1, 'Please select a country'),
  marketplace: z.string().min(1, 'Please select a marketplace'),
  issueType: z.string().min(1, 'Please select your primary issue'),
  details: z.string().min(20, 'Please provide at least 20 characters'),
});

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'India',
  'Germany', 'France', 'Italy', 'Spain', 'Netherlands',
  'Japan', 'Brazil', 'Mexico', 'Other'
];

const issueTypes = [
  'Account Suspension',
  'Section 3 Deactivation',
  'Performance Metrics',
  'IP Complaints',
  'Authenticity Issues',
  'Video Verification',
  'Funds Release',
  'Account Health',
  'Policy Violations',
  'Other'
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const savedState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('selleroot_contact_draft') || '{}') : {};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: savedState.name || '',
      email: savedState.email || '',
      whatsapp: savedState.whatsapp || '',
      country: savedState.country || '',
      marketplace: savedState.marketplace || '',
      issueType: savedState.issueType || '',
      details: savedState.details || '',
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem('selleroot_contact_draft', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const submissions = JSON.parse(localStorage.getItem('selleroot_contacts') || '[]');
      submissions.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem('selleroot_contacts', JSON.stringify(submissions));

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
  const whatsappLink = `https://wa.me/918178121217?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Contact Us | Selleroot - Professional Marketplace Consulting</title>
        <meta name="description" content="Contact Selleroot for professional Amazon and Walmart seller consulting. Confidential case reviews and expert guidance." />
        <link rel="canonical" href="https://selleroot.com/contact" />
      </Helmet>

      <main className="pt-20 bg-background min-h-screen">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contact Selleroot
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reach out for a confidential consultation about your marketplace account.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              {/* Contact Info */}
              <motion.div
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <a href="mailto:info@selleroot.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@selleroot.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#25D366]">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">WhatsApp</h3>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('contact_info')}
                        className="text-muted-foreground hover:text-[#25D366] transition-colors"
                      >
                        +91 81781 21217
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Confidential Consultation</h3>
                      <p className="text-sm text-muted-foreground">
                        Your case details are handled with complete confidentiality and professional discretion.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2 bg-card rounded-2xl p-8 lg:p-10 border border-border"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* WhatsApp Number */}
                    <FormField
                      control={form.control}
                      name="whatsapp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" {...field} className="rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Country */}
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-lg">
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country} value={country}>
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Marketplace */}
                    <FormField
                      control={form.control}
                      name="marketplace"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marketplace</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-lg">
                                <SelectValue placeholder="Select marketplace" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="amazon">Amazon</SelectItem>
                              <SelectItem value="walmart">Walmart</SelectItem>
                              <SelectItem value="both">Both Amazon & Walmart</SelectItem>
                              <SelectItem value="other">Other Marketplace</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Issue Type */}
                    <FormField
                      control={form.control}
                      name="issueType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Issue Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-lg">
                                <SelectValue placeholder="Select issue type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {issueTypes.map((issue) => (
                                <SelectItem key={issue} value={issue}>
                                  {issue}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Case Details */}
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Case Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your situation in detail..."
                              className="min-h-[120px] rounded-lg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 text-lg font-bold"
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('contact_form')}
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Book Free Account Audit
                      </a>
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
