'use client';

import { Typography, Card, Tabs, Row, Col, Button } from 'antd';
import Link from 'next/link';
import ClientLayout from '../layouts/ClientLayout';

const { Title, Paragraph } = Typography;

export default function ConceptsPage() {
  const concepts = [
    {
      title: 'Component-Driven Architecture',
      description: 'Learn how to build scalable UIs using a component-driven approach, breaking down complex interfaces into manageable, reusable pieces.',
      icon: '🧩',
      topics: [
        'Atomic Design Methodology',
        'Component Composition',
        'Stateful vs. Stateless Components',
        'Component Libraries & Design Systems'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Discover techniques to optimize frontend performance, reduce load times, and create smooth user experiences.',
      icon: '⚡',
      topics: [
        'Code Splitting & Lazy Loading',
        'Bundle Size Optimization',
        'Virtual DOM Performance',
        'Rendering Optimization Strategies',
        'Web Vitals & Performance Metrics'
      ]
    },
    {
      title: 'Micro Frontends',
      description: 'Explore the architecture pattern that extends microservices to the frontend, allowing teams to work independently.',
      icon: '🏗️',
      topics: [
        'Module Federation',
        'Integration Approaches',
        'Shared Dependencies Management',
        'Routing & Communication',
        'Team Autonomy & Coordination'
      ]
    },
    {
      title: 'Rendering Strategies',
      description: 'Compare different rendering approaches and understand when to use each for optimal user experience.',
      icon: '🖥️',
      topics: [
        'Client-Side Rendering (CSR)',
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'Incremental Static Regeneration (ISR)',
        'Islands Architecture'
      ]
    },
    {
      title: 'State Management',
      description: 'Learn about different state management solutions and patterns for complex frontend applications.',
      icon: '🔄',
      topics: [
        'Flux Architecture',
        'Redux, Recoil, Zustand',
        'Context API & Hooks',
        'Local vs. Global State',
        'State Persistence Strategies'
      ]
    },
    {
      title: 'Design Patterns',
      description: 'Explore common design patterns used in frontend development to solve recurring problems.',
      icon: '📐',
      topics: [
        'Compound Components',
        'Render Props Pattern',
        'Higher-Order Components',
        'Container/Presentational Pattern',
        'Observer Pattern'
      ]
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
              <span className="px-3 py-1 bg-primary-background/10 text-primary-background rounded-full text-sm font-medium">Core Learning</span>
            </div>
            <Title className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Frontend System Design Concepts
            </Title>
            <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-muted">
              Explore the fundamental concepts and principles of frontend system design
              that will help you architect scalable and maintainable applications.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]} className="px-2 md:px-0">
            {concepts.map((concept, index) => (
              <Col xs={24} sm={12} xl={8} key={index} className="mb-6 sm:mb-0">
                <Card 
                  className="h-full feature-card border-0 rounded-lg"
                  bodyStyle={{ padding: '24px' }}
                  bordered={false}
                >
                  <div className="feature-icon-wrapper mb-5">
                    <span className="text-2xl">{concept.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{concept.title}</h3>
                  <Paragraph className="text-sm sm:text-base text-muted">{concept.description}</Paragraph>
                  <div className="mt-4">
                    <Title level={5} className="text-sm sm:text-base mb-3">Key Topics:</Title>
                    <ul className="list-disc pl-4 md:pl-5 text-sm space-y-1">
                      {concept.topics.map((topic, i) => (
                        <li key={i} className="text-muted">{topic}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-16 md:mt-20 text-center p-8 bg-gradient rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="dot-pattern absolute inset-0"></div>
            </div>
            <div className="relative z-10">
              <Title level={3} className="text-xl sm:text-2xl md:text-3xl mb-4 text-white">
                Ready to Dive Deeper?
              </Title>
              <Paragraph className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 text-white/90">
                Explore our detailed guides, tutorials, and interactive examples to master each concept.
              </Paragraph>
              <Link href="/challenges">
                <Button 
                  type="primary" 
                  size="large" 
                  className="bg-white text-primary-background hover:bg-white/90 border-none px-6 py-3 h-auto rounded-full shadow-lg hover:shadow-xl"
                >
                  Try a Challenge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
