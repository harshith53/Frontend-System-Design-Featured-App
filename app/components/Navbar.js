'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import DarkModeToggle from './DarkModeToggle';
import { routes } from '../lib/routes';

const { Header } = Layout;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Filter out admin route for normal navigation
  const navRoutes = routes.filter(route => !route.admin);

  return (
    <Header className="bg-background sticky top-0 z-10 shadow-sm px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-xl mr-8">
          FrontendSD
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            className="border-none bg-transparent"
            items={navRoutes.map(route => ({
              key: route.path,
              label: (
                <Link href={route.path}>
                  {route.name}
                </Link>
              )
            }))}
          />
        </div>
      </div>

      <div className="flex items-center">
        <Space>
          <DarkModeToggle />
          <Link href="/dashboard">
            <Button type="primary">
              My Dashboard
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button
            className="md:hidden"
            type="text"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </Space>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={navRoutes.map(route => ({
            key: route.path,
            label: (
              <Link href={route.path} onClick={onClose}>
                {route.name}
              </Link>
            )
          }))}
        />
      </Drawer>
    </Header>
  );
}
