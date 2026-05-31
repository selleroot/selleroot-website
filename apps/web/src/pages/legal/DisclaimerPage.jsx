
import React from 'react';
import { Helmet } from 'react-helmet';

const DisclaimerPage = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Selleroot</title>
        <meta name="description" content="Selleroot disclaimer - Important information about our consulting services and limitations." />
      </Helmet>

      <main className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mt-8 mb-4">Independent Consulting Firm</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Selleroot is an independent consulting company and is not affiliated with, endorsed by, or operated by Amazon, Walmart, or any marketplace platform.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We provide professional consulting services to help sellers navigate marketplace policies and compliance requirements. Our services do not guarantee specific outcomes, as final decisions regarding account status, reinstatement, and policy enforcement are made solely by the respective marketplace platforms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">No Guarantee of Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selleroot does not guarantee account reinstatement, appeal approval, or any specific outcome from using our services. Appeal decisions and account status determinations are made exclusively by Amazon, Walmart, or the relevant marketplace. We provide professional support, documentation assistance, and strategic guidance to optimize your chances of success, but we cannot control or predict final platform decisions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information Accuracy</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date information about marketplace policies and best practices, policies and requirements can change frequently. We recommend verifying current policies directly with the relevant marketplace. The information on our website and provided during consultations is for general guidance purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Professional Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services constitute professional consulting and documentation support. We are not attorneys and do not provide legal advice. If you require legal representation, please consult a qualified attorney.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Success in any appeal or reinstatement process requires accurate information and genuine corrective actions from the seller. We advise based on the information you provide. Misrepresentation of facts, failure to implement recommended changes, or non-compliance with marketplace policies during or after our engagement may affect outcomes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selleroot shall not be held liable for any damages, losses, or negative outcomes resulting from:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Marketplace decisions regarding your account</li>
              <li>Delays in appeal processing by platforms</li>
              <li>Changes to marketplace policies after our consultation</li>
              <li>Actions taken or not taken by the client</li>
              <li>Information provided by the client that is inaccurate or incomplete</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Website Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              The content on our website, including blog posts, guides, and educational materials, represents our professional understanding and interpretation of marketplace policies at the time of publication. This content should not be considered official policy statements of any marketplace.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or opinions expressed on these external sites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about this disclaimer, contact us at:
            </p>
            <ul className="list-none text-muted-foreground space-y-2">
              <li>Email: info@selleroot.com</li>
              <li>WhatsApp: +91 81781 21217</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default DisclaimerPage;
