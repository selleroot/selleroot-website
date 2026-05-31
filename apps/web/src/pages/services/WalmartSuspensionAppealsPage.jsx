
import React from 'react';
import { MailWarning as FileWarning, ShieldCheck } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const WalmartSuspensionAppealsPage = () => {
  return (
    <ServicePageLayout
      title="Walmart Suspension Appeals"
      description="Expert support for appealing Walmart Marketplace suspensions and demonstrating compliance commitment."
      icon={FileWarning}
      path="/services/walmart-suspension-appeals"
      overview="Walmart Marketplace appeals require a thorough understanding of their specific policies and procedures. Whether facing performance-based suspensions, policy violations, or safety concerns, we help sellers craft effective appeals that address Walmart's concerns and demonstrate a commitment to maintaining high seller standards."
      problemsList={[
        "Performance metric failures triggering suspension",
        "Policy violations related to listing accuracy",
        "Trust and safety escalations",
        "Prohibited item sales",
        "Intellectual property complaints",
        "Authentication verification failures",
        "Customer experience violations",
        "Repeated warnings without corrective action"
      ]}
      howWeHelpList={[
        { title: "Appeal Strategy", desc: "We develop a tailored appeal approach based on your specific suspension reason and account history." },
        { title: "Documentation Guidance", desc: "We help you gather and format the specific documentation Walmart requires for your appeal." },
        { title: "Corrective Actions", desc: "We assist in documenting the changes you've made to address the underlying issues." },
        { title: "Follow-Up Management", desc: "We guide you through responding to Walmart's questions or requests for additional information." }
      ]}
      faqs={[
        { q: "What is Walmart's appeal submission process?", a: "Walmart typically requires appeals through specific channels outlined in your suspension notice. We ensure your appeal is submitted through the correct process with complete documentation." },
        { q: "How many chances do I get to appeal?", a: "Walmart may provide opportunities to address issues, but repeated problems or inadequate appeals can lead to permanent suspension. We recommend treating each appeal opportunity seriously." },
        { q: "What should I include in my Walmart appeal?", a: "Appeals should include acknowledgment of the issue, root cause analysis, immediate corrective actions taken, and long-term preventive measures. We help structure this information professionally." },
        { q: "Can I prevent suspension by responding to warnings?", a: "Yes, responding proactively to warnings and performance dips can prevent escalation to full suspension. We can help you address warnings before they become account-level actions." }
      ]}
    />
  );
};

export default WalmartSuspensionAppealsPage;
