import React from 'react'

const SubTitle = ({subTitle,desc}) => {
  return (
    <>
      
      <div className='flex flex-col p-2 cursor-pointer hover:bg-blue-50 text-gray-500 rounded-lg  gap-2 '>
        <div className='flex gap-2 items-center '>
            <h2 className='text-[20px] font-bold'>{subTitle}</h2>
        </div>
        <p className='text-sm '>{desc}</p>
      </div>

    </>
  )
}

export default SubTitle