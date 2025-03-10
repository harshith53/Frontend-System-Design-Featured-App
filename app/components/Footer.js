'use client';

import { Layout, Divider, Space } from 'antd';
import Link from 'next/link';

const { Footer: AntFooter } = Layout;

export default function Footer() {
  return (
    <AntFooter className="bg-background py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">FrontendSD</h3>
            <p className="text-sm">
              Learning platform for frontend system design principles, practices, and patterns.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/concepts" className="text-sm hover:underline">Concepts</Link></li>
              <li><Link href="/case-studies" className="text-sm hover:underline">Case Studies</Link></li>
              <li><Link href="/challenges" className="text-sm hover:underline">Challenges</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/interviews" className="text-sm hover:underline">Mock Interviews</Link></li>
              <li><Link href="/resources" className="text-sm hover:underline">Learning Resources</Link></li>
              <li><Link href="/forum" className="text-sm hover:underline">Community Forum</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} FrontendSD. All rights reserved.</p>
          </div>
          <Space size="large">
            <Link href="https://twitter.com" className="text-sm hover:underline">Twitter</Link>
            <Link href="https://github.com" className="text-sm hover:underline">GitHub</Link>
            <Link href="https://linkedin.com" className="text-sm hover:underline">LinkedIn</Link>
          </Space>
        </div>
      </div>
    </AntFooter>
  );
}
