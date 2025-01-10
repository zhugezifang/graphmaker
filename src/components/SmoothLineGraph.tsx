"use client"

import Script from 'next/script';

export function SmoothLineGraph({
  }: {
  }) {
  
  return (
    <>

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive"/>
      <Script src="https://www.xhs-download.online/static/js/tailwindcss.js" strategy="beforeInteractive"/>
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive"/>
     
      <Script src="/js/SingleLineGraph.js" strategy="afterInteractive"
      />
      
      <div className="bg-white px-4 py-10 mx-auto max-w-5xl sm:px-6 lg:px-8 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
        <label className="text-gray-700 text-sm font-semibold mr-2">Graph Title</label>
        <input type="text" id="graphTitle" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Line Graph"/>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
            <label className="text-gray-700 text-sm font-semibold mr-2">X-axis Label</label>
            <input type="text" id="xAxisLabel" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="X-axis"/>
        </div>
        <div className="flex items-center">
            <label className="text-gray-700 text-sm font-semibold mr-2">Y-axis Label</label>
            <input type="text" id="yAxisLabel" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="Y-axis"/>
        </div>
    </div>

    <div className="p-4 border rounded-lg bg-gray-50 mb-6">
        <div className="flex items-center justify-between mb-2">
            <input type="text" id="seriesName" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                   defaultValue="Data Series" placeholder="Series Name"/>
            <input type="color" id="lineColor" className="h-10 w-20" defaultValue="#FF6384"/>
        </div>
        <div className="grid grid-cols-1 gap-2">
            <div>
                <label className="text-gray-700 text-sm">X Values (comma separated)</label>
                <input type="text" id="xValues" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                defaultValue="1, 2, 3, 4, 5"/>
            </div>
            <div>
                <label className="text-gray-700 text-sm">Y Values (comma separated)</label>
                <input type="text" id="yValues" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                defaultValue="10, 20, 15, 30, 25"/>
            </div>
        </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center">
            <label className="text-gray-700 text-sm font-semibold mr-2">Line Tension (0 to 1)</label>
            <input type="number" id="lineTension" min="0" max="1" step="0.1" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue="0.4"/>
        </div>
        <div className="flex items-center">
            <label className="text-gray-700 text-sm font-semibold mr-2">Legend Position</label>
            <select id="legendPosition" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
        </div>
        <div className="flex items-center">
            <label className="text-gray-700 text-sm font-semibold mr-2">Y-axis Scale</label>
            <select id="yAxisScale" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="smooth">Smooth</option>
                <option value="linear">Linear</option>
                <option value="logarithmic">Logarithmic</option>
            </select>
        </div>
    </div>

    <div className="space-y-2 mb-4">
        <div className="flex items-center">
            <input type="checkbox" id="startFromZero" className="w-4 h-4 text-blue-600" defaultChecked/>
            <label className="ml-2 text-gray-700">Start y axis from 0</label>
        </div>
        <div className="flex items-center">
            <input type="checkbox" id="showXGrid" className="w-4 h-4 text-blue-600"/>
            <label className="ml-2 text-gray-700">Show X axis grid lines</label>
        </div>
        <div className="flex items-center">
            <input type="checkbox" id="showYGrid" className="w-4 h-4 text-blue-600" defaultChecked/>
            <label className="ml-2 text-gray-700">Show Y axis grid lines</label>
        </div>
        <div className="flex items-center">
            <input type="checkbox" id="showPoints" className="w-4 h-4 text-blue-600" defaultChecked/>
            <label className="ml-2 text-gray-700">Show Points</label>
        </div>
    </div>

    <div className="mb-4">
        <canvas id="lineGraph" className="w-full"></canvas>
        <div className="flex flex-wrap mt-4 justify-center gap-2">
            <button id="downloadPNG" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download PNG</button>
            <button id="downloadJPG" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download JPG</button>
        </div>
    </div>
      </div>

    </>
    
  )
}
