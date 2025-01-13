"use client"

import Script from 'next/script';

export function DoubleBarGraph({
  }: {
  }) {
  
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive"/>
      <Script src="https://www.xhs-download.online/static/js/tailwindcss.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive"/>

      <Script src="/js/DoubleBarGraph.js" strategy="afterInteractive"
      />
      
      <div className="bg-white px-4 py-10 mx-auto max-w-5xl sm:px-6 lg:px-8 rounded-lg shadow-lg">
        
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Chart Title</label>
                    <input type="text" id="chartTitle" className="w-full border rounded-md p-2" defaultValue="Bar Graph"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">X-Axis Title</label>
                    <input type="text" id="xAxisTitle" className="w-full border rounded-md p-2" defaultValue="X-Axis"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Y-Axis Title</label>
                    <input type="text" id="yAxisTitle" className="w-full border rounded-md p-2" defaultValue="Y-Axis"/>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Labels (Separated by Space or Comma)</label>
                <input type="text" id="labels" className="w-full border rounded-md p-2" defaultValue="a, b, c, d"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 1 Name</label>
                    <input type="text" id="bar1Name" className="w-full border rounded-md p-2" defaultValue="First Bar"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 2 Name</label>
                    <input type="text" id="bar2Name" className="w-full border rounded-md p-2" defaultValue="Second Bar"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 1 Values</label>
                    <input type="text" id="values1" className="w-full border rounded-md p-2" defaultValue="20, 10, 10, 5"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 2 Values</label>
                    <input type="text" id="values2" className="w-full border rounded-md p-2" defaultValue="40, 20, 30, 15"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 1 Color</label>
                    <input type="color" id="color1" className="w-full h-10 border rounded-md" defaultValue="#4361ee"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bar 2 Color</label>
                    <input type="color" id="color2" className="w-full h-10 border rounded-md" defaultValue="#ef233c"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legend Position</label>
                    <select id="legendPosition" className="w-full border rounded-md p-2">
                        <option value="top">Top</option>
                        <option value="right" selected>Right</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                    </select>
                </div>
            </div>

            <button id="generateGraph" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Generate Graph
            </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
            <canvas id="barChart"></canvas>
        </div>

        <div className="flex justify-center gap-4 mt-6">
            <button id="downloadPNG" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                Download PNG
            </button>
            <button id="downloadJPEG" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                Download JPEG
            </button>
        </div>
    </div>

    </>
    
  )
}
