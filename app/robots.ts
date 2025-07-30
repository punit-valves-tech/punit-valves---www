import { ORIGIN } from "@/lib/content/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/studio/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/private/", "/studio/"],
      },

      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/private/", "/studio/"],
      },

      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/private/", "/studio/"],
      },

      {
        userAgent: "OAI-Operator",
        allow: "/",
        disallow: ["/private/", "/studio/"],
      },
    ],
    sitemap: `${ORIGIN}/sitemap.xml`,
  };
}
