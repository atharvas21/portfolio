import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import ThemeTransition from "@/components/ThemeTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DarkKiller",
  description: "Full Stack Developer & Designer | Building exceptional digital experiences with modern web technologies",
  keywords: ["web developer", "portfolio", "full stack developer", "react", "next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ThemeTransition />
          <ScrollProgress />
          <AnimatedBlobs />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
