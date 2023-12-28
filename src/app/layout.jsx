import { Inter } from 'next/font/google';

import './globals.css';
import { Header, ThemeProvider } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Turkey Weather Map',
  description: 'Turkey Weather Map',
};

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='bg-slate-400 dark:bg-slate-600'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
