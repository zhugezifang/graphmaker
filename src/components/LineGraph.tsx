"use client"

import Script from 'next/script';

export function LineGraph({
  }: {
  }) {
  
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive"/>
      <Script src="https://www.xhs-download.online/static/js/tailwindcss.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive"/>

      <Script src="/js/SingleLineGraph.js" strategy="afterInteractive"
      />

      <iframe id="game" src="/html/Line-Graph-Maker.html" allow="autoplay"  style={{ top: '0px', left: '0px',width: '100%', height: '800px'}}></iframe>

      
      

    </>
    
  )
}
