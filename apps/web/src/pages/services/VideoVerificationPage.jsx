
import React from 'react';
import { Video } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const VideoVerificationPage = () => {
  return (
    <ServicePageLayout
      title="Video Verification Support"
      description="Comprehensive preparation for Amazon's live identity and supply chain video interviews."
      icon={Video}
      path="/services/video-verification"
      overview="Amazon increasingly relies on live video interviews to verify seller identities and assess supply chain legitimacy. These interviews can be intimidating, and incorrect answers can lead to permanent deactivation. We provide mock interviews, document review, and strategic preparation."
      problemsList={[
        "Identity verification failure",
        "Supply chain scrutiny",
        "Language barriers and miscommunication",
        "Unprepared documentation during the call",
        "Inconsistent answers regarding business operations"
      ]}
      howWeHelpList={[
        { title: "Document Pre-Check", desc: "We ensure your IDs, bank statements, and invoices are legible, valid, and match Seller Central perfectly." },
        { title: "Mock Interviews", desc: "We conduct practice sessions asking the exact types of questions Amazon representatives use." },
        { title: "Operational Briefing", desc: "Ensuring you can clearly articulate your business model, supplier relationships, and logistics." }
      ]}
      faqs={[
        { q: "What happens during the video call?", a: "An Amazon associate will ask you to show your face alongside your government ID, display physical documents, and answer questions about your suppliers and business practices." },
        { q: "How long does the interview take?", a: "Interviews typically last between 20 to 45 minutes." },
        { q: "What if I fail the first video verification?", a: "You may get a second chance, but it's crucial to prepare thoroughly with our team to address the specific discrepancies Amazon noted in the first call." }
      ]}
    />
  );
};

export default VideoVerificationPage;
