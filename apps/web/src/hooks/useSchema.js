
import { useMemo } from 'react';

export const useSchema = () => {
  const baseUrl = 'https://selleroot.com';
  
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Selleroot',
    url: baseUrl,
    logo: 'https://horizons-cdn.hostinger.com/b4833c16-8b03-4363-96fb-f8b7820bfb14/9135cab417c9268889cd0f43fb4fac2b.png',
    description: 'Professional Amazon Seller Reinstatement and Compliance Consulting.',
    sameAs: [
      'https://www.linkedin.com/company/selleroot',
      'https://www.facebook.com/selleroot',
      'https://www.instagram.com/selleroot',
      'https://www.youtube.com/@selleroot'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@selleroot.com',
      availableLanguage: ['English']
    }
  });

  const getServiceSchema = (serviceName, description, path) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Selleroot'
    },
    description: description,
    url: `${baseUrl}${path}`
  });

  const getFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });

  const getBreadcrumbSchema = (crumbs) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.path}`
    }))
  });

  return {
    getOrganizationSchema,
    getServiceSchema,
    getFAQSchema,
    getBreadcrumbSchema
  };
};
