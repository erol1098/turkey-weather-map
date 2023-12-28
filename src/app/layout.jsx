import { Noto_Sans } from 'next/font/google';

import './globals.css';
import { Header, ThemeProvider } from '@/components';

const noto = Noto_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'MeteoMap Türkiye',
  description: 'Türkiye için hava durumu tahminlerine erişin.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className={noto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
