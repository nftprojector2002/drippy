import { useState } from "react";
import "./mint.css";

export default function Mint() {
  const [ mintAmount, setMintAmount ] = useState(2);
  const [ totalPrice, setTotalPrice ] = useState(0.06);

    return (
      <div id="mint" className="justify-self-center flex pt-20"> 
        {/* <div className=""> */}
          <img src="/asset/drippysmiles_1.png" alt="smile1" className="invisible md:visible md:pt-32 md:px-10 md:w-1/3" />
        {/* </div> */}

        <div>
          <img src="/asset/flower1.png" alt="flower" className="z-50 absolute transform w-20 h-20 -translate-x-12 translate-y-5 md:-translate-x-20 md:translate-y-8 md:w-36 md:h-32" />

          <div className="justify-self-center border-solid border-4 border-indigo-900 rounded-3xl py-5 justify-items-center space-y-6 bg-gray-100 bg-opacity-70 w-64 md:w-96">

            {/* Max Button */}
            <div className="flex justify-center">
              <button className="border-solid border-4 border-indigo-900 rounded-full bg-pink-500 text-gray-100 py-2 text-xl p-2 font-macaria md:p-4 md:text-3xl ">max</button>
            </div>

            {/* Count */}
            <div className="w-full grid grid-cols-3 justify-items-center items-center">
              <div>
                <button className="border-solid border-4 border-indigo-900 rounded-full bg-pink-500 text-gray-100 pt-4 pb-1 px-5 text-2xl md:text-5xl font-macaria">-</button>
              </div>
              <div>
                <input className="border-solid border-4 border-indigo-900 rounded-full bg-gray-100 text-indigo-900 font-macaria w-full text-center text-2xl py-2 md:text-3xl md:pt-4 md:pb-3" value={mintAmount} />
              </div>
              <div>
                <button className="border-solid border-4 border-indigo-900 rounded-full bg-pink-500 text-gray-100 font-macaria py-2 pt-3 px-4 text-2xl md:text-5xl md:pt-4 md:pb-1">+</button>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 justify-items-center items-center font-macaria text-indigo-900 text-xl md:text-3xl">
              <div>Total</div>
              {/* Total */}
              <div className="">
                <input className="border-solid border-4 border-indigo-900 rounded-full bg-gray-100 text-indigo-900 font-macaria w-full text-center py-2 pt-3 md:pt-4 md:pb-3 md:text-3xl " value={totalPrice} />
              </div>
              {/* ETH */}
              <div>ETH</div>
            </div>

            
            {/* Mint Button */}
            <div className="flex justify-center">
              <button className="border-solid border-4 border-gray-900 rounded-full bg-indigo-900 text-gray-100 font-groovy text-3xl p-3 md:text-4xl md:p-5">Mint Now</button>
            </div>

          </div>

          <img src="/asset/flower2.png" alt="flower" className="absolute transform w-20 h-20 translate-x-325px -translate-y-150px md:translate-y-275px md:translate-x-325px md:w-36 md:h-32" />

        </div>

        {/* <div className="pt-24 px-10"> */}
          <img src="/asset/drippysmiles_3.png" alt="smile2" className="invisible md:visible  md:pt-32 md:px-10 md:w-1/3" />
        {/* </div> */}

      </div>
    );
}
