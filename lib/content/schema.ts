import { ORIGIN } from "./constants";

export const ORG_SCHEMA = {
  "@type": "Organization",
  "@id": ORIGIN,
  name: "Punit Industrial Valves",
  sameAs: "Punit Valves",
  logo: {
    "@type": "ImageObject",
    "@id":
      "https://www.punitvalves.com/logo-punit.png",
    url: "https://www.punitvalves.com/logo-punit.png",
    // width: "600",
    // height: "60",
  },
};
