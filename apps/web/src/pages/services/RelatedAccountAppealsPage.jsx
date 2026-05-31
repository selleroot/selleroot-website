
import React from 'react';
import { Users2 } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const RelatedAccountAppealsPage = () => {
  return (
    <ServicePageLayout
      title="Related Account Appeals"
      description="Expert assistance in untangling falsely linked accounts or appealing legitimate secondary account suspensions."
      icon={Users2}
      path="/services/related-account-appeals"
      overview="Amazon automatically links accounts sharing data points like IP addresses, physical addresses, bank accounts, or user permissions. If one account is suspended, all linked accounts go down. We help sellers prove separation or successfully appeal the root account to restore the network."
      problemsList={[
        "Shared prep center addresses",
        "Logging in from public or shared Wi-Fi networks",
        "Former business partners or employees",
        "Family members operating separate businesses",
        "Using the same credit card or bank details"
      ]}
      howWeHelpList={[
        { title: "Linkage Identification", desc: "We help you identify the exact data points Amazon used to connect the accounts." },
        { title: "Separation Proof", desc: "Drafting affidavits and compiling corporate documents to prove the businesses operate independently." },
        { title: "Root Account Resolution", desc: "If the connection is valid, we formulate a strategy to reinstate the originally suspended account first." }
      ]}
      faqs={[
        { q: "I don't know the related account name. Can you help?", a: "Amazon usually provides a three-letter hint. We use a systematic review process of your employees, prep centers, and network to help deduce the linkage." },
        { q: "How do I prove the accounts are separate?", a: "We compile evidence like separate LLC formations, different utility bills, distinct lease agreements, and separate tax documents." },
        { q: "Can I have two Amazon accounts?", a: "Yes, if there is a legitimate business need (e.g., completely different brands) and they are in good standing, but strict separation of operations must be maintained." }
      ]}
    />
  );
};

export default RelatedAccountAppealsPage;
