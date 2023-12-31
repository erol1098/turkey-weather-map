import { Noto_Sans } from 'next/font/google';

import './globals.css';
import { Footer, Header, ThemeProvider } from '@/components';

const noto = Noto_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'MeteoMap Türkiye',
  description:
    "Türkiye'nin hava durumu haritası. İstediğiniz şehri seçin ve günlük hava durumunu görün.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={noto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
