'use client';

import { Typography, Card, Tag, Progress, Row, Col, Badge, Button } from 'antd';
import Link from 'next/link';
import ClientLayout from '../layouts/ClientLayout';

const { Title, Paragraph } = Typography;

export default function ChallengesPage() {
  const challenges = [
    {
      title: 'E-commerce Product Page',
      description: 'Design a scalable product details page for an e-commerce site with support for product variants, personalized recommendations, and real-time inventory updates.',
      difficulty: 'Beginner',
      timeEstimate: '1-2 hours',
      tags: ['Component Architecture', 'State Management', 'API Integration'],
      slug: 'ecommerce-product-page'
    },
    {
      title: 'Data Dashboard',
      description: 'Create a performant dashboard with multiple data visualizations, filtering capabilities, and real-time updates.',
      difficulty: 'Intermediate',
      timeEstimate: '2-3 hours',
      tags: ['Performance Optimization', 'Data Visualization', 'Real-time Updates'],
      slug: 'data-dashboard'
    },
    {
      title: 'Multi-step Form Wizard',
      description: 'Design a complex form wizard with validation, conditional fields, and ability to save progress.',
      difficulty: 'Intermediate',
      timeEstimate: '2-3 hours',
      tags: ['Form Design', 'State Management', 'UX Patterns'],
      slug: 'multi-step-form'
    },
    {
      title: 'Social Media Feed',
      description: 'Build a social media feed with infinite scrolling, real-time updates, and content engagement features.',
      difficulty: 'Advanced',
      timeEstimate: '3-4 hours',
      tags: ['Virtualization', 'Real-time Updates', 'Engagement Metrics'],
      slug: 'social-media-feed'
    },
    {
      title: 'Collaborative Document Editor',
      description: 'Design a collaborative document editor with real-time synchronization between multiple users.',
      difficulty: 'Advanced',
      timeEstimate: '4-5 hours',
      tags: ['Real-time Collaboration', 'Conflict Resolution', 'Rich Text Editing'],
      slug: 'collaborative-editor'
    },
    {
      title: 'Design System Implementation',
      description: 'Create a design system with reusable components, theming support, and documentation.',
      difficulty: 'Expert',
      timeEstimate: '5+ hours',
      tags: ['Component Library', 'Theming', 'Documentation'],
      slug: 'design-system'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'green';
      case 'Intermediate': return 'blue';
      case 'Advanced': return 'orange';
      case 'Expert': return 'red';
      default: return 'blue';
    }
  };

  return (
    <ClientLayout>
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title>Frontend System Design Challenges</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto">
              Put your frontend system design skills to the test with these real-world challenges.
              Each challenge comes with requirements, constraints, and evaluation criteria.
            </Paragraph>
          </div>

          <div className="mb-12">
            <Title level={3}>Your Progress</Title>
            <div className="card p-6 shadow-sm rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                  <Title level={4} className="m-0">0/6 Challenges Completed</Title>
                  <Paragraph className="text-muted m-0">Complete challenges to track your progress</Paragraph>
                </div>
                <Link href="/dashboard">
                  <Button type="primary">View Dashboard</Button>
                </Link>
              </div>
              <Progress percent={0} showInfo={false} />
            </div>
          </div>

          <Title level={3} className="mb-6">Available Challenges</Title>
          <Row gutter={[24, 24]}>
            {challenges.map((challenge, index) => (
              <Col xs={24} md={12} xl={8} key={index}>
                <Link href={`/challenges/${challenge.slug}`}>
                  <Card 
                    hoverable
                    className="h-full card"
                    title={
                      <div>
                        <Badge color={getDifficultyColor(challenge.difficulty)} text={challenge.difficulty} className="mb-2" />
                        <Title level={4} className="m-0">{challenge.title}</Title>
                      </div>
                    }
                  >
                    <Paragraph className="mb-4">{challenge.description}</Paragraph>
                    <Paragraph className="text-muted">
                      Estimated time: {challenge.timeEstimate}
                    </Paragraph>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {challenge.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="mt-16 text-center p-8 bg-muted rounded-lg">
            <Title level={3}>Ready for a Challenge?</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto mb-8">
              Start with a beginner challenge and work your way up to expert level. 
              Each completed challenge will help you build your frontend system design portfolio.
            </Paragraph>
            <Link href="/challenges/ecommerce-product-page">
              <Button type="primary" size="large">
                Start First Challenge
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
