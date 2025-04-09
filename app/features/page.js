'use client';

import Link from "next/link";
import ClientLayout from "../layouts/ClientLayout";
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;
// Features Component (Combining Data, Card, and Layout)
export default function FeaturesPage() {
  const featuresData = [
    {
      id: 1,
      title: "Autocomplete",
      description: "An intelligent input field with real-time suggestions.",
      link: "/features/autocomplete",
    },
    {
      id: 2,
      title: "Dropdown Menu",
      description: "A customizable dropdown for easy navigation.",
      link: "/features/dropdown",
    },
    {
      id: 3,
      title: "Modal",
      description: "A pop-up modal for additional content or forms.",
      link: "/features/modal",
    },
    {
      id: 4,
      title: "Splitter",
      description: "Interactive resizable panels for side-by-side content viewing.",
      link: "/features/splitter",
    },
    {
      id: 5,
      title: "Data Explorer OF DB",
    description:"A data explorer for database tables, with a carousel view and table view.",
      link: "/features/carousel",
    },
    {
      id:6,
      title:"ToggleSidebar Collapse Section",
      description:"ToggleSidebar Collapse Section for ease Transition in UI",
      link:"/features/collapse",


    }
  ];

  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
            <Title>Frontend System Design Features</Title>
            <Paragraph className="text-lg max-w-3xl mx-auto">
              Explore the common frontend UI components and features that you can use to build
              interactive and user-friendly web applications.
            </Paragraph>
          </div>
        <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => (
          <div
          key={feature.id}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {feature.title}
          </h2>
          <p className="text-gray-700 dark:text-white mt-2">{feature.description}</p>
          <Link
            href={feature.link}
            className="inline-block mt-4 text-blue-600 dark:text-blue-400"
          >
            Explore →
          </Link>
        </div>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
}