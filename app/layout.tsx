/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Tawk } from "@/components/molecules/tawk";

export const metadata: Metadata = {
  title: "Punit Valves",
  description:
    "Our valves are engineered for precision, control and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@112.5,700&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        ></link>

        <GoogleTagManager gtmId="GTM-MKLFT4C7" />
      </head>
      <body className={`antialiased`}>
        {/* CHILDREN */}
        {children}

        {process.env.NEXT_PUBLIC_TAWK_ENABLED && <Tawk /> }

        {/* VERCEL */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
