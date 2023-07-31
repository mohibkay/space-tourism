import './globals.css';
import type { Metadata } from 'next';
import { Bellefair, Barlow_Condensed } from 'next/font/google';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bellefair',
});

export const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${bellefair.className} ${barlow.className}`}>
        {children}
      </body>
    </html>
  );
}
