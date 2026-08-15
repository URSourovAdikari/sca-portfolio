import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteShell } from "@/components/site-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sourovadikari.xyz"),
  title: {
    default: "Sourov Chandra Adikari | Full Stack Web Developer",
    template: "%s | Sourov Chandra Adikari",
  },
  description:
    "Personal portfolio for Sourov Chandra Adikari, a Full Stack Web Developer focused on React, Next.js, TypeScript, and modern web experiences.",
  keywords: [
    "Sourov Chandra Adikari",
    "Full Stack Web Developer",
    "Next.js developer",
    "React developer",
    "Bangladesh web developer",
  ],
  openGraph: {
    title: "Sourov Chandra Adikari | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building responsive, high-quality web applications with React, Next.js, TypeScript, and Node.js.",
    url: "https://sourovadikari.xyz",
    siteName: "Sourov Chandra Adikari",
    type: "website",
    images: [{ url: "/developer.jpg", width: 1200, height: 1200, alt: "Sourov Chandra Adikari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourov Chandra Adikari | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building scalable web apps with modern tools and great UX.",
    images: ["/developer.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full text-foreground">
        <SiteShell>{children}</SiteShell>
        <SiteFooter />
      </body>
    </html>
  );
}
