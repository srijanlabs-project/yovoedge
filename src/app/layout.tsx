import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YovoEdge — Mental support for young athletes",
  description:
    "YovoEdge connects young athletes (aged 9-18) with vetted sport and exercise psychologists across India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
