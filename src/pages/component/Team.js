import React from 'react'

export default function Team() {
  return (
    <div id="team" className="bg-cover bg-no-repeat bg-center font-macaria text-indigo-800" style={{backgroundImage: 'url("/asset/gradient backgrounds/turquoise-green gradient.png")', height: "100%"}}>
      <img src="/asset/rainbow_line.png" alt="rainbow" className="w-full" />

      <h1 className="font-groovy text-center pt-5 text-5xl md:text-8xl md:pt-16">MEET THE TEAM</h1>

      <div className="grid space-y-10 py-10 md:grid-cols-2 md:px-20 md:py-16">

        <div className="grid justify-items-between">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
