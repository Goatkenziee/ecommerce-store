import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E-commerce Store',
  description: 'A fully featured e-commerce store',
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Header will go here */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          {/* Footer will go here */}
        </div>
      </body>
    </html>
  );
}
