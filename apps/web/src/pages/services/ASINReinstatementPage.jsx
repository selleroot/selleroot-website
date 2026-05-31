
import React from 'react';
import { Package } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const ASINReinstatementPage = () => {
  return (
    <ServicePageLayout
      title="ASIN Reinstatement Support"
      description="Professional assistance recovering suppressed or blocked ASINs and getting your products back on Amazon."
      icon={Package}
      path="/services/asin-reinstatement"
      overview="ASIN-level suppressions and blocks can significantly impact your sales and account health. Whether due to policy violations, customer complaints, or documentation requests, getting ASINs reinstated requires a targeted approach. We help sellers address the specific issues Amazon has identified and submit effective appeals to restore listing visibility."
      problemsList={[
        "ASIN blocked due to policy violations",
        "Listing suppressed for missing information",
        "Safety or compliance documentation requests",
        "Intellectual property complaints on specific ASINs",
        "Restricted category or brand requirements",
        "Customer product condition complaints",
        "Attribute inaccuracy warnings"
      ]}
      howWeHelpList={[
        { title: "ASIN Analysis", desc: "We review the specific reason for ASIN suppression to understand exactly what Amazon requires for reinstatement." },
        { title: "Documentation Preparation", desc: "We help compile and format the necessary invoices, safety documents, or compliance certificates Amazon has requested." },
        { title: "Appeal Drafting", desc: "We create targeted appeals addressing the specific policy concerns or compliance issues for your ASIN." },
        { title: "Listing Optimization", desc: "We advise on listing improvements to prevent future suppressions and maintain good ASIN health." }
      ]}
      faqs={[
        { q: "Why was my ASIN suppressed?", a: "ASINs can be suppressed for many reasons including policy violations, missing required attributes, customer complaints, safety concerns, or intellectual property issues. Check your Account Health Dashboard for specific details." },
        { q: "How is ASIN reinstatement different from account reinstatement?", a: "ASIN reinstatement focuses on removing blocks from specific product listings while keeping your account active. Account reinstatement is needed when your entire seller account has been deactivated." },
        { q: "Can listing suppression affect my account health?", a: "Yes. Repeated ASIN-level issues can accumulate and lead to account-level actions. Addressing ASIN problems promptly helps maintain good overall account health." },
        { q: "How long does ASIN reinstatement take?", a: "Timelines vary based on the issue complexity and Amazon's current queue. Simple documentation submissions may resolve in days, while complex policy violation appeals can take longer." }
      ]}
    />
  );
};

export default ASINReinstatementPage;
