import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Tawk } from "@/components/molecules/tawk";
import { StructuredData } from "@/components/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page = ({ children }: any) => (
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
      <Header />
      <main>
        <CrossSection />
        {children}
      </main>
      <Footer />

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

const CrossSection = () => (
  <aside className="fixed z-[1] float-left top-16 bottom-0 left-[calc(50%_-_38rem_+_1px)] h-full w-10 bg-white cross-section border border-[var(--grid-color)]" />
);
