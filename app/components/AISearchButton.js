'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AISearchButton() {
  return (
    <Link
      href="/ai"
      className="fixed right-6 bottom-16 z-50 flex h-8 w-8 cursor-pointer items-center overflow-hidden rounded-full bg-[#1E1B4B] text-white shadow-2xl transition-all hover:w-35 hover:gap-1 group"
      aria-label="Open AI Assistant"
    >
      <div className="grid h-9 w-9 items-center select-none">
        <Image
          src="/searchIcon.svg"
          alt="AI Search"
          width={32}
          height={32}
          priority
        />
      </div>
      <div className="w-0 whitespace-nowrap select-none text-amber-50 group-hover:w-full">DesignCopilot</div>
    </Link>
  );
}


