
import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Selleroot</title>
        <meta name="description" content="Selleroot privacy policy - How we collect, use, and protect your personal information." />
      </Helmet>

      <main className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Selleroot ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and business information you provide when contacting us or scheduling consultations.</li>
              <li><strong>Account Information:</strong> Details related to your marketplace accounts when you engage our services for account recovery or compliance assistance.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
              <li><strong>Device Information:</strong> Browser type, IP address, and device identifiers.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our consulting services</li>
              <li>Communicate with you about our services and your cases</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and updates</li>
              <li>Improve our website and services based on user feedback</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand that the information you share with us regarding your marketplace accounts is highly sensitive. We maintain strict confidentiality protocols and do not share your account details or case information with third parties unless you authorize us to do so or as required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@selleroot.com.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
