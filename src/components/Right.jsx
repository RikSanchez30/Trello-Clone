import React from 'react'

const Right = ({rSubTitle,rDesc,btn}) => {
  return (
    
         <div className='flex flex-col items-start w-[78%]  justify-between p-2 text-gray-500 rounded-lg gap-2 w-[300px]'>
        <div className='flex gap-2 border-b py-5 w-full border-b-violet-600 items-center '>
            <h2 className='text-[20px] font-bold'>{rSubTitle}</h2>
        </div>
        <p className='text-lg text-balance  '>{rDesc}</p>
        <button className='border h-14 px-2  border-cyan-700 w-4/4 hover:bg-blue-200 rounded-lg transition-all duration-200 w-full'>{btn}</button>
      </div>

    
  )
}

export default Right