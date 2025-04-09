'use client';

import { useState } from 'react';
import ClientLayout from '../layouts/ClientLayout';
import { Typography, Card, Tag, Input, Space, Row, Col } from 'antd';
import { SearchOutlined, CalendarOutlined, TagOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Search } = Input;

// Sample blog data - in a real app, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to build modern web applications.",
    date: "2024-03-15",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build web applications.",
    date: "2024-03-10",
    category: "AI",
    tags: ["AI", "Machine Learning", "Web Development"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Best Practices for React Performance",
    excerpt: "Tips and tricks to optimize your React applications for better performance.",
    date: "2024-03-05",
    category: "Development",
    tags: ["React", "Performance", "Optimization"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const categories = ["All", "Development", "AI", "Design", "Business"];
const tags = ["Next.js", "React", "Web Development", "AI", "Machine Learning", "Performance", "Optimization"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        <Title level={2}>Blog</Title>
        <Paragraph className="text-lg mb-8">
          Explore our latest articles and insights on technology, development, and more.
        </Paragraph>

        <div className="mb-8">
          <Search
            placeholder="Search articles..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Tag
              key={category}
              className={`cursor-pointer px-4 py-1 text-base ${
                selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Tag>
          ))}
        </div>

        <Row gutter={[24, 24]}>
          {filteredPosts.map(post => (
            <Col xs={24} sm={12} lg={8} key={post.id}>
              <Card
                hoverable
                className="h-full"
                cover={
                  <img
                    alt={post.title}
                    src={post.image}
                    className="h-48 object-cover"
                  />
                }
              >
                <div className="flex items-center text-gray-500 mb-2">
                  <CalendarOutlined className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Title level={4} className="mb-2">{post.title}</Title>
                <Paragraph className="text-gray-600 mb-4">{post.excerpt}</Paragraph>
                <Space wrap>
                  {post.tags.map(tag => (
                    <Tag key={tag} icon={<TagOutlined />} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </ClientLayout>
  );
} 