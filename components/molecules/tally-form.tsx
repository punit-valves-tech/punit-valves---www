"use client";

import { useEffect } from "react";

export const TallyForm = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.Tally?.loadEmbeds?.();
  }, []);

  return (
    // <ZStack sectionProps={{ className: "w-full h-full" }}>
    <>
      <div className="w-full">
        <iframe
          data-tally-src="https://tally.so/embed/wdX0GA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="361"
          title="Contact form"
        ></iframe>
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`,
          }}
        />
      </div>
      <div className="pointer-events-auto w-full flex items-end justify-end">
        <div className="pointer-events-auto h-16 w-48 md:w-48 -mt-20 bg-white" />
      </div>
    </>

    // </ZStack>
  );
};
