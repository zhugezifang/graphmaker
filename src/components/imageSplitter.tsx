"use client"

import Script from 'next/script';

export function ImageSplitter({
    rowText,colText,imgBtn,downBtn
  }: {
    rowText: string,colText: string,imgBtn: string,downBtn: string
  }) {
  
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Reenie+Beanie&family=Sofia&family=Herr+Von+Muellerhoff&family=Calligraffitti&family=Delius&family=Kalam&family=Caveat&family=Seaweed+Script&family=Pinyon+Script&family=Kristi&family=Petit+Formal+Script&family=Monsieur+La+Doulaise&family=Satisfy&family=Shadows+Into+Light+Two&family=Parisienne&family=Rancho&family=Handlee&family=Merienda&family=Sriracha&family=Macondo&family=Marck+Script&family=Italianno&family=Yesteryear&family=Alex+Brush&family=Courgette&family=Nanum+Pen+Script&family=Rochester&family=Charm&family=Gloria+Hallelujah&family=Kaushan+Script&family=Rock+Salt&family=Yellowtail&family=Sacramento&family=Playball&family=Covered+By+Your+Grace&family=Mr+Dafoe&family=Nanum+Brush+Script&family=Mrs+Saint+Delafield&family=Ms+Madi&family=Dancing+Script&family=Permanent+Marker&family=Cedarville+Cursive&family=Niconne&family=Great+Vibes&family=Homemade+Apple&family=Klee+One&family=Qwigley&family=Pacifico&family=Bad+Script&family=Cookie&family=Norican&family=Allison&family=Indie+Flower&family=Arizonia&family=Tangerine&family=Julee&family=Playwrite+SK&family=Playwrite+AU+VIC&family=Allura&display=swap" rel="stylesheet"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive"
      />
      <Script src="/js/imageSplit.js" strategy="afterInteractive"
      />
      
      <div className="flex-grow container mx-auto px-6 md:px-12 my-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <span className="text-xl font-bold text-center text-gray-800 mb-4">Enter Your Name Or Initials</span>
            <form id="signatureForm" className="flex flex-col items-center">
                  <input type="text" id="nameInput" className="w-full border border-gray-300 p-3 rounded mb-4" placeholder="Elon Musk"/>
                  <button type="button" id="generateBtn"  className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">Generate Signature</button>
            </form>
        </div>
      </div>  

      <div className="container mx-auto px-6 md:px-12 my-12">
          <div id="signatures" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          </div>
      </div>

    </>
    
  )
}
