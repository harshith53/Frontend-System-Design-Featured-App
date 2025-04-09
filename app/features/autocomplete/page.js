"use client";

import ClientLayout from '../../layouts/ClientLayout';
import { Typography, Row, Col, Tabs, Button } from 'antd';
import { useState } from 'react';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import AutocompleteComponent from './components/autocompleteComponent';
import ImplementationSteps from './components/implementationSteps';

const { Title, Paragraph } = Typography;

export default function AutocompletePage() {
  const [tabs, setTabs] = useState([{ key: '1', title: 'Tab 1' }]);
  const [activeKey, setActiveKey] = useState('1');

  // Add a new tab
  const addTab = () => {
    const newKey = (tabs.length + 1).toString();
    setTabs([...tabs, { key: newKey, title: `Tab ${newKey}` }]);
    setActiveKey(newKey);
  };

  // Remove a tab
  const removeTab = (targetKey) => {
    const filteredTabs = tabs.filter(tab => tab.key !== targetKey);
    setTabs(filteredTabs);

    // Auto-switch to last tab if active tab is removed
    if (targetKey === activeKey && filteredTabs.length) {
      setActiveKey(filteredTabs[filteredTabs.length - 1].key);
    }
  };

  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        <Title level={2}>Autocomplete Feature</Title>
        <Paragraph className="text-lg mb-8">
          A Chrome-like tab system for autocomplete inputs.
        </Paragraph>

        <Row gutter={[24, 24]} className="min-h-[600px]">
          <Col xs={24} lg={12}>
            <div className="h-full">
              <Tabs
                activeKey={activeKey}
                onChange={setActiveKey}
                type="editable-card"
                onEdit={(targetKey, action) => {
                  if (action === 'add') addTab();
                  else removeTab(targetKey);
                }}
                tabBarExtraContent={
                  <Button type="primary" icon={<PlusOutlined />} onClick={addTab}>
                    New Tab
                  </Button>
                }
              >
                {tabs.map(tab => (
                  <Tabs.TabPane
                    tab={
                      <span>
                        {tab.title}
                        <CloseOutlined
                          onClick={e => {
                            e.stopPropagation();
                            removeTab(tab.key);
                          }}
                          style={{ marginLeft: 8, cursor: 'pointer' }}
                        />
                      </span>
                    }
                    key={tab.key}
                  >
                    <AutocompleteComponent />
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="h-full">
              <ImplementationSteps />
            </div>
          </Col>
        </Row>
      </div>
    </ClientLayout>
  );
}