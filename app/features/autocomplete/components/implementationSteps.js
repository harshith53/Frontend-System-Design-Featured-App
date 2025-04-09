'use client';

import { Typography, Card, Tabs, Steps, theme } from 'antd';
import { CodeOutlined, BulbOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

// Implementation Steps Component
const ImplementationSteps = () => {
  const { token } = theme.useToken();
  
  return (
    <Card className="feature-card w-full h-full">
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
    </Card>
  );
};

export default ImplementationSteps; 