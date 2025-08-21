'use client';

import { Layout, Divider, Space, Button } from 'antd';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;

export default function Footer() {
  return (
    <AntFooter className="bg-background py-12 px-4 md:px-6 relative border-t border-card-border">
      <div className="absolute inset-0 opacity-2">
        <div className="wave-pattern absolute inset-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="mb-6">
              <Link href="/" className="font-bold text-xl mb-4 inline-block">
                <span className="text-foreground flex items-center">
                <img src="/logo.png" alt="Coming Soon" className="w-7 h-7 rounded-md mr-2" />
                  <span>FrontendSD</span>
                </span>
              </Link>
              <p className="text-sm text-muted mt-2">Learn to architect scalable, maintainable frontend applications.</p>
            </div>
            <div className="flex space-x-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary-background transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary-background transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary-background transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-base">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/concepts" className="text-sm text-muted hover:text-primary-background transition-colors">Concepts</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted hover:text-primary-background transition-colors">Case Studies</Link></li>
              <li><Link href="/challenges" className="text-sm text-muted hover:text-primary-background transition-colors">Challenges</Link></li>
              <li><Link href="/ai" className="text-sm text-muted hover:text-primary-background transition-colors">AI Assistant</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-base">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">Mock Interviews</Link></li>
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">Learning Resources</Link></li>
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">About Us</Link></li>
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">Contact</Link></li>
              <li><Link href="/" className="text-sm text-muted hover:text-primary-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-8 opacity-40" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Infinite Ignition Lab. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Button type="link" className="text-xs text-muted hover:text-primary-background px-2">Privacy Policy</Button>
            <Button type="link" className="text-xs text-muted hover:text-primary-background px-2">Terms of Use</Button>
            <Button type="link" className="text-xs text-muted hover:text-primary-background px-2">Cookies</Button>
          </div>
        </div>
      </div>
    </AntFooter>
  );
}
