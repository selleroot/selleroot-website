
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users as Users2, Target, ShieldCheck, FileText, Activity, Globe as Globe2, Award, CircleCheck as CheckCircle2, ArrowRight, MessageSquare, ChartBar as BarChart3, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import CalendlyButton from '@/components/CalendlyButton.jsx';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';
import OptimizedImage from '@/components/OptimizedImage.jsx';

const AboutPage = () => {
  const whatsappLink = `https://wa.me/918178121217?text=${encodeURIComponent('Hi Selleroot, I would like to learn more about your services.')}`;

  const pillars = [
    {
      icon: Search,
      title: 'Root Cause Analysis',
      description: 'We dig deep into the actual factors behind your suspension, not just the surface-level symptoms. Our structured methodology identifies the precise triggers that led to your account status.'
    },
    {
      icon: FileText,
      title: 'Professional Documentation',
      description: 'Every appeal we craft follows Amazon and Walmart\'s preferred formats and requirements. We present your case with the clarity and professionalism marketplace reviewers expect.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Focus',
      description: 'Long-term success requires sustainable practices. We help you build operational systems that prevent future issues while addressing current challenges.'
    },
    {
      icon: Users2,
      title: 'Experienced Specialists',
      description: 'Our team brings 15+ years of combined marketplace experience, including seller performance specialists and legal-minded professionals who understand policy enforcement.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Transparency',
      description: 'We provide honest assessments of your situation. We\'ll tell you what\'s achievable, what\'s challenging, and what approach gives you the best chance of success.'
    },
    {
      icon: Activity,
      title: 'Professionalism',
      description: 'Our process is structured, documented, and methodical. We treat every case with the seriousness it deserves, maintaining strict confidentiality throughout.'
    },
    {
      icon: Globe2,
      title: 'Seller Success',
      description: 'Beyond immediate recovery, we focus on educating sellers and building the knowledge foundation needed for sustainable marketplace growth.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Combined Experience' },
    { value: '500+', label: 'Sellers Assisted Globally' },
    { value: '98%', label: 'Client Satisfaction Rate' },
    { value: '24/7', label: 'Support Availability' }
  ];

  return (
    <>
      <Helmet>
        <title>About Selleroot | Professional Marketplace Consulting</title>
        <meta name="description" content="Selleroot is a professional consulting firm specializing in Amazon and Walmart seller account recovery, compliance support, and marketplace growth. 15+ years of combined experience." />
        <link rel="canonical" href="https://selleroot.com/about" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
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
                <Award className="w-4 h-4 text-secondary" />
                Professional Marketplace Consulting
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance"
              >
                Your Trusted Partner in<br />Marketplace Compliance
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                15+ years of combined experience helping Amazon and Walmart sellers navigate account recovery, compliance challenges, and marketplace growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-secondary-foreground/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Professional Consulting for Serious Sellers
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Selleroot, we understand that an Amazon or Walmart suspension isn't just a technical issue—it's a critical disruption to your business operations and livelihood.
                  </p>
                  <p>
                    We operate on principles of absolute transparency, rigorous professionalism, and strict confidentiality. Unlike agencies promising guaranteed outcomes, we focus on identifying the factual root causes of your challenges and crafting precise, policy-compliant documentation.
                  </p>
                  <p>
                    Our mission extends beyond immediate account recovery. We educate and equip sellers with the compliance knowledge needed for long-term, sustainable marketplace success.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <CalendlyButton
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold"
                    text="Book Free Account Audit"
                  />
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl font-semibold"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('about_section')}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat with Us
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4 rounded-3xl" />
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7"
                  alt="Professional consulting team"
                  className="relative rounded-3xl shadow-xl w-full h-auto aspect-[4/3]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A structured methodology designed to identify root causes and build sustainable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerItem}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                The principles that guide every consultation and every recommendation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerItem}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <value.icon className="w-8 h-8 text-secondary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-10"
            >
              Book a free consultation to discuss your marketplace challenges and discover how we can help.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CalendlyButton
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-lg font-bold h-14 px-8"
                text="Book Free Account Audit"
              />
              <Button
                asChild
                variant="outline"
                className="h-14 px-8 rounded-xl text-lg font-semibold"
              >
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
