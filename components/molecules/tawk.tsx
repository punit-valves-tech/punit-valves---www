import Script from "next/script";
import React from "react";

export const Tawk = () => {
  return (
    <Script
      id="tawk-script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/687222cf706749190b7d176c/1ivutfvdg';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  );
};
