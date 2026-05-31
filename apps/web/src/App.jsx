
import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';

import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton.jsx';
import { Loader2 } from 'lucide-react';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

// Lazy load services
const AccountReinstatementPage = lazy(() => import('./pages/services/AccountReinstatementPage.jsx'));
const Section3AppealsPage = lazy(() => import('./pages/services/Section3AppealsPage.jsx'));
const RelatedAccountAppealsPage = lazy(() => import('./pages/services/RelatedAccountAppealsPage.jsx'));
const VideoVerificationPage = lazy(() => import('./pages/services/VideoVerificationPage.jsx'));
const FundsReleasePage = lazy(() => import('./pages/services/FundsReleasePage.jsx'));
const ComplianceDocumentationPage = lazy(() => import('./pages/services/ComplianceDocumentationPage.jsx'));
const AccountHealthPage = lazy(() => import('./pages/services/AccountHealthPage.jsx'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <Loader2 className="w-8 h-8 text-primary animate-spin" />
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              <Route path="/services/account-reinstatement" element={<AccountReinstatementPage />} />
              <Route path="/services/section-3-appeals" element={<Section3AppealsPage />} />
              <Route path="/services/related-account-appeals" element={<RelatedAccountAppealsPage />} />
              <Route path="/services/video-verification" element={<VideoVerificationPage />} />
              <Route path="/services/funds-release" element={<FundsReleasePage />} />
              <Route path="/services/compliance-documentation" element={<ComplianceDocumentationPage />} />
              <Route path="/services/account-health" element={<AccountHealthPage />} />
              
              <Route path="*" element={
                <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist.</p>
                  <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Back to Home
                  </a>
                </div>
              } />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
      <Toaster position="top-center" richColors />
    </Router>
  );
};

export default App;
