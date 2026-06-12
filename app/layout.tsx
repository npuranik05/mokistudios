import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moki Studios | Websites & Lead Automation for Small Businesses",
  description:
    "We build professional websites and lead-generating automations for small businesses. See your free demo first. You only pay if you love it.",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "Moki Studios",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#121210",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* fixed film-grain overlay — purely decorative */}
        <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[60]" />
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}
