'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ConfigProvider, theme as antTheme } from 'antd';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from local storage or system preference
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Apply theme class to document
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.classList.toggle('light', initialTheme === 'light');
  }, []);

  // Apply theme class whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Configure Ant Design theme
  const antdTheme = {
    algorithm: theme === 'dark' ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 6,
    },
    components: {
      Card: {
        colorBgContainer: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        colorBorderSecondary: theme === 'dark' ? '#2a2a2a' : '#e5e7eb',
      },
      Button: {
        colorPrimaryHover: '#4096ff',
      },
      Layout: {
        colorBgHeader: theme === 'dark' ? '#0c0c0c' : '#ffffff',
        colorBgBody: theme === 'dark' ? '#0a0a0a' : '#ffffff',
        colorBgFooter: theme === 'dark' ? '#0c0c0c' : '#ffffff',
      },
    },
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ConfigProvider theme={antdTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
