import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { inter, interDisplay } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Azlan Ahmad — Data Scientist & Software Engineer',
  description:
    'Azlan Ahmad builds practical AI tools, data products, and interfaces that turn complex systems into clear next steps.',
  icons: {
    icon: '/favicon.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interDisplay.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
