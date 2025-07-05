"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "@/lib/sanity/schemaTypes";
import { structure } from "@/lib/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "Punit Valves Marketing Website",

  projectId: "zru5vaab",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
