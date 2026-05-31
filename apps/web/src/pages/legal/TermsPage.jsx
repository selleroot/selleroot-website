
import React from 'react';
import { Helmet } from 'react-helmet';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Selleroot</title>
        <meta name="description" content="Selleroot terms and conditions - Terms of service for our marketplace consulting services." />
      </Helmet>

      <main className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Selleroot's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you do not have permission to access our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selleroot provides professional consulting services for Amazon and Walmart marketplace sellers. Our services include account reinstatement support, compliance guidance, documentation assistance, and strategic consulting for marketplace success.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">No Guarantees</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Important:</strong> Selleroot does not guarantee specific outcomes. Account reinstatement and appeal decisions are made solely by Amazon, Walmart, or the respective marketplace platforms. We provide professional consulting and documentation support to optimize your chances of success, but final decisions rest with the marketplace.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Independent Consultant</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selleroot is an independent consulting company. We are not affiliated with, endorsed by, or operated by Amazon, Walmart, or any marketplace platform. Our services represent professional consulting, not official representation before any marketplace.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information about your situation</li>
              <li>Cooperate with our consultation process</li>
              <li>Implement recommended changes in good faith</li>
              <li>Not misrepresent your situation or provide false documentation</li>
              <li>Understand that ultimate marketplace decisions are beyond our control</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality regarding your account information and case details. We will not share your information with third parties except as necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Selleroot shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or inability to access the marketplace platforms. Our total liability shall not exceed the fees paid for our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms will be communicated during the consultation process. Fees are due as agreed upon before services are rendered. Refund policies vary by service type and will be communicated in your service agreement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on our website, including text, graphics, logos, and software, is the property of Selleroot and protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms, contact us at:
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

export default TermsPage;
