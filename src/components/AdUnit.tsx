"use client";

import { useEffect, useRef } from "react";

export default function AdUnit() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="my-10 w-full overflow-hidden flex justify-center bg-white/5 py-4 rounded-xl border border-white/10 relative">
      <div className="absolute top-1 left-2 text-[10px] text-muted/50 font-mono uppercase tracking-widest">Advertisement</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center", width: "100%", minHeight: "90px" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5024596573466584"
        data-ad-slot="7300636014"
      ></ins>
    </div>
  );
}
