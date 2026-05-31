
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { ShieldCheck, FileText, UserCheck, Scale, Globe as Globe2, OctagonAlert as AlertOctagon, Users, DollarSign, Video, CircleCheck as CheckCircle2, Search, Shield, Briefcase, Activity, Target, Lock, MessageSquare } from 'lucide-react';
import { useSchema } from '@/hooks/useSchema.js';
import { fadeInUp, staggerContainer, staggerItem, buttonHover } from '@/lib/animationVariants.js';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

import TrustPillar from '@/components/TrustPillar.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import FAQItem from '@/components/FAQItem.jsx';
import OptimizedImage from '@/components/OptimizedImage.jsx';
import CalendlyButton from '@/components/CalendlyButton.jsx';

const HomePage = () => {
  const { getOrganizationSchema } = useSchema();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const whatsappMessage = encodeURIComponent('Hi Selleroot, I need help with my Amazon seller account.');
  const whatsappLink = `https://wa.me/918178121217?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Selleroot | Amazon Seller Recovery & Compliance Experts</title>
        <meta name="description" content="Helping online sellers navigate account recovery, compliance challenges, and marketplace success. Book a consultation today." />
        <script type="application/ld+json">
          {JSON.stringify(getOrganizationSchema())}
        </script>
      </Helmet>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <OptimizedImage
              src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2"
              alt="Amazon marketplace boxes in warehouse"
              className="w-full h-full"
              priority={true}
            />
            <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-90" />
          </motion.div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/20">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                Professional Marketplace Consulting
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-balance leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                Recover. Scale. Automate.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                Professional Marketplace Recovery & Compliance Support For Amazon And Walmart Sellers.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap" className="w-full sm:w-auto">
                  <CalendlyButton className="h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl text-lg font-bold shadow-lg shadow-secondary/25 w-full" />
                </motion.div>
                <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap" className="w-full sm:w-auto">
                  <Button asChild size="lg" variant="outline" className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-xl text-lg font-bold w-full backdrop-blur-sm touch-target">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('home_hero')}>
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Sellers Trust Selleroot</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Foundational pillars that guide our approach to every case.</p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { icon: FileText, title: "Professional Documentation", desc: "Industry-standard appeal structures." },
                { icon: Lock, title: "Confidential Process", desc: "Strict data privacy protocols." },
                { icon: UserCheck, title: "Personalized Guidance", desc: "Tailored to your specific suspension." },
                { icon: Scale, title: "Compliance-Focused", desc: "Solutions built for longevity." },
                { icon: Globe2, title: "Global Seller Support", desc: "Assisting sellers worldwide." }
              ].map((pillar, i) => (
                <TrustPillar key={i} index={i} icon={pillar.icon} title={pillar.title} description={pillar.desc} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICE PILLARS */}
        <section id="services" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Comprehensive Seller Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Expertise across recovery, compliance, and growth to keep your business operating.</p>
            </motion.div>

            <div className="space-y-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10 border-b border-border pb-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Recovery Services</h3>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ServiceCard icon={AlertOctagon} title="Account Reinstatement" description="Professional appeals for standard suspensions." path="/services/account-reinstatement" index={0} />
                  <ServiceCard icon={FileText} title="Section 3 Appeals" description="Complex appeals for severe deactivations." path="/services/section-3-appeals" index={1} />
                  <ServiceCard icon={Users} title="Related Account Appeals" description="Untangling linked account suspensions." path="/services/related-account-appeals" index={2} />
                  <ServiceCard icon={DollarSign} title="Funds Release" description="Assistance recovering withheld disbursements." path="/services/funds-release" index={3} />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10 border-b border-border pb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Compliance Services</h3>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard icon={Video} title="Video Verification" description="Preparation and guidance for identity interviews." path="/services/video-verification" index={0} />
                  <ServiceCard icon={FileText} title="Compliance Doc" description="Invoice and supply chain documentation review." path="/services/compliance-documentation" index={1} />
                  <ServiceCard icon={Activity} title="Account Health" description="Proactive monitoring and health reviews." path="/services/account-health" index={2} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY SELLEROOT */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-white">The Selleroot Difference</h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">We don't just write appeals; we diagnose the root cause and build sustainable solutions.</p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { icon: Search, title: "Structured Case Evaluation", desc: "Deep dive into your account history and notices." },
                { icon: Target, title: "Root Cause Analysis", desc: "Finding the actual trigger, not just the symptom." },
                { icon: FileText, title: "Professional Documentation", desc: "Clear, concise, policy-compliant formatting." },
                { icon: Users, title: "Dedicated Support", desc: "One-on-one communication with specialists." },
                { icon: Lock, title: "Confidential Handling", desc: "Your data and supplier info remain strictly private." },
                { icon: Activity, title: "Long-Term Focus", desc: "Strategies to prevent future deactivations." }
              ].map((diff, i) => (
                <motion.div key={i} variants={staggerItem} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <diff.icon className="w-8 h-8 text-secondary mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">{diff.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Proven Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A structured timeline to get your business back on track.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative">
              {[
                { title: "Case Review", desc: "Initial assessment of your suspension notice." },
                { title: "Analysis", desc: "Identifying policy violations & root causes." },
                { title: "Preparation", desc: "Drafting the Plan of Action (POA)." },
                { title: "Guidance", desc: "Submission strategy and review." },
                { title: "Follow-Up", desc: "Handling Amazon's responses." }
              ].map((step, i) => (
                <ProcessStep key={i} index={i} number={i + 1} title={step.title} description={step.desc} isLast={i === 4} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Clear answers to your most pressing concerns.</p>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "Why was my Amazon seller account suspended?", a: "Suspensions occur due to policy violations, poor performance metrics, IP complaints, related account links, or verification failures. We analyze your specific notice to determine the exact cause." },
                { q: "What is a Section 3 deactivation?", a: "Section 3 refers to the Amazon Services Business Solutions Agreement. A deactivation under this section usually involves severe violations like inauthenticity, fraud, or dropshipping policy breaches. It requires a highly detailed appeal." },
                { q: "How long does reinstatement take?", a: "Reinstatement times vary from 48 hours to several weeks depending on the complexity of the violation, the quality of the appeal, and Amazon's current review queue." },
                { q: "Can you guarantee reinstatement?", a: "No professional service can guarantee reinstatement as the final decision rests solely with Amazon. However, we guarantee that you will receive industry-standard, expertly crafted documentation that maximizes your chances." },
                { q: "What do I need for video verification?", a: "You typically need your government-issued photo ID, business license, and a recent bank or credit card statement matching the information in Seller Central. We provide a full prep checklist." },
                { q: "How do you handle related accounts?", a: "We analyze the connection points (IP, address, bank info, user permissions) to either prove the accounts are separate legitimate businesses or to successfully appeal the root account first." },
                { q: "Will you need access to my Seller Central?", a: "We primarily work via restricted user permissions or by reviewing the performance notifications you export, ensuring your account remains secure." },
                { q: "What happens to my withheld funds?", a: "If an account cannot be reinstated, we assist with a separate Funds Release appeal process, which typically occurs 90 days after deactivation." }
              ].map((faq, i) => (
                <FAQItem key={i} value={`faq-${i}`} question={faq.q} answer={faq.a} />
              ))}
            </Accordion>
          </div>
        </section>

        {/* ABOUT SELLEROOT */}
        <section id="about" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Trusted Partner in Marketplace Compliance</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Selleroot, we understand that an Amazon suspension isn't just a technical issue—it's a critical disruption to your livelihood and business operations.
                  </p>
                  <p>
                    We operate on principles of absolute transparency, rigorous professionalism, and strict confidentiality. Unlike agencies promising "magic bullet" guaranteed reinstatements, we focus on identifying the factual root causes of your suspension and crafting precise, policy-compliant documentation that speaks Amazon's language.
                  </p>
                  <p>
                    Our mission goes beyond immediate account recovery. We strive to educate and equip our clients with the compliance knowledge needed for long-term, sustainable growth on the marketplace.
                  </p>
                </div>
                <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap" className="inline-block mt-8">
                  <CalendlyButton className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl" text="Discuss Your Case With Us" />
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4 rounded-3xl" />
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7" 
                  alt="Professional consulting meeting" 
                  className="relative rounded-3xl shadow-xl w-full h-auto aspect-[4/3]"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(HomePage);
