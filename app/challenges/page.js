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
      <div className="py-8 sm:py-10 md:py-12 px-4 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="wave-pattern absolute inset-0"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-2">
              <span className="px-3 py-1 bg-primary-background/10 text-primary-background rounded-full text-sm font-medium">Apply Your Skills</span>
            </div>
            <Title className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Frontend System Design Challenges
            </Title>
            <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-muted">
              Put your frontend system design skills to the test with these real-world challenges.
              Each challenge comes with requirements, constraints, and evaluation criteria.
            </Paragraph>
          </div>

          <div className="mb-10 md:mb-14">
            <Title level={3} className="text-xl sm:text-2xl mb-4 md:mb-6 flex items-center">
              <span className="mr-2">📊</span> Your Progress
            </Title>
            <div className="feature-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
                <div>
                  <Title level={4} className="m-0 text-base sm:text-lg md:text-xl mb-1">0/6 Challenges Completed</Title>
                  <Paragraph className="text-muted m-0 text-xs sm:text-sm">Complete challenges to track your progress</Paragraph>
                </div>
                <div className="mt-4 sm:mt-0">
                  <Link href="/dashboard">
                    <Button type="primary" className="px-5 py-2 h-auto rounded-full">View Dashboard</Button>
                  </Link>
                </div>
              </div>
              <Progress percent={0} showInfo={false} strokeColor={{
                '0%': 'var(--gradient-start)',
                '100%': 'var(--gradient-end)',
              }} />
            </div>
          </div>

          <Title level={3} className="text-xl sm:text-2xl mb-6 md:mb-8 flex items-center">
            <span className="mr-2">🧩</span> Available Challenges
          </Title>
          <Row gutter={[24, 24]} className="px-2 md:px-0">
            {challenges.map((challenge, index) => (
              <Col xs={24} sm={12} xl={8} key={index} className="mb-6 sm:mb-0">
                <Link href={`/challenges/${challenge.slug}`} className="block h-full">
                  <Card 
                    hoverable
                    className="h-full feature-card"
                    bordered={false}
                    bodyStyle={{ padding: '24px' }}
                  >
                    <Badge color={getDifficultyColor(challenge.difficulty)} text={challenge.difficulty} className="mb-4 text-xs sm:text-sm" />
                    <Title level={4} className="m-0 text-base sm:text-lg mb-3">{challenge.title}</Title>
                    <Paragraph className="text-sm text-muted mb-4">{challenge.description}</Paragraph>
                    <div className="flex items-center text-muted text-xs sm:text-sm mb-4">
                      <span className="mr-1">⏱️</span> Estimated time: {challenge.timeEstimate}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {challenge.tags.map((tag, i) => (
                        <Tag key={i} className="text-xs mb-1 px-2 py-1 rounded-full custom-tag">{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="mt-16 md:mt-20 text-center p-8 bg-gradient rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="dot-pattern absolute inset-0"></div>
            </div>
            <div className="relative z-10">
              <Title level={3} className="text-xl sm:text-2xl md:text-3xl mb-4 text-white">
                Ready for a Challenge?
              </Title>
              <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 text-white/90">
                Start with a beginner challenge and work your way up to expert level. 
                Each completed challenge will help you build your frontend system design portfolio.
              </Paragraph>
              <Link href="/challenges/ecommerce-product-page">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-white text-primary-background hover:bg-white/90 border-none px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl"
                >
                  Start First Challenge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
