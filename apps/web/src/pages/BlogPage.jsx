
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animationVariants.js';
import OptimizedImage from '@/components/OptimizedImage.jsx';

const BlogPage = () => {
  const articles = [
    {
      title: 'Amazon Account Reinstatement Guide',
      description: 'A comprehensive guide to understanding Amazon account suspensions and the reinstatement process.',
      path: '/blog/amazon-reinstatement-guide',
      image: 'https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2',
      readTime: '12 min',
      category: 'Amazon'
    },
    {
      title: 'Section 3 Appeals: Complete Guide',
      description: 'Everything you need to know about appealing Section 3 deactivations on Amazon.',
      path: '/blog/section-3-appeals-guide',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7',
      readTime: '15 min',
      category: 'Amazon'
    },
    {
      title: 'Video Verification Preparation',
      description: 'How to prepare for Amazon\'s live video verification interviews.',
      path: '/blog/video-verification-prep',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
      readTime: '10 min',
      category: 'Amazon'
    },
    {
      title: 'Related Account Appeals Strategy',
      description: 'Understanding and appealing linked account suspensions on Amazon.',
      path: '/blog/related-account-appeals',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c118',
      readTime: '11 min',
      category: 'Amazon'
    },
    {
      title: 'Compliance Documentation Best Practices',
      description: 'How to prepare invoices and documentation that meet marketplace requirements.',
      path: '/blog/compliance-documentation-best-practices',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      readTime: '9 min',
      category: 'Compliance'
    },
    {
      title: 'Account Health Management',
      description: 'Proactive strategies to maintain good account health and prevent suspensions.',
      path: '/blog/account-health-management',
      image: 'https://images.unsplash.com/photo-1504868584819-f898834b6f7a',
      readTime: '8 min',
      category: 'Management'
    },
    {
      title: 'Walmart Suspension Appeals',
      description: 'How to navigate Walmart Marketplace suspension appeals and reinstatement.',
      path: '/blog/walmart-suspension-appeals',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed440c9cd',
      readTime: '10 min',
      category: 'Walmart'
    },
    {
      title: 'Walmart Marketplace Compliance',
      description: 'Understanding Walmart\'s policies and maintaining compliance on the platform.',
      path: '/blog/walmart-marketplace-compliance',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
      readTime: '9 min',
      category: 'Walmart'
    }
  ];

  const categories = ['All', 'Amazon', 'Walmart', 'Compliance', 'Management'];

  return (
    <>
      <Helmet>
        <title>Resources & Blog | Selleroot</title>
        <meta name="description" content="Expert guides, best practices, and insights for Amazon and Walmart sellers. Learn about account reinstatement, compliance, and marketplace success." />
        <link rel="canonical" href="https://selleroot.com/blog" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resources & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guides and best practices to help you navigate marketplace challenges and build a sustainable business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {articles.map((article, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-border/50 rounded-2xl overflow-hidden group">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <OptimizedImage
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        <Link to={article.path}>{article.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} read
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-4 mt-auto">
                      <Link
                        to={article.path}
                        className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
