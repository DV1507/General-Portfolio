"use client";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Poppins } from "next/font/google";

const openSansFont = Poppins({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Dhruv Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <body className={openSansFont.className} suppressHydrationWarning>
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
