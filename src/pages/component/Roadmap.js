import React from 'react'

export default function Roadmap() {
  return (
    <div id="roadmap" className="w-full bg-cover bg-no-repeat bg-center font-macaria text-gray-100 text-xl" style={{backgroundImage: 'url("/asset/gradient backgrounds/turquoise-blue gradient.png")'}}>
      <div className="flex justify-center absolute z-50 w-full">
        <img src="/animated/dripmap_title.gif" alt="logo" className="w-8/12 md:w-1/2" />
      </div>

      <div className="absolute z-50 w-full grid justify-items-stretch px-10" >
        
        <div className="w-24 h-24 md:justify-self-end md:w-48 md:h-48">
          <img src="/animated/astronaut.gif" alt="astronaut" className="md:transform md:translate-y-250px md:-translate-x-10" />
        </div>

        <div className="justify-self-start flex transform translate-y-150px">
          <div className='w-44 h-44 md:w-44 md:44'>
            <img src="/animated/planet1.gif" alt="planet1" className="" />
          </div>
          <div className="text-left px-10">
            <p>September 2022</p>
            <p className="text-2xl font-groovy text-yellow-200">ROADMAP TITLE 1</p>
            <ul className="text-base roadmap-list-disc">
              <li>Lerem ipsum dolor sit amet</li>
              <li>Et facere dignissimos a smilique</li>
              <li>Lerem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <img src="/asset/dripmap paths/path1.png" alt="path1" className="px-20 pt-96" />
        <img src="/asset/dripmap paths/path2.png" alt="path2" className="px-20 " />
        <img src="/asset/dripmap paths/path3.png" alt="path3" className="px-16 " />
        <img src="/asset/dripmap paths/path4.png" alt="path4" className="px-10 " />
      </div>

    </div>
  )
}
