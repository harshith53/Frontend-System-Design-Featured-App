'use client';

import ClientLayout from '../layouts/ClientLayout';



export default function Page() {

  return (
    <ClientLayout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '2rem' }}>
        <img src="/logo.png" alt="Coming Soon" style={{ width: '180px', opacity: 0.8 }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#555' }}>Coming Soon</h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>We&apos;re working hard to bring you this page. Stay tuned!</p>
      </div>
    </ClientLayout>
  );
}
