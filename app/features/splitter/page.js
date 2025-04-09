'use client';

import { useState } from 'react';
import ClientLayout from '../../layouts/ClientLayout';
import { Typography, Splitter, Card, Input, Steps, Tabs } from 'antd';
import { SearchOutlined, CodeOutlined, BulbOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

// Autocomplete Component for the left panel
const AutocompleteComponent = () => {
  const suggestions = [
    "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", 
    "Redux", "GraphQL", "Webpack", "Babel", "ESLint", 
    "Jest", "Cypress", "Material UI", "Styled Components", "CSS Modules"
  ];
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    
    if (value.trim() === '') {
      setFiltered([]);
      setShowSuggestions(false);
      return;
    }
    
    const newFiltered = suggestions.filter(
      (s) => s.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(newFiltered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="p-6 h-full overflow-auto">
      <Title level={4}>Try Autocomplete</Title>
      <Paragraph>Type a frontend technology name:</Paragraph>
      
      <div className="relative w-full max-w-md mx-auto mt-6">
        <Input
          size="large"
          value={input}
          onChange={handleInputChange}
          placeholder="Start typing to search..."
          prefix={<SearchOutlined />}
          className="w-full"
        />
        {showSuggestions && (
          <Card 
            className="absolute w-full mt-1 z-10 p-0 max-h-64 overflow-auto"
            bodyStyle={{ padding: '0' }}
          >
            {filtered.length > 0 ? (
              <ul className="divide-y">
                {filtered.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="px-4 py-2 hover:bg-primary-background/10 cursor-pointer transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-2 text-muted">No matches found</div>
            )}
          </Card>
        )}
      </div>
      
      <div className="mt-8">
        <Title level={5}>How it works:</Title>
        <Paragraph>
          As you type, the component filters through a predefined list of frontend technologies
          and displays matching results in real-time.
        </Paragraph>
      </div>
    </div>
  );
};

// Implementation Steps Component for the right panel
const ImplementationSteps = () => {
  return (
    <div className="p-6 h-full overflow-auto">
      <Title level={4}>Autocomplete Implementation</Title>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: '1',
            label: (
              <span>
                <BulbOutlined /> High Level Design
              </span>
            ),
            children: (
              <div className="p-2">
                <Steps
                  direction="vertical"
                  current={4}
                  items={[
                    {
                      title: 'Requirements Analysis',
                      description: 'Identify user needs and functionality requirements for the autocomplete feature',
                    },
                    {
                      title: 'Component Architecture',
                      description: 'Design the component structure with state management for input and suggestions',
                    },
                    {
                      title: 'UI/UX Design',
                      description: 'Create a clean, accessible interface with proper keyboard navigation',
                    },
                    {
                      title: 'Performance Considerations',
                      description: 'Plan for throttling/debouncing to prevent excessive filtering on each keystroke',
                    },
                    {
                      title: 'Implementation Plan',
                      description: 'Define the development roadmap with proper testing strategy',
                    },
                  ]}
                />
              </div>
            ),
          },
          {
            key: '2',
            label: (
              <span>
                <DeploymentUnitOutlined /> Low Level Design
              </span>
            ),
            children: (
              <div className="space-y-4 p-2">
                <div>
                  <Title level={5}>State Management</Title>
                  <Paragraph>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Input state: Tracks user&apos;s current input</li>
                      <li>Filtered suggestions state: Stores matching items</li>
                      <li>Show suggestions state: Controls dropdown visibility</li>
                    </ul>
                  </Paragraph>
                </div>
                
                <div>
                  <Title level={5}>Event Handlers</Title>
                  <Paragraph>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>handleInputChange: Processes user input and filters suggestions</li>
                      <li>handleSuggestionClick: Handles selection from dropdown</li>
                      <li>handleKeyDown: Manages keyboard navigation (not implemented in demo)</li>
                    </ul>
                  </Paragraph>
                </div>
                
                <div>
                  <Title level={5}>UI Components</Title>
                  <Paragraph>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Input field: Primary user interaction point</li>
                      <li>Suggestions container: Dropdown with filtered options</li>
                      <li>Suggestion items: Individual selectable options</li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            ),
          },
          {
            key: '3',
            label: (
              <span>
                <CodeOutlined /> Code Implementation
              </span>
            ),
            children: (
              <div className="p-2">
                <Title level={5}>Key Code Snippets</Title>
                
                <div>
                  <Text strong>State initialization:</Text>
                  <pre className="bg-card-background p-3 rounded-md overflow-x-auto mt-2">
                    <code>{`const [input, setInput] = useState("");
const [filtered, setFiltered] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);`}</code>
                  </pre>
                </div>
                
                <div className="mt-4">
                  <Text strong>Input handling function:</Text>
                  <pre className="bg-card-background p-3 rounded-md overflow-x-auto mt-2">
                    <code>{`const handleInputChange = (e) => {
  const value = e.target.value;
  setInput(value);
  
  if (value.trim() === '') {
    setFiltered([]);
    setShowSuggestions(false);
    return;
  }
  
  const newFiltered = suggestions.filter(
    (s) => s.toLowerCase().includes(value.toLowerCase())
  );
  setFiltered(newFiltered);
  setShowSuggestions(true);
};`}</code>
                  </pre>
                </div>
                
                <div className="mt-4">
                  <Text strong>Suggestion selection:</Text>
                  <pre className="bg-card-background p-3 rounded-md overflow-x-auto mt-2">
                    <code>{`const handleSuggestionClick = (suggestion) => {
  setInput(suggestion);
  setShowSuggestions(false);
};`}</code>
                  </pre>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

// Splitter Demo Page
export default function SplitterPage() {
  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        <Title level={2}>Ant Design Splitter Feature</Title>
        <Paragraph className="text-lg mb-8">
          Interactive splitter that allows you to view the autocomplete feature alongside its implementation details.
          Drag the divider to adjust the panels.
        </Paragraph>
        
        {/* Use Ant Design Splitter */}
        <div className="bg-card-background rounded-lg overflow-hidden border border-card-border">
          <Splitter 
            style={{ minHeight: '650px' }}
            defaultSplit="50%"
          >
            <Splitter.Panel>
              <AutocompleteComponent />
            </Splitter.Panel>
            <Splitter.Panel>
              <ImplementationSteps />
            </Splitter.Panel>
          </Splitter>
        </div>
        
        <div className="mt-8">
          <Title level={4}>About the Splitter</Title>
          <Paragraph>
            The Splitter component is an Ant Design feature that allows you to create resizable panels. 
            It&apos;s perfect for side-by-side comparisons, code editors, or any interface where users 
            need to adjust the space allocated to different sections of content.
          </Paragraph>
          <Paragraph>
            Key features:
          </Paragraph>
          <ul className="list-disc pl-8 space-y-2 mt-2">
            <li>Resizable panels with intuitive drag handles</li>
            <li>Support for both horizontal and vertical splitting</li>
            <li>Configurable minimum and maximum sizes for panels</li>
            <li>Optional collapse functionality for quick panel expansion/collapse</li>
            <li>Fully customizable styling to match your application&apos;s design</li>
          </ul>
        </div>
      </div>
    </ClientLayout>
  );
} 