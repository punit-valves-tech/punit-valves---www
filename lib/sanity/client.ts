import { createClient } from '@sanity/client';
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = "zru5vaab";
const dataset = "production";

export const sanityClientSide = createClient({
  projectId,
  dataset,
  apiVersion: '2025-02-06',
  useCdn: process.env.NODE_ENV === 'production',
});

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};