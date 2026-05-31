
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import { CircleCheck as CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { useSchema } from '@/hooks/useSchema.js';
import FAQItem from '@/components/FAQItem.jsx';
import CalendlyButton from '@/components/CalendlyButton.jsx';
import { trackWhatsAppClick } from '@/lib/performanceMonitoring.js';

const ServicePageLayout = ({ 
  title, 
  description, 
  icon: Icon,
  path,
  overview, 
  problemsList, 
  howWeHelpList, 
  faqs 
}) => {
  const { getServiceSchema } = useSchema();
  const whatsappMessage = encodeURIComponent(`Hi Selleroot, I need help with ${title}.`);
  const whatsappLink = `https://wa.me/918178121217?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>{`${title} | Selleroot Consulting`}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(getServiceSchema(title, description, path))}
        </script>
      </Helmet>

      <main className="pt-20">
        <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-secondary backdrop-blur-sm">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">{title}</h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton className="h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl text-lg font-bold w-full sm:w-auto" />
              <Button asChild size="lg" variant="outline" className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-xl text-lg font-bold w-full sm:w-auto touch-target">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('service_hero')}>
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-white/70 flex-wrap">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> Confidential Process</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> Professional Documentation</span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Service Overview</h2>
                <div className="prose prose-lg text-muted-foreground mb-12">
                  <p>{overview}</p>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-6">Common Triggers</h3>
                <ul className="space-y-4">
                  {problemsList.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-muted/50 p-4 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">!</span>
                      </div>
                      <span className="text-foreground/80 font-medium">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-muted p-8 md:p-10 rounded-3xl border border-border/50 sticky top-32">
                  <h3 className="text-2xl font-bold text-foreground mb-8">How Selleroot Helps</h3>
                  <ul className="space-y-6">
                    {howWeHelpList.map((help, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-foreground text-lg mb-1">{help.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{help.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-8 border-t border-border/60 space-y-4">
                    <CalendlyButton className="w-full bg-primary text-primary-foreground h-14 text-lg rounded-xl group" text="Start Your Recovery" />
                    <Button asChild variant="outline" className="w-full h-14 text-lg rounded-xl group touch-target">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('service_sidebar')}>
                        <MessageSquare className="mr-2 w-5 h-5 text-[#25D366]" /> WhatsApp Support
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Specific details regarding {title.toLowerCase()}.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} value={`faq-${i}`} question={faq.q} answer={faq.a} />
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(ServicePageLayout);
