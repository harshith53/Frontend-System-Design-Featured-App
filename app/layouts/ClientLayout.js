'use client';

import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AISearchButton from '../components/AISearchButton';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <AISearchButton />
      <Footer />
    </ThemeProvider>
  );
} 