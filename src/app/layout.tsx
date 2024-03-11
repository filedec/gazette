import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { Header } from '@/components/navigation';

const inter = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: { default: 'Doqett', template: '%s - Doqett' },
  description: 'Redefining Decentralized Storage and Workspace Collaboration',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.svg',
        href: '/images/icon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.svg',
        href: '/images/icon-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <main className='h-screen w-screen bg-background text-foreground'>
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
