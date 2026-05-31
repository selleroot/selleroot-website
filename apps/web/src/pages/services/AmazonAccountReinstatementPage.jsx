
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { ShieldAlert, MessageSquare, CircleCheck as CheckCircle2, ArrowRight, ShieldCheck, TriangleAlert as AlertTriangle, FileText, Users, Activity, Clock, ChartBar as BarChart3, Target, Search, Zap } from 'lucide-react';
import { useSchema } from '@/hooks/useSchema.js';
import FAQItem from '@/components/FAQItem.jsx';
import CalendlyButton from '@/components/CalendlyButton.jsx';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import { motion } from 'framer-motion';

const AmazonAccountReinstatementPage = () => {
  const { getServiceSchema } = useSchema();
  const whatsappMessage = encodeURIComponent('Hi Selleroot, I need help with Amazon account reinstatement.');
  const whatsappLink = `https://wa.me/918178121217?text=${whatsappMessage}`;

  const sections = [
    {
      title: 'Service Overview',
      icon: ShieldAlert,
      content: `Amazon account reinstatement requires a strategic, professional approach. When your seller account is suspended, your business faces immediate cash flow disruption and potential long-term damage. Selleroot provides structured amazon account reinstatement service designed to address Amazon's specific concerns while maintaining compliance with all marketplace policies.`
    },
    {
      title: 'Common Causes of Suspension',
      icon: AlertTriangle,
      items: [
        'High Order Defect Rate (ODR) exceeding Amazon thresholds',
        'Late Shipment Rate violations affecting customer experience',
        'Product Authenticity Customer Complaints regarding item quality',
        'Condition Guidelines violations such as Used sold as New',
        'Review manipulation allegations or policy violations',
        'Intellectual Property complaints from rights owners',
        'Related account linkages and关联账户 issues',
        'Section 3 policy violations and severe deactivations'
      ]
    },
    {
      title: 'Root Cause Analysis',
      icon: Search,
      content: `Our amazon seller account reinstatement process begins with comprehensive root cause analysis. We examine your Account Health Dashboard, Voice of Customer metrics, performance notifications, and business operations to identify the exact factors that triggered the suspension. This deep-dive analysis ensures our appeal addresses the real issues, not just symptoms.`
    },
    {
      title: 'Recovery Process',
      icon: Activity,
      steps: [
        { title: 'Initial Case Review', desc: 'Comprehensive evaluation of your suspension notice, account health metrics, and business history.' },
        { title: 'Root Cause Identification', desc: 'Detailed analysis to determine the specific policy violations or performance issues.' },
        { title: 'Strategic POA Development', desc: 'Professional Plan of Action creation following Amazon\'s preferred format and requirements.' },
        { title: 'Documentation Compilation', desc: 'Gathering and formatting supporting evidence, invoices, and corrective action proof.' },
        { title: 'Appeal Submission', desc: 'Strategic submission timing and method for optimal review consideration.' },
        { title: 'Follow-Up Management', desc: "Professional handling of Amazon's responses and additional information requests." }
      ]
    },
    {
      title: 'Compliance Considerations',
      icon: ShieldCheck,
      content: `Every amazon reinstatement service we provide focuses on long-term compliance. We don't just aim for reinstatement; we ensure you understand the policies and have systems in place to prevent future issues. Our approach includes staff training recommendations, operational improvements, and ongoing monitoring strategies.`
    }
  ];

  const faqs = [
    {
      q: 'What is Amazon account reinstatement service?',
      a: 'Amazon account reinstatement service is professional assistance for sellers whose accounts have been suspended. We analyze the suspension reason, develop a comprehensive Plan of Action (POA), and guide you through the appeal process to demonstrate your commitment to compliance and customer satisfaction.'
    },
    {
      q: 'How long does Amazon account reinstatement take?',
      a: 'Reinstatement timelines vary based on the complexity of the violation and Amazon\'s current review backlog. Standard performance suspensions may resolve in 3-7 business days with a properly prepared appeal. More complex cases like Section 3 violations can take several weeks.'
    },
    {
      q: 'Can you guarantee Amazon seller account reinstatement?',
      a: 'No professional service can guarantee reinstatement as the final decision rests solely with Amazon. However, our structured approach significantly improves your chances of success by addressing Amazon\'s specific concerns with professional documentation.'
    },
    {
      q: 'What documents do I need for account reinstatement?',
      a: 'Required documents vary by case type but may include supplier invoices, brand authorization letters, proof of product authenticity, corrective action documentation, and evidence of business legitimacy. We provide a customized checklist after reviewing your specific situation.'
    },
    {
      q: 'What if my previous appeal was rejected?',
      a: 'Many sellers come to us after failed attempts. We analyze why the previous appeal failed, identify gaps or weaknesses, and develop a completely new approach. Our multi-angle strategy often succeeds where single-attempt appeals have not.'
    },
    {
      q: 'Do I need to grant access to my Seller Central account?',
      a: 'We primarily work through screen shares and exported documents to maintain your account security. If access is needed for urgent matters, we use restricted permissions and follow strict confidentiality protocols.'
    },
    {
      q: 'What is a Plan of Action (POA) for Amazon?',
      a: 'A Plan of Action is a formal document explaining the root cause of your violation, the immediate corrective actions you\'ve taken, and the long-term systems you\'ve implemented to prevent recurrence. It must be concise, specific, and action-oriented.'
    },
    {
      q: 'How much does Amazon account reinstatement service cost?',
      a: 'Our fees vary based on case complexity. We offer transparent pricing during our initial consultation. Book a free account audit to discuss your specific situation and receive a detailed quote.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Amazon Account Reinstatement Service | Selleroot Consulting</title>
        <meta name="description" content="Professional Amazon seller account reinstatement service. Expert suspension appeal assistance for Amazon sellers. Root cause analysis and compliance-focused recovery support." />
        <meta name="keywords" content="amazon account reinstatement service, amazon seller account reinstatement, amazon reinstatement services, amazon suspended account help, amazon appeal service" />
        <link rel="canonical" href="https://selleroot.com/services/amazon-account-reinstatement" />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema(
            'Amazon Account Reinstatement Service',
            'Professional amazon account reinstatement service helping suspended sellers recover their accounts through structured appeals and compliance-focused strategies.',
            '/services/amazon-account-reinstatement'
          ))}
        </script>
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/20"
              >
                <ShieldAlert className="w-4 h-4 text-secondary" />
                Amazon Marketplace Consulting
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight text-balance"
              >
                Amazon Account<br />Reinstatement Service
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                Professional amazon seller account reinstatement support with structured appeals, root cause analysis, and compliance-focused strategies.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <CalendlyButton
                  className="h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl text-lg font-bold shadow-lg shadow-secondary/25"
                  text="Book Free Account Audit"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-xl text-lg font-bold backdrop-blur-sm"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('service_hero')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center flex-wrap gap-6 text-sm font-medium text-white/70"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  Compliance-Focused
                </span>
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-secondary" />
                  Root Cause Analysis
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-secondary" />
                  Professional POA
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-secondary text-secondary-foreground py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Professional Documentation
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                15+ Years Combined Experience
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Confidential Process
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Swift Response
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2 space-y-16">
                {sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                    </div>

                    {section.content && (
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.steps && (
                      <div className="space-y-6">
                        {section.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-4 bg-muted/30 p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                              {idx + 1}
                            </div>
                            <div>
                              <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                              <p className="text-muted-foreground">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                  {/* CTA Card */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start?</h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Get a professional review of your suspension case with actionable next steps.
                    </p>
                    <div className="space-y-3">
                      <CalendlyButton
                        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 rounded-xl font-bold"
                        text="Book Free Account Audit"
                      />
                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-14 rounded-xl font-semibold border-white/20 text-white hover:bg-white/10"
                      >
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('service_sidebar')}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          WhatsApp Support
                        </a>
                      </Button>
                    </div>
                  </motion.div>

                  {/* Quick Contact */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-muted rounded-2xl p-6 border border-border/50"
                  >
                    <h4 className="font-bold text-foreground mb-4">Quick Contact</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-4 h-4 text-[#25D366]" />
                        <span className="text-muted-foreground">+91 81781 21217</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ShieldAlert className="w-4 h-4 text-primary" />
                        <a href="mailto:info@selleroot.com" className="text-primary hover:underline">
                          info@selleroot.com
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Related Services */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <h4 className="font-bold text-foreground mb-4">Related Services</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/services/section-3-appeals" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Section 3 Appeals
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/related-account-appeals" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Related Account Appeals
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/video-verification" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Video Verification Support
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/funds-release" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          Funds Release Assistance
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about Amazon account reinstatement
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} value={`faq-${i}`} question={faq.q} answer={faq.a} />
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Start Your Recovery Process
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-primary-foreground/80 mb-10"
            >
              Professional support for Amazon account reinstatement. Book a free consultation to discuss your case.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CalendlyButton
                className="h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl text-lg font-bold"
                text="Book Free Account Audit"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-xl text-lg font-semibold"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('service_bottom')}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AmazonAccountReinstatementPage;
