'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layout, Menu, Button, Drawer, Space, Badge } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import DarkModeToggle from './DarkModeToggle';
import { routes } from '../lib/routes';

const { Header } = Layout;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow and backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Filter out admin route for normal navigation
  const navRoutes = routes.filter(route => !route.admin);

  return (
    <Header 
      className={`bg-background/95 sticky top-0 z-50 px-4 sm:px-6 md:px-8 flex items-center justify-between h-auto py-3 md:h-16 md:py-0 transition-all duration-200 border-b ${
        scrolled ? 'shadow-md backdrop-blur-md border-transparent' : 'border-card-border/30'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="font-bold text-lg sm:text-xl mr-6 md:mr-10 shrink-0 group">
          <span className="text-foreground flex items-center">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
            <span>FrontendSD</span>
          </span>
          <span className="block h-0.5 w-0 group-hover:w-full bg-gradient transition-all duration-300"></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block overflow-x-auto">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            className="border-none bg-transparent"
            items={navRoutes.map(route => ({
              key: route.path,
              label: (
                <Link href={route.path} className="font-medium px-1 relative group">
                  <span>{route.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            }))}
          />
        </div>
      </div>

      <div className="flex items-center">
        <Space size={[12, 16]} wrap={false} className="flex-nowrap">
          <DarkModeToggle />
          <div className="hidden sm:block">
            <Link href="/dashboard">
              <Button type="primary" className="px-4 py-1 h-auto rounded-full shadow-md hover:shadow-lg">
                <div className="flex items-center">
                  <span>Dashboard</span>
                  <Badge count={3} size="small" className="ml-1" />
                </div>
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <Button
            className="md:hidden"
            type="text"
            shape="circle"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            aria-label="Menu"
          />
        </Space>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={
          <span className="text-foreground flex items-center">
            <span className="bg-primary-background text-primary-foreground w-7 h-7 rounded-md flex items-center justify-center mr-2">F</span>
            <span>FrontendSD</span>
          </span>
        }
        placement="right"
        onClose={onClose}
        open={open}
        width="280px"
        bodyStyle={{ padding: '16px 0' }}
        headerStyle={{ borderBottom: '1px solid var(--card-border)' }}
      >
        <div className="flex flex-col h-full px-4">
          <Menu
            mode="vertical"
            selectedKeys={[pathname]}
            className="flex-grow border-none mb-6"
            items={navRoutes.map(route => ({
              key: route.path,
              label: (
                <Link href={route.path} onClick={onClose} className="flex items-center py-2">
                  {route.name}
                </Link>
              )
            }))}
          />
          <div className="mt-auto border-t pt-6 pb-2">
            <Link href="/dashboard" onClick={onClose}>
              <Button type="primary" block className="rounded-full h-auto py-2">
                <div className="flex items-center justify-center">
                  <span>Dashboard</span>
                  <Badge count={3} size="small" className="ml-1" />
                </div>
              </Button>
            </Link>
            <div className="mt-4 flex justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </Drawer>
    </Header>
  );
}
