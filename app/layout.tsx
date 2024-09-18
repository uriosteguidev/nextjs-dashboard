import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import clsx from "clsx";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
            Este sitio fue desarrollado por abisai
        </footer>
      </body>
    </html>
  );
}
