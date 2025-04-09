"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaDatabase } from 'react-icons/fa';
import { SearchOutlined } from '@ant-design/icons';
import ClientLayout from '../../layouts/ClientLayout';

const CollapsibleDataExplorer = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const eventTypes = [
    { name: 'ComputeUsage', id: 1, attributes: ['ID', 'Name', 'CPU', 'Memory'] },
    { name: 'Consumption', id: 2, attributes: ['ID', 'Type', 'Amount'] },
    { name: 'MTDConsumption', id: 3, attributes: ['Month', 'Total', 'Projected'] },
    { name: 'Public_APICall', id: 4, attributes: ['Endpoint', 'Status', 'Latency'] }
  ];

  const filteredEvents = eventTypes.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ClientLayout>
      <div className="flex h-screen bg-gray-100 dark:bg-darkBg">
        {/* Sidebar toggle when collapsed */}
        {!isExpanded && (
          <div className="flex flex-col items-center p-2 border-r border-gray-200 bg-white">
            <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-100">
              <FaDatabase className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={toggleSidebar} className="p-2 mt-2 rounded hover:bg-gray-100">
              <FaChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        )}

        {/* Expanded Sidebar */}
        {isExpanded && (
          <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
            <div className="p-4 font-semibold border-b border-gray-200 flex justify-between items-center">
              <span>Data Explorer</span>
              <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-100">
                <FaChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Tabs */}
            <div className="px-4 py-2 border-b border-gray-200">
              <div className="inline-flex rounded border border-gray-200">
                <button
                  className={`px-3 py-1 text-sm ${selectedTab === 'Events' ? 'bg-gray-100' : 'bg-white'}`}
                  onClick={() => setSelectedTab('Events')}
                >
                  Events
                </button>
                <button
                  className={`px-3 py-1 text-sm ${selectedTab === 'Metrics' ? 'bg-gray-100' : 'bg-white'}`}
                  onClick={() => setSelectedTab('Metrics')}
                >
                  Metrics
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <SearchOutlined className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Account Selector */}
            <div className="p-4 border-b border-gray-200">
              <select className="w-full p-2 border border-gray-200 rounded text-sm">
                <option>Account: 6319664 - Account 6319664</option>
              </select>
            </div>

            {/* Event List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 text-sm text-gray-500 border-b border-gray-200">Data Events</div>
              <ul className="px-2">
                {filteredEvents.map(event => (
                  <li
                    key={event.id}
                    className={`py-2 px-2 hover:bg-gray-100 cursor-pointer flex items-center rounded ${
                      selectedEvent?.id === event.id ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <FaDatabase className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-sm">{event.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main content area */}
        <div className="flex-1 p-6 overflow-auto">
          {selectedEvent ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Selected Table: {selectedEvent.name}</h2>
              <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                <h3 className="text-md font-medium mb-2">Attributes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedEvent.attributes.map((attr, index) => (
                    <li key={index} className="text-sm text-gray-700">{attr}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-gray-500">
              {isExpanded
                ? 'Select a data event from the sidebar to view details.'
                : 'Click the database icon to expand the Data Explorer.'}
            </p>
          )}
        </div>
      </div>
    </ClientLayout>
  );
};

export default CollapsibleDataExplorer;