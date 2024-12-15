import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarComponent } from "./components/sidebar.component";
import { HeaderComponent } from "./components/header.component";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
        <AppRouterCacheProvider>

          <div className="h-full">
            <HeaderComponent></HeaderComponent>
            <div className="flex flex-row h-full pt-16">
              <div className="h-full">
                <SidebarComponent></SidebarComponent>
              </div>
              <div className="w-full">
                {children}
              </div>
            </div>
          </div>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
