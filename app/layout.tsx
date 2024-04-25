import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RumbeAndo",
  description: "Creado por Luciano Bregoli",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}