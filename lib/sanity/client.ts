import { createClient } from '@sanity/client';

const projectId = "zru5vaab";
const dataset = "production";

export const sanityClientSide = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
});