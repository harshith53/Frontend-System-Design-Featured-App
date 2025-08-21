'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Row, Col, Typography } from 'antd';
import ClientLayout from './layouts/ClientLayout';

const { Title, Paragraph } = Typography;

export default function Home() {
  const features = [
    {
      title: 'Frontend UI Features',
      description: 'Explore common frontend UI components and features that you can use to build interactive and user-friendly web applications.',
      icon: '🎨',
      link: '/features'
    },
    {
      title: 'System Design Concepts',
      description: 'Learn core frontend system design principles and patterns for building scalable applications.',
      icon: '💡',
      link: '/concepts'
    },
    {
      title: 'Real-world Case Studies',
      description: 'Explore how major tech companies architect their frontend systems with detailed analysis.',
      icon: '🏛️',
      link: '/case-studies'
    },
    {
      title: 'Interactive Challenges',
      description: 'Practice your system design skills with hands-on challenges and exercises.',
      icon: '🧩',
      link: '/challenges'
    },
    {
      title: 'AI Assistant',
      description: 'Get instant answers to your questions with our AI assistant.',
      icon: '🤖',
      link: '/ai'
    },
    // {
    //   title: 'Mock Interviews',
    //   description: 'Prepare for frontend system design interviews with simulated interview scenarios.',
    //   icon: '🎯',
    //   link: '/interviews'
    // },
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero Section with improved gradient */}
        <section className="bg-gradient relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient opacity-90 z-0"></div>
          <div className="absolute inset-0 opacity-20 z-0">
            <div className="dot-pattern absolute inset-0"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                  Master Frontend System Design
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 mx-auto md:mx-0 max-w-xl text-white/90">
                  Learn to architect scalable, maintainable frontend applications using modern design principles.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="/concepts">
                    <Button 
                      type="primary" 
                      size="large" 
                      className="bg-white text-primary-background hover:bg-gray-100 border-none px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl focus-glow"
                    >
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="/challenges">
                    <Button 
                      size="large" 
                      ghost 
                      className="border-white text-white hover:bg-white/10 px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl focus-glow"
                    >
                      Try a Challenge
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative w-full h-78 lg:h-80">
                  <div className="absolute inset-0 bg-opacity-10 rounded-lg p-6 lg:p-8 transform rotate-3  ">
                        <Image src="/frontendLogo.png" alt="Frontend System Design" width={500} height={500} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with enhanced cards */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="wave-pattern absolute inset-0"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <Title level={2} className="text-2xl sm:text-3xl md:text-4xl mb-4">
                Why Learn Frontend System Design?
              </Title>
              <Paragraph className="text-base sm:text-lg max-w-3xl mx-auto text-muted">
                Master the art of building scalable, maintainable frontend applications that can handle complex requirements and growing user bases.
              </Paragraph>
            </div>

            <Row gutter={[24, 24]} className="px-2 md:px-0">
              {features.map((feature, index) => (
                <Col xs={24} sm={12} lg={6} key={index} className="mb-6 sm:mb-0">
                  <Link href={feature.link} className="block h-full">
                    <Card 
                      className="h-full feature-card border-0 rounded-lg"
                      styles={{ 
                        body: { padding: '24px' },
                        header: { border: 'none' },
                        body: { padding: '24px', border: 'none' }
                      }}
                    >
                      <div className="feature-icon-wrapper mb-5">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted">{feature.description}</p>
                      <div className="mt-4 flex items-center">
                        <span className="text-primary-background text-sm font-medium">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* CTA Section with improved styling */}
        <section className="py-16 sm:py-20 md:py-24 px-4 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="dot-pattern absolute inset-0"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <Title level={2} className="text-2xl sm:text-3xl md:text-4xl mb-4">
                Ready to Become a Frontend System Design Expert?
              </Title>
              <Paragraph className="text-base sm:text-lg mb-8 text-muted">
                Join thousands of developers who are mastering frontend system design with our comprehensive learning platform.
              </Paragraph>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/dashboard">
                  <Button type="primary" size="large" className="px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl">
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/concepts">
                  <Button 
                    size="large" 
                    className="bg-background border border-solid border-primary-background text-primary-background hover:bg-primary-background/5 px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl"
                  >
                    Explore Concepts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
