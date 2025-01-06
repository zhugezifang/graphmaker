"use client"

export function Game({
  url
}: {
  url: string
}) {

  return (
    <div className="flex items-center justify-center space-x-7">
      <a href="https://image-splitter.online/" className="cursor-pointer flex flex-row items-center bg-[#276ef1] px-10 font-bold text-white transition [box-shadow:rgb(171,_196,_245)-12px_12px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
        <p className="mr-8 font-bold text-2xl tracking-wider">Try Image Splitter</p>
        <svg fill="currentColor" className="h-6 w-6 flex-none" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
          <title>Try Image Splitter</title>
          <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
        </svg>
      </a>
    </div>
  )
}
