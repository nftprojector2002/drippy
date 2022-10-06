import React from 'react'

export default function Team() {
  return (
    <div id="team" className="bg-cover bg-no-repeat bg-center font-macaria text-indigo-800" style={{backgroundImage: 'url("/asset/gradient backgrounds/turquoise-green gradient.png")', height: "100%"}}>
      <img src="/asset/rainbow_line.png" alt="rainbow" className="w-full" />

      <h1 className="font-groovy text-center pt-5 text-5xl lg:text-8xl lg:pt-16">MEET THE TEAM</h1>

      <div className="grid py-10 lg:grid-cols-2 lg:px-20 lg:py-16">

        <div className="grid justify-items-between lg:pt-10">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between lg:pt-10">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between lg:pt-10">
          <img src="/asset/drippysmiles_1.png" alt="drippysmiles" className="w-1/3 justify-self-center"/>
          <div className="w-full text-center">
            <h1 className="text-4xl">Lorem ipsum</h1>
            <h1 className="text-xl">dolor sit amet</h1>
          </div>
        </div>

        <div className="grid justify-items-between lg:pt-10">
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
