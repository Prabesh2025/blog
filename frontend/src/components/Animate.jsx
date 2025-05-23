import React from 'react'
import ball1Img from "../../src/assets/ball1.webp";
import car1Img from "../../src/assets/car1.webp";
import skateboard1Img from "../../src/assets/skateboard.webp";
import helmet1Img from "../../src/assets/helmet.webp";
import hat1Img from "../../src/assets/hat.webp";
import flower1Img from "../../src/assets/flower.webp";
import cup1Img from "../../src/assets/cup.webp";
import music1Img from "../../src/assets/music.webp";
import Marquee from "react-fast-marquee";

export default function Animate() {
  return (
    <div>
         <div className='border-none   mx-auto mt-10 mb-10 shadow-xl bg-gray-50  py-10 text-center'>
            

            <p className='text-xl font-semibold text-gray-600 hidden lg:block absolute ml-155 z-1'>@PrabeshxStudio</p>

            <p className='text-sm opacity-70 font-medium absolute z-1 ml-130 mt-8 font-mono hidden lg:block'>Join me on Instagram for a peek into my daily news!</p>

         
         <a href="https://www.instagram.com/n.prabesh/?igsh=MTF5anhjMHo2aWFieQ%3D%3D#">
         <button className='absolute border-none rounded-full px-10 py-2 bg-red-400  ml-150 mt-30 z-2 cursor-pointer hover:bg-gray-500 hidden lg:block'>Follow @Prabesh</button>
            </a>

         <Marquee pauseOnHover={true} speed={30}>
         
      <div className='flex items-center space-x-2 '>
           
           <img src={ball1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50 ml-2'/>
           <img src={car1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={skateboard1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50'/>
           <img src={helmet1Img} alt="" className='h-50 w-40 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={hat1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50 '/>
           <img src={ flower1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={cup1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50 '/>
           <img src={music1Img} alt="" className='h-50 w-40 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
          
      
      </div>
           
        
        
         </Marquee>
        </div>
        
    </div>
  )
}
