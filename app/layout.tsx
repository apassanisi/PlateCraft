import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlateCraft - Recipe Generator',
  description: 'Generate delicious recipes with PlateCraft using the ingredients you have at home.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="recipe generator, PlateCraft, cooking, ingredients, food, recipes" />
        <meta name="author" content="PlateCraft" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta name="twitter:site" content="@PlateCraft" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        <title>{metadata.title}</title>
      </Head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <header className="bg-primary text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">PlateCraft</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
