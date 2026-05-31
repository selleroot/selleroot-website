
import React from 'react';
import { ActivitySquare } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const AccountHealthPage = () => {
  return (
    <ServicePageLayout
      title="Account Health Review"
      description="Proactive monitoring and auditing of your seller metrics to prevent unexpected suspensions."
      icon={ActivitySquare}
      path="/services/account-health"
      overview="The best way to handle a suspension is to prevent it entirely. Our Account Health Review service involves deep-diving into your Account Health Dashboard, Voice of the Customer metrics, and Return reports to spot dangerous trends before Amazon takes action."
      problemsList={[
        "Dropping Account Health Rating (AHR)",
        "Accumulating Suspected IP Violations",
        "High NCX (Negative Customer Experience) rates",
        "Unaddressed policy compliance warnings",
        "Stranded inventory due to listing restrictions"
      ]}
      howWeHelpList={[
        { title: "Risk Assessment Audit", desc: "A comprehensive review of your entire catalog for high-risk listings and compliance warnings." },
        { title: "Defect Rate Mitigation", desc: "Strategies to address Late Shipments, Valid Tracking Rate drops, and Order Defects." },
        { title: "Proactive Appeals", desc: "Assisting in clearing warnings from your dashboard before they impact your AHR score." }
      ]}
      faqs={[
        { q: "What is a good Account Health Rating?", a: "Amazon targets an AHR of 200-1000 (Green). 100-199 is 'At Risk' (Yellow), and under 100 is 'Unhealthy' (Red) which leads to deactivation." },
        { q: "Should I ignore Suspected Intellectual Property violations if I delete the listing?", a: "No. Deleting the listing doesn't remove the violation from your record. You must successfully appeal or address the violation to restore your account health score." },
        { q: "How often should my account health be reviewed?", a: "High-volume sellers should review Voice of the Customer and AHR metrics weekly to catch issues early." }
      ]}
    />
  );
};

export default AccountHealthPage;
