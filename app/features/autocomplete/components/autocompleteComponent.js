'use client';

import { useState } from 'react';
import { Typography, Card, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// Autocomplete Component
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
    <Card className="feature-card w-full h-full">
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
            styles={{ 
              body: { padding: '0' },
              header: { border: 'none' },
              body: { padding: '0', border: 'none' }
            }}
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
    </Card>
  );
};

export default AutocompleteComponent; 