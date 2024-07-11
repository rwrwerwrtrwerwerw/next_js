import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "./providers"

const inter = Inter({ subsets: ["latin"] });



// {children}
export const metadata: Metadata = {
  title: "exxbtc",
  description: "exxbtc it's exchange stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
          </body>
    </html>
  );
}


