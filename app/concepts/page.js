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
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title>Frontend System Design Concepts</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto">
              Explore the fundamental concepts and principles of frontend system design
              that will help you architect scalable and maintainable applications.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {concepts.map((concept, index) => (
              <Col xs={24} md={12} xl={8} key={index}>
                <Card 
                  className="h-full hover:shadow-lg transition-shadow card" 
                  title={
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{concept.icon}</span>
                      <span className="text-lg font-medium">{concept.title}</span>
                    </div>
                  }
                >
                  <Paragraph>{concept.description}</Paragraph>
                  <div className="mt-4">
                    <Title level={5}>Key Topics:</Title>
                    <ul className="list-disc pl-5">
                      {concept.topics.map((topic, i) => (
                        <li key={i} className="mb-1">{topic}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-20 text-center p-8 bg-muted rounded-lg">
            <Title level={3}>Ready to Dive Deeper?</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto mb-8">
              Explore our detailed guides, tutorials, and interactive examples to master each concept.
            </Paragraph>
            <Link href="/challenges">
              <Button type="primary" size="large">
                Try a Challenge
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
