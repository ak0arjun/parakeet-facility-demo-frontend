import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarComponent } from "./components/sidebar.component";
import { HeaderComponent } from "./components/header.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parakeet facility demo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >

        <div className="h-full">
          <HeaderComponent></HeaderComponent>
          <div className="flex flex-row h-full pt-16">
            <div className="h-full">
              <SidebarComponent></SidebarComponent>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
