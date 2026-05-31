
import React from 'react';
import { FileWarning } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const Section3AppealsPage = () => {
  return (
    <ServicePageLayout
      title="Section 3 Appeals"
      description="Specialized consulting and documentation for severe Amazon Business Solutions Agreement Section 3 deactivations."
      icon={FileWarning}
      path="/services/section-3-appeals"
      overview="A Section 3 deactivation is one of the most severe actions Amazon takes against a seller. It implies a breach of trust, potential fraud, or severe policy violations like dropshipping abuse or inauthenticity. Appealing these requires extensive evidence gathering, supply chain validation, and a bulletproof explanation of events."
      problemsList={[
        "Dropshipping policy violations",
        "Suspected fraudulent activity",
        "Severe inauthentic item complaints",
        "Code of Conduct violations",
        "Forged or manipulated documentation"
      ]}
      howWeHelpList={[
        { title: "Supply Chain Auditing", desc: "We help verify and format your invoices to meet Amazon's strict documentation standards." },
        { title: "Comprehensive Fact-Finding", desc: "Building a timeline of events that clearly explains any misunderstandings or definitive corrective actions." },
        { title: "Escalation Strategy", desc: "If initial appeals fail, we guide you through proper escalation channels to executive seller relations." }
      ]}
      faqs={[
        { q: "Is a Section 3 suspension permanent?", a: "The notice often says 'permanent', but many Section 3 deactivations can be successfully appealed if you provide sufficient proof of compliance and a valid root cause." },
        { q: "What documents will I need?", a: "Typically, 365 days of unedited invoices, proof of delivery, supplier contact information, and occasionally business registration details." },
        { q: "What if I made a mistake with dropshipping?", a: "We help you acknowledge the policy breach professionally and outline a completely new fulfillment strategy (like shifting to FBA) to assure Amazon the violation will not recur." }
      ]}
    />
  );
};

export default Section3AppealsPage;
