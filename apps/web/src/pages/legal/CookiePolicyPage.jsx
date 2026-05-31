
import React from 'react';
import { Helmet } from 'react-helmet';

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Selleroot</title>
        <meta name="description" content="Selleroot cookie policy - Information about how we use cookies on our website." />
      </Helmet>

      <main className="pt-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy explains how Selleroot uses cookies and similar technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and understand how you interact with the site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as session management and security.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve user experience.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings to provide enhanced functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services that set their own cookies, such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Google Analytics for website usage analysis</li>
              <li>Calendly for scheduling appointments</li>
              <li>Social media platforms for sharing functionality</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific sites</li>
              <li>Block all cookies from all sites</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled without affecting website functionality.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the updated policy on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about our use of cookies, contact us at:
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

export default CookiePolicyPage;
