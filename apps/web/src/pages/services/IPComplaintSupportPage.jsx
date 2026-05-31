
import React from 'react';
import { Shield, TriangleAlert as AlertTriangle } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const IPComplaintSupportPage = () => {
  return (
    <ServicePageLayout
      title="IP Complaint Support"
      description="Professional assistance navigating intellectual property complaints and protecting your Amazon seller account from IP-related suspensions."
      icon={Shield}
      path="/services/ip-complaint-support"
      overview="Intellectual property complaints can severely impact your Amazon seller account. Amazon takes IP violations very seriously, and multiple complaints can lead to account deactivation. Our IP Complaint Support service helps you understand the nature of the complaint, respond appropriately, and implement preventive measures to protect your business."
      problemsList={[
        "Trademark infringement complaints from rights owners",
        "Copyright violation notices",
        "Patent infringement claims",
        "Counterfeit allegations",
        "Unauthorized use of brand images or content",
        "Design patent violations",
        "Multiple IP complaints affecting account health"
      ]}
      howWeHelpList={[
        { title: "Complaint Analysis", desc: "We review the specific IP complaint details to understand the allegation and identify appropriate response strategies." },
        { title: "Response Strategy", desc: "We help draft professional responses to rights owners and Amazon, including evidence of legitimate sourcing or authorization." },
        { title: "Documentation Support", desc: "We assist in gathering Letters of Authorization, supplier documentation, and proof of authenticity to support your case." },
        { title: "Preventive Measures", desc: "We help implement listing and sourcing practices to minimize future IP complaint risks." }
      ]}
      faqs={[
        { q: "What should I do when I receive an IP complaint?", a: "Review the complaint details carefully in Seller Central. Do not immediately relist the product. Contact us for a professional assessment of your options, which may include responding to the rights owner, providing authorization documentation, or removing the listing permanently." },
        { q: "Can I appeal an IP complaint?", a: "Yes, but only if you have legitimate grounds. This includes having proper authorization, the complaint is mistaken, or you have valid licensing. Submitting false information or continued violations can lead to permanent account closure." },
        { q: "How many IP complaints will cause account suspension?", a: "There is no fixed number, but Amazon's algorithm weighs multiple factors including complaint frequency, timing, and your account's overall health. Multiple complaints within a short period significantly increase deactivation risk." },
        { q: "What is a Letter of Authorization (LOA)?", a: "A Letter of Authorization is a formal document from the brand owner granting you explicit permission to sell their trademarked products on Amazon. It must be on company letterhead and signed by an authorized representative." }
      ]}
    />
  );
};

export default IPComplaintSupportPage;
