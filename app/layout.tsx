/* eslint-disable @next/next/no-page-custom-font */
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Tawk } from "@/components/molecules/tawk";
import { StructuredData } from "@/components/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="ahrefs-site-verification"
          content="48e96a2033b25a1c02338f533a6a7ca36bd4330b6a45094c313cfaf829b17865"
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="EQ2sAis7tNYk/C4k09rdUA"
          async
        />
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

        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? (
          <GoogleTagManager gtmId="GTM-MKLFT4C7" />
        ) : null}
      </head>
      <body className={`antialiased`}>
        {/* Schema JSON-LD */}
        <StructuredData
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Punit Industrial Valves",
            alternateName: "Punit Valves",
            url: "https://www.punitvalves.com",
            logo: "https://www.punitvalves.com/logo-punit.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919558817397",
              contactType: "sales",
              areaServed: "IN",
              availableLanguage: ["en", "Gujarati", "Hindi"],
            },
            sameAs: [
              "https://www.punitvalves.com",
              "https://www.youtube.com/channel/UCCyo4GQzDu1dnjXD-GwdZCQ",
            ],
          }}
        />

        <StructuredData
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Punit Industrial Valves",
            alternateName: "Punit Valves",
            image: "https://www.punitvalves.com/logo-punit.png",
            "@id": "",
            url: "https://www.punitvalves.com",
            telephone: "+919558817397",
            address: {
              "@type": "PostalAddress",
              streetAddress: "K-1/3 G.I.D.C Antalia, Bilimora - Chikhli Road",
              addressLocality: "Bilimora",
              postalCode: "396325",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 20.7678775,
              longitude: 73.0009089,
            },
          }}
        />
        {/* CHILDREN */}
        {children}

        {/* VERCEL */}
        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? (
          <>
            {process.env.NEXT_PUBLIC_TAWK_ENABLED && <Tawk />}
            <SpeedInsights />
            <Analytics />
          </>
        ) : null}
      </body>
    </html>
  );
}
