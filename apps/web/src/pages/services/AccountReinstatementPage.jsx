
import React from 'react';
import { ShieldAlert } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const AccountReinstatementPage = () => {
  return (
    <ServicePageLayout
      title="Account Reinstatement"
      description="Professional, policy-compliant appeal preparation to recover standard Amazon seller account suspensions."
      icon={ShieldAlert}
      path="/services/account-reinstatement"
      overview="An Amazon account suspension stops your cash flow immediately. Generic templates rarely work and often lead to further rejection. We provide a tailored, meticulous approach to writing Plans of Action (POAs) that directly address Amazon's core concerns, maximizing your chance of a swift reinstatement."
      problemsList={[
        "High Order Defect Rate (ODR)",
        "Late Shipment Rate violations",
        "Product Authenticity Customer Complaints",
        "Condition Guidelines violations (Used sold as New)",
        "Review manipulation allegations"
      ]}
      howWeHelpList={[
        { title: "Deep Dive Analysis", desc: "We review your performance notifications and metrics to find the true root cause." },
        { title: "Custom POA Drafting", desc: "We write a structured, professional Plan of Action following Amazon's preferred format." },
        { title: "Submission Strategy", desc: "Guidance on how and when to submit the appeal for the best results." }
      ]}
      faqs={[
        { q: "How long does a standard reinstatement take?", a: "With a professionally prepared POA, standard performance suspensions can often be resolved within 3 to 7 days, though Amazon's review times vary." },
        { q: "Do you guarantee my account will be reinstated?", a: "No ethical service can guarantee reinstatement. However, our structured methodology provides the highest statistical chance of success by strictly adhering to Amazon's compliance requirements." },
        { q: "What if I already submitted an appeal and it was rejected?", a: "We often take on cases with prior rejections. We analyze the failed appeal to see what Amazon felt was missing, and restructure the approach completely." }
      ]}
    />
  );
};

export default AccountReinstatementPage;
