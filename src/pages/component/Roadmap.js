import React from 'react'
import './roadmap.css'

export default function Roadmap() {
  return (
    <div id="roadmap" className="relative w-full bg-cover bg-no-repeat bg-center font-macaria text-gray-100 " style={{backgroundImage: 'url("/asset/gradient backgrounds/turquoise-blue gradient.png")'}}>
      <div className="flex justify-center absolute z-50 w-full">
        <img src="/animated/dripmap_title.gif" alt="logo" className="w-8/12 lg:w-1/2" />
      </div>


      <div className="absolute z-50 w-full flex justify-items-stretch lg:px-10 " >

        <div className="justify-self-start flex transform translate-y-10 translate-y-150">
          <div className='transform translate-y-32 lg:translate-x-5 lg:w-44 lg:h-44 flex justify-items-between'>
            <div className='lg:w-40 lg:h-40 w-28 h-28'>
              <img src="/animated/planet1.gif" alt="planet1" className="" />
            </div>

            <div className="lg:text-xl text-left px-3 lg:px-10">
              <p>November 2022</p>
              <p className="text-xl lg:text-2xl font-groovy text-yellow-200">ROADMAP TITLE 1</p>
              <ul className="text-xs lg:text-base roadmap-list-disc">
                <li>Lerem ipsum dolor sit amet</li>
                <li>Et facere dignissimos a smilique</li>
                <li>Lerem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="w-24 h-24 transform translate-y-24 justify-self-end lg:w-48 lg:h-48 transform translate-y-250 lg:-translate-x-10">
          <img src="/animated/astronaut.gif" alt="astronaut" className="" />
        </div>
      </div>


      <div className="absolute z-50 w-full flex justify-items-stretch lg:px-10" >
        
        <div className="w-24 h-24 transform translate-y-24 justify-self-end lg:w-48 lg:h-48 lg:transform translate-y-250 lg:-translate-x-10">
          {/* <img src="/animated/astronaut.gif" alt="astronaut" className="" /> */}
        </div>

        <div className="justify-self-start flex transform -translate-x-5 translate-y-96">
          <div className='transform -translate-y-7 translate-x-8 lg:translate-x-5 lg:w-44 lg:h-44 flex justify-items-between'>

            <div className="lg:text-xl text-right px-3 lg:px-10">
              <p>November 2022</p>
              <p className="text-xl lg:text-2xl font-groovy text-yellow-200">ROADMAP TITLE 2</p>
              <ul className="text-xs lg:text-base roadmap-list-disc">
                <li>Lerem ipsum dolor sit amet</li>
                <li>Et facere dignissimos a smilique</li>
                <li>Lerem ipsum dolor sit amet</li>
              </ul>
            </div>

            <div className='lg:w-40 lg:h-40 w-28 h-28'>
              <img src="/animated/planet2.gif" alt="planet2" className="" />
            </div>
            
          </div>
        </div>
      </div>
      

      <div className="absolute z-50 w-full flex justify-items-stretch lg:px-10 " >

        <div className="justify-self-start flex transform translate-y-10 translate-y-150">
          <div className='transform translate-y-32 lg:translate-x-5 lg:w-44 lg:h-44 flex justify-items-between'>
            <div className='lg:w-40 lg:h-40 w-28 h-28'>
              <img src="/animated/planet1.gif" alt="planet1" className="" />
            </div>

            <div className="lg:text-xl text-left px-3 lg:px-10">
              <p>November 2022</p>
              <p className="text-xl lg:text-2xl font-groovy text-yellow-200">ROADMAP TITLE 3</p>
              <ul className="text-xs lg:text-base roadmap-list-disc">
                <li>Lerem ipsum dolor sit amet</li>
                <li>Et facere dignissimos a smilique</li>
                <li>Lerem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="w-24 h-24 transform translate-y-24 justify-self-end lg:w-48 lg:h-48 transform translate-y-250 lg:-translate-x-10">
          <img src="/animated/astronaut.gif" alt="astronaut" className="" />
        </div>
      </div>      

      {/* <div className="absolute z-50 w-full grid justify-items-stretch px-10" >
        
        <div className="w-24 h-24 md:justify-self-end md:w-52 md:h-52">
          <img src="/animated/planet2.gif" alt="planet2" className="transform translate-y-670px translate-x-7" />
        </div>

        <div className="justify-self-start flex transform translate-y-150px">
          <div className='w-32 h-32 md:w-96 md:h-96'>
            <img src="/asset/clouds1.png" alt="clouds1" className="" />
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
      </div> */}

      <div className=''>
        <img src="/asset/dripmap paths/path1.png" alt="path1" className="px-6 pt-56 lg:px-20 lg:pt-96" />
        <img src="/asset/dripmap paths/path2.png" alt="path2" className="px-6 lg:px-20 " />
        <img src="/asset/dripmap paths/path3.png" alt="path3" className="px-5 lg:px-16 " />
        <img src="/asset/dripmap paths/path4.png" alt="path4" className="px-5 lg:px-10 " />
      </div>

    </div>
  )
}
