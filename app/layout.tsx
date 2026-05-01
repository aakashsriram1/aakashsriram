"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#f6f0e7] text-stone-950 antialiased">
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
