import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Anusiya Exports | Premium Agricultural Products from Namakkal, India',
  description: 'Anusiya Exports - Leading exporter of fresh eggs, premium bananas, tender coconuts, and coconuts from Namakkal, Tamil Nadu. International quality standards, reliable global logistics, APEDA certified.',
  keywords: 'Anusiya Exports, agricultural exports Namakkal, fresh eggs export, banana export, coconut export, Tamil Nadu exports, international trading, agricultural products',
  authors: [{ name: 'Anusiya Exports' }],
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  openGraph: {
    title: 'Anusiya Exports - Premium Agricultural Products',
    description: 'Export-grade quality fresh produce from Namakkal for global markets',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🌾</text></svg>" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-white`}>
        {children}
      </body>
    </html>
  );
}
