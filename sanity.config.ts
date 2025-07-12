"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "@/lib/sanity/schemaTypes";
import { structure } from "@/lib/sanity/structure";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from "sanity-plugin-media";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "Punit Valves Marketing Website",

  projectId: "zru5vaab",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [structureTool({ structure }), media(), unsplashImageAsset()],
});
