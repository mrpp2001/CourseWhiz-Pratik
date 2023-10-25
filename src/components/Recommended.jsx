import React from 'react'
import {BiBookContent} from 'react-icons/bi'
import {AiOutlineClockCircle} from 'react-icons/ai'

const Recommended = () => {
  return (
    <>
   
   <div className='bg-white p-1 rounded-md text-left cursor-pointer'>
    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1416182974.1698257367&semt=sph" 
    className='rounded-md'
    alt="" />
    <div className="p-2.5 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="py-0.5 px-3 rounded-md text-blue-900 bg-blue-400">
              Development
            </p>
            <p className="">
              4.5 ⭐ <span>(24)</span>
            </p>
          </div>
          <p className="text-black font-bold text-lg">Beginner's Photography: Basic Camera Use and Theory</p>
          <div className="flex justify-between">
            <p className="flex gap-1">
              <BiBookContent className="text-l my-1 text-orange-300" /> 24 Lessons
            </p>
            <p className="flex gap-1">
              <AiOutlineClockCircle className="text-l my-1 text-orange-300" /> 12hr 30mins
            </p>
          </div>

          <div className="flex justify-between  mt-2">
            <p >by John Doe</p>
            <p><span className="font-bold text-black">$5.45</span> <span className="line-through ">$5.45</span></p>
          </div>
        </div>
   </div>
    
    </>
  )
}

export default Recommended