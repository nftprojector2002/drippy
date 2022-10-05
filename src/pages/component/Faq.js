import React from 'react'
import Accordions from './Accordions'

export default function Faq() {
  return (
    
    <div id="faq" className="w-full bg-cover bg-no-repeat bg-center font-macaria" style={{backgroundImage: 'url("/asset/gradient backgrounds/blue-turquoise gradient_2.png")', width: "100%"}}>
      <img src="/animated/dripping/Dripping-Border_green.gif" alt="green dripping" className="absolute z-40 w-full" />

      <div className="flex items-center justify-between text-3xl text-yellow-100 pt-44 text-justify md:py-50 md:px-5 w-full">

        <div className='text-8xl border-2 border-solid border-yellow-100 px-20 py-5 mt-10 italic bg-indigo-800 bg-opacity-50'>
          faq
        </div>

        <img src="/animated/TV.gif" alt="TV" className="w-1/4" />


      </div>
      <Accordions />
    </div>
  )
}
