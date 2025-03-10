'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Row, Col, Typography } from 'antd';
import ClientLayout from './layouts/ClientLayout';

const { Title, Paragraph } = Typography;

export default function Home() {
  const features = [
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
      title: 'Mock Interviews',
      description: 'Prepare for frontend system design interviews with simulated interview scenarios.',
      icon: '🎯',
      link: '/interviews'
    },
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Master Frontend System Design
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Learn to architect scalable, maintainable frontend applications using modern design principles.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/concepts">
                    <Button type="primary" size="large" className="bg-white text-blue-600 hover:bg-gray-100 border-none">
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="/challenges">
                    <Button size="large" ghost className="border-white text-white hover:bg-white/10">
                      Try a Challenge
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative w-full h-80">
                  <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg p-8 transform rotate-3">
                    <div className="w-full h-full border-2 border-white border-dashed rounded flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏗️</div>
                        <p className="text-xl">Frontend Architecture</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Title level={2}>Why Learn Frontend System Design?</Title>
              <Paragraph className="text-lg max-w-3xl mx-auto">
                Master the art of building scalable, maintainable frontend applications that can handle complex requirements and growing user bases.
              </Paragraph>
            </div>

            <Row gutter={[24, 24]}>
              {features.map((feature, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Link href={feature.link} className="block h-full">
                    <Card 
                      className="h-full hover:shadow-lg transition-shadow card" 
                      title={
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{feature.icon}</span>
                          <span>{feature.title}</span>
                        </div>
                      }
                    >
                      <p>{feature.description}</p>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-7xl mx-auto text-center">
            <Title level={2}>Ready to Become a Frontend System Design Expert?</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto mb-8">
              Join thousands of developers who are mastering frontend system design with our comprehensive learning platform.
            </Paragraph>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/dashboard">
                <Button type="primary" size="large">
                  Create Free Account
                </Button>
              </Link>
              <Link href="/concepts">
                <Button size="large" className="bg-background border border-solid border-gray-300 dark:border-gray-700">
                  Explore Concepts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
