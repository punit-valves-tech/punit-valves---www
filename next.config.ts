import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn.sanity.io/**")],
  },

  // REDIRECTS
  async redirects() {
    return [
      {
        source: "/wtnrv.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/htballvalve.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/rhpump.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/bvmseat.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/ssnsnrv.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/ssballvalve.html",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/images/WCVTechSpec.pdf",
        destination: "/brochure",
        permanent: true,
      },
      {
        source: "/images/RepSeatBVTechSpec.pdf",
        destination: "/brochure",
        permanent: true,
      },
      {
        source: "/images/NValveTechspec.pdf",
        destination: "/brochure",
        permanent: true,
      },
      {
        source: "/images/HTBValve.pdf",
        destination: "/brochure",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
