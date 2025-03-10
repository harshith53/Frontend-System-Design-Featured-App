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
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title>Frontend System Design Case Studies</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto">
              Dive into real-world frontend architecture case studies from leading tech companies.
              Learn how they tackle complex challenges and scale their applications.
            </Paragraph>
          </div>

          <Row gutter={[24, 32]}>
            {caseStudies.map((study, index) => (
              <Col xs={24} md={12} key={index}>
                <Link href={`/case-studies/${study.slug}`}>
                  <Card 
                    hoverable 
                    className="h-full card"
                    cover={
                      <div className="p-4 bg-muted h-48 flex items-center justify-center">
                        <div className="text-4xl font-bold text-center">{study.company}</div>
                      </div>
                    }
                  >
                    <Title level={4}>{study.title}</Title>
                    <Paragraph>{study.description}</Paragraph>
                    <Divider />
                    <div className="flex flex-wrap gap-2">
                      {study.topics.map((topic, i) => (
                        <Tag key={i} color="blue">{topic}</Tag>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="mt-16 p-8 bg-muted rounded-lg text-center">
            <Title level={3}>Want to see a specific case study?</Title>
            <Paragraph className="text-lg mb-6">
              We&apos;re constantly adding new case studies. Let us know which company&apos;s frontend architecture you&apos;d like to learn about next.
            </Paragraph>
            <Link href="/forum">
              <Button type="primary" size="large">
                Request a Case Study
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
