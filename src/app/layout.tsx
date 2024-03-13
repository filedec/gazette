import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import { Header } from '@/components/navigation';
// import og from ''

const inter = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: { default: 'Doqett', template: '%s - Doqett' },
  description: 'Empowering Learners Through Innovation and Collaboration',
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
        {/* <head>
          <meta property='og:url' content='https://doqett.com/' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Doqett' />
          <meta
            property='og:description'
            content='Empowering Learners Through Innovation and Collaboration'
          />
          <meta
            property='og:image'
            content='https://opengraph.b-cdn.net/production/documents/407715bc-1e7e-41f7-9178-02e53efd3f1f.png?token=wojW6IUG6N3Sv2lmraCECDz3eLaczY3j0u8OvKckf54&height=604&width=1200&expires=33246270970'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='doqett.com' />
          <meta property='twitter:url' content='https://doqett.com/' />
          <meta
            name='twitter:title'
            content='Empowering Learners Through Innovation and Collaboration'
          />
          <meta
            name='twitter:description'
            content='Empowering Learners Through Innovation and Collaboration'
          />
          <meta
            name='twitter:image'
            content='https://opengraph.b-cdn.net/production/documents/407715bc-1e7e-41f7-9178-02e53efd3f1f.png?token=wojW6IUG6N3Sv2lmraCECDz3eLaczY3j0u8OvKckf54&height=604&width=1200&expires=33246270970'
          />
        </head> */}
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
