import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  
});

export const metadata: Metadata = {
  title: 'First React Project',
  description: 'Find your boat with the best experience.',
  icons: ['/images/logo.svg'],
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full font-lato antialiased',
        poppins.className
      )}
    >
      <head />
      <body className="flex min-h-full flex-col">
        <h1 className='font-bold'>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}
