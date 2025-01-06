"use client"

import Script from 'next/script';

export function Handwritten({
    rowText,colText,imgBtn,downBtn
  }: {
    rowText: string,colText: string,imgBtn: string,downBtn: string
  }) {
  
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive"
      />
      <Script src="/js/Handwritten.js" strategy="afterInteractive"
      />
     <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4">
            <div className="flex-1">
                <label htmlFor="colorPicker" className="block text-sm font-medium text-gray-700">Brush Color:</label>
                <input type="color" id="colorPicker" className="w-full mt-1 rounded-md"/>
            </div>
            <div className="flex-1">
                <label htmlFor="brushSize" className="block text-sm font-medium text-gray-700">Brush Size:</label>
                <input type="range" id="brushSize" min="1" max="20" className="w-full mt-1"/>
            </div>
        </div>
        <canvas id="drawingCanvas" className="border border-gray-300 rounded-lg shadow-md w-full" width="800" height="400"></canvas>
        <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
            <button id="clearCanvas" className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                Clear Canvas
            </button>
            <button id="downloadImage" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Download Image
            </button>
        </div>
    </div>
    </>
    
  )
}
