import type { Metadata } from 'next';
import '../globals.css';
import { interDisplay } from './font';

export const metadata: Metadata = {
   title: 'Vigy • Developer & Designer',
   description: `I'm Vignesh Wadhwani. I build beautiful, high-quality, meaningful and user centered software solutions that drive growth and engagement on the web.`,
   icons: {
      icon: [
         {
            rel: 'icon',
            type: 'image/ico',
            url: '/favicon/favicon.ico',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/favicon/android-chrome-192x192.png',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/favicon/android-chrome-512x512.png',
         },
      ],
      apple: ['/favicon/apple-touch-icon.png'],
   },
   manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`flex flex-col overflow-x-hidden overflow-y-auto cursor-default ${interDisplay.variable} bg-white p-25 text-black min-h-screen font-inter w-full antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
