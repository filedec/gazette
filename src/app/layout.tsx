import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { Header } from '@/components/navigation';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Doqett',
  description: 'Redefining Decentralized Storage and Collaboration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={barlow.className}>
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
