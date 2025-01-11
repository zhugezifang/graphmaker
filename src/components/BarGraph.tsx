"use client"

import Script from 'next/script';

export function BarGraph({
  }: {
  }) {
  
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive"/>
      <Script src="https://www.xhs-download.online/static/js/tailwindcss.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive"/>

      <Script src="/js/BarGraph.js" strategy="afterInteractive"
      />
      
      <div className="bg-white px-4 py-10 mx-auto max-w-5xl sm:px-6 lg:px-8 rounded-lg shadow-lg">
        
        <div className="">            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chart Title</label>
                    <input type="text" id="chartTitle" className="w-full p-2 border rounded" placeholder="Bar Graph"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">X-Axis Title</label>
                    <input type="text" id="xAxisTitle" className="w-full p-2 border rounded" placeholder="X-Axis"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Y-Axis Title</label>
                    <input type="text" id="yAxisTitle" className="w-full p-2 border rounded" placeholder="Y-Axis"/>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Labels (Separated by Space or Comma)</label>
                <input type="text" id="labels" className="w-full p-2 border rounded" placeholder="a, b, c, d"/>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Values (Separated by Space or Comma)</label>
                <input type="text" id="values" className="w-full p-2 border rounded" placeholder="10, 20, 30, 40"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legend Position</label>
                    <select id="legendPosition" className="w-full p-2 border rounded">
                        <option value="top">Top</option>
                        <option value="right">Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
                    <input type="color" id="backgroundColor" className="w-full p-1 border rounded" value="#ffffff"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar Color</label>
                    <input type="color" id="barColor" className="w-full p-1 border rounded" value="#4F46E5"/>
                </div>
            </div>

            <div className="flex justify-center mb-6">
                <button id="generateGraph" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                    Generate Graph
                </button>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
            <canvas id="barChart"></canvas>
            
            <div className="flex justify-center gap-4 mt-6">
                <button id="downloadPNG" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Download PNG
                </button>
                <button id="downloadJPEG" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                    Download JPEG
                </button>
            </div>
        </div>

    </div>

    </>
    
  )
}
