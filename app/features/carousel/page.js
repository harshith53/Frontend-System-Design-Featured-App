'use client';

import { useState } from 'react';
import { FaTable } from 'react-icons/fa';
import ClientLayout from '../../layouts/ClientLayout';
import { Typography, Splitter, Tabs, Card } from 'antd';
import { BulbOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const tableData = [
  { id: 1, name: "Table 1", attributes: ["ID", "Name", "Age", "Country"] },
  { id: 2, name: "Table 2", attributes: ["Product", "Price", "Category"] },
  { id: 3, name: "Table 3", attributes: ["Order ID", "Customer", "Status"] },
  { id: 4, name: "Table 4", attributes: ["City", "Population", "GDP"] },
  { id: 5, name: "Table 5", attributes: ["Movie", "Rating", "Director"] },
  { id: 6, name: "Table 6", attributes: ["Employee", "Role", "Salary"] },
  { id: 7, name: "Table 7", attributes: ["Course", "Duration", "Instructor"] },
  { id: 8, name: "Table 8", attributes: ["Transaction ID", "Amount", "Method"] },
  { id: 9, name: "Table 9", attributes: ["Event", "Date", "Venue"] },
  { id: 10, name: "Table 10", attributes: ["Stock", "Price", "Change"] },
];

const attributeTypes = {
  "ID": "numeric",
  "Name": "string",
  "Age": "numeric",
  "Country": "string",
  "Product": "string",
  "Price": "numeric",
  "Category": "string",
  "Order ID": "numeric",
  "Customer": "string",
  "Status": "string",
  "City": "string",
  "Population": "numeric",
  "GDP": "numeric",
  "Movie": "string",
  "Rating": "numeric",
  "Director": "string",
  "Employee": "string",
  "Role": "string",
  "Salary": "numeric",
  "Course": "string",
  "Duration": "numeric",
  "Instructor": "string",
  "Transaction ID": "numeric",
  "Amount": "numeric",
  "Method": "string",
  "Event": "string",
  "Date": "string",
  "Venue": "string",
  "Stock": "string",
  "Change": "numeric"
};

// Left Panel
const TableList = ({ onSelect, selectedTableId }) => (
  <div className="p-6 h-full overflow-auto">
    <Title level={4}>Tables</Title>
    <Paragraph>Click on a table to view its attributes.</Paragraph>

    <div className="space-y-1 mt-4">
      {tableData.map((table) => (
        <div
          key={table.id}
          className={`p-3 cursor-pointer hover:bg-primary-background/10 rounded-md transition flex items-center justify-between ${
            selectedTableId === table.id ? 'bg-primary-background/5' : ''
          }`}
          onClick={() => onSelect(table.id)}
        >
          <span className="flex items-center space-x-2">
            <FaTable />
            <span>{table.name}</span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Right Panel
const TableDetails = ({ selectedTableId }) => {
  const selectedTable = tableData.find(t => t.id === selectedTableId);

  return (
    <div className="p-6 h-full overflow-auto">
      {selectedTable ? (
        <>
          <Title level={4}>Table Details - {selectedTable.name}</Title>
          <Paragraph>Attributes and their data types:</Paragraph>
          <Card className="mt-4">
            {selectedTable.attributes.map((attr, index) => (
              <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
                <span>{attr}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {attributeTypes[attr] || "string"}
                </span>
              </div>
            ))}
          </Card>

          <Tabs defaultActiveKey="1" className="mt-6">
            <Tabs.TabPane key="1" tab={<span><BulbOutlined /> High Level Design</span>}>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Display tables on left, details on right</li>
                <li>Use Splitter for side-by-side layout</li>
                <li>Component-based separation</li>
              </ul>
            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab={<span><DeploymentUnitOutlined /> Low Level Design</span>}>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><code>useState</code> to manage selected table</li>
                <li>Conditional rendering based on selection</li>
                <li>Flexible styling for hover and active states</li>
              </ul>
            </Tabs.TabPane>
          </Tabs>
        </>
      ) : (
        <Paragraph>Select a table to view its details.</Paragraph>
      )}
    </div>
  );
};

// Page Component
export default function TableExplorerPage() {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        <Title level={2}>Table Explorer with Splitter</Title>
        <Paragraph className="text-lg mb-8">
          View the list of tables and inspect their attributes side-by-side.
        </Paragraph>

        <div className="bg-card-background rounded-lg overflow-hidden border border-card-border">
          <Splitter style={{ minHeight: '600px' }} defaultSplit="40%">
            <Splitter.Panel>
              <TableList selectedTableId={selectedTable} onSelect={setSelectedTable} />
            </Splitter.Panel>
            <Splitter.Panel>
              <TableDetails selectedTableId={selectedTable} />
            </Splitter.Panel>
          </Splitter>
        </div>
      </div>
    </ClientLayout>
  );
}