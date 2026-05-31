
import React from 'react';
import { FileCheck2 } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const ComplianceDocumentationPage = () => {
  return (
    <ServicePageLayout
      title="Compliance Documentation"
      description="Pre-submission review and formatting of invoices, supply chain proof, and safety certificates."
      icon={FileCheck2}
      path="/services/compliance-documentation"
      overview="Amazon rejects thousands of legitimate invoices daily simply due to poor formatting, missing details, or mismatched addresses. Before you submit crucial supply chain or safety documentation, our team reviews and advises on necessary corrections to ensure first-time acceptance."
      problemsList={[
        "Unverifiable supplier information",
        "Mismatched business addresses on invoices",
        "Pro-forma invoices or commercial invoices being rejected",
        "Missing FDA, CPC, or UL testing documents",
        "Format issues (Excel, Word documents instead of PDF)"
      ]}
      howWeHelpList={[
        { title: "Invoice Formatting Review", desc: "We cross-reference your invoices against Amazon's strict checklist of requirements." },
        { title: "Supplier Validation", desc: "Advising on how to ensure your supplier's web presence and contact info pass Amazon's verification." },
        { title: "Category Ungating Support", desc: "Guidance on acquiring the right documentation to sell in restricted categories or brands." }
      ]}
      faqs={[
        { q: "Why did Amazon reject my legitimate invoice?", a: "Common reasons include: the invoice is dated over 365 days ago, the address doesn't match Seller Central exactly, it's a pro-forma invoice, or the supplier's website is unverifiable." },
        { q: "Can you forge or edit invoices for me?", a: "Absolutely not. Forging documents is illegal, against Amazon TOS, and a guaranteed way to lose your account permanently. We advise on how to obtain correct documents legally." },
        { q: "What is a Letter of Authorization (LOA)?", a: "It is a formal document from a brand owner granting you explicit permission to sell their trademarked products on Amazon. We can provide templates on how to request these." }
      ]}
    />
  );
};

export default ComplianceDocumentationPage;
