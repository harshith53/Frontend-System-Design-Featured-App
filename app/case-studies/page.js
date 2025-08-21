'use client';

import { Typography, Card, Divider, Tag, Row, Col, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import ClientLayout from '../layouts/ClientLayout';

const { Title, Paragraph } = Typography;

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Netflix Frontend Architecture',
      company: 'Netflix',
      description: 'How Netflix architected their frontend to handle millions of concurrent users with different devices and network conditions.',
      image: '/netflix.png',
      topics: ['Micro Frontends', 'Performance Optimization', 'A/B Testing'],
      slug: 'netflix-frontend-architecture'
    },
    {
      title: 'Airbnb Component Design System',
      company: 'Airbnb',
      description: 'Airbnb\'s approach to building a scalable design system that supports multiple platforms and teams.',
      image: '/airbnb.png',
      topics: ['Design Systems', 'Component Library', 'Accessibility'],
      slug: 'airbnb-component-design-system'
    },
    {
      title: 'Facebook React Architecture',
      company: 'Facebook',
      description: 'How Facebook uses React to build and scale their web application with billions of users.',
      image: '/facebook.png',
      topics: ['React', 'GraphQL', 'Code Splitting'],
      slug: 'facebook-react-architecture'
    },
    {
      title: 'Uber Mobile Web Platform',
      company: 'Uber',
      description: 'Uber\'s frontend architecture for their mobile web platform handling real-time updates and offline support.',
      image: '/uber.png',
      topics: ['Progressive Web Apps', 'Real-time Updates', 'Offline Support'],
      slug: 'uber-mobile-web-platform'
    },
    {
      title: 'Spotify Web Player Architecture',
      company: 'Spotify',
      description: 'How Spotify built a responsive, efficient web player with complex state management requirements.',
      image: '/spotify.png',
      topics: ['Media Streaming', 'State Management', 'WebAudio API'],
      slug: 'spotify-web-player-architecture'
    },
    {
      title: 'Twitter Front-End Architecture',
      company: 'Twitter',
      description: 'Twitter\'s approach to real-time updates, feed rendering, and performance optimization.',
      image: '/twitter.png',
      topics: ['Real-time Updates', 'Virtual List', 'Service Workers'],
      slug: 'twitter-frontend-architecture'
    }
  ];

  return (
    <ClientLayout>
      <div className="py-8 sm:py-10 md:py-12 px-4 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="wave-pattern absolute inset-0"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-2">
              <span className="px-3 py-1 bg-primary-background/10 text-primary-background rounded-full text-sm font-medium">Industry Examples</span>
            </div>
            <Title className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Frontend System Design Case Studies
            </Title>
            <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-muted">
              Dive into real-world frontend architecture case studies from leading tech companies.
              Learn how they tackle complex challenges and scale their applications.
            </Paragraph>
          </div>

          <Row gutter={[24, 32]} className="px-2 md:px-0">
            {caseStudies.map((study, index) => (
              <Col xs={24} sm={12} key={index} className="mb-6 sm:mb-0">
                {/* <Link href={`/case-studies/${study.slug}`} className="block h-full"> */}
                  <Card 
                    hoverable 
                    className="h-full feature-card border-0 rounded-lg overflow-hidden"
                    styles={{ 
                      body: { padding: '0' },
                      header: { border: 'none' },
                      body: { padding: '0', border: 'none' }
                    }}
                  >
                    <div className="bg-gradient p-6 sm:p-8 h-40 sm:h-44 flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-20">
                        <div className="dot-pattern absolute inset-0"></div>
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-white relative z-10">{study.company}</div>
                    </div>
                    <div className="p-6">
                      <Title level={4} className="text-base sm:text-lg mb-3">{study.title}</Title>
                      <Paragraph className="text-sm text-muted mb-4">{study.description}</Paragraph>
                      <Divider className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {study.topics.map((topic, i) => (
                          <Tag key={i} className="text-xs px-2 py-1 rounded-full custom-tag">{topic}</Tag>
                        ))}
                      </div>
                    </div>
                  </Card>
                {/* </Link> */}
              </Col>
            ))}
          </Row>

          <div className="mt-16 md:mt-20 text-center p-8 bg-gradient rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="dot-pattern absolute inset-0"></div>
            </div>
            <div className="relative z-10">
              <Title level={3} className="text-xl sm:text-2xl md:text-3xl mb-4 text-white">
                Want to see a specific case study?
              </Title>
              <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 text-white/90">
                We&apos;re constantly adding new case studies. Let us know which company&apos;s frontend architecture you&apos;d like to learn about next.
              </Paragraph>
              {/* <Link href="/case-studies/forum"> */}
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-white text-primary-background hover:bg-white/90 border-none px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl"
                >
                  Request a Case Study
                </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
