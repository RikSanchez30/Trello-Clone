import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const TrafficProps = ({trafficName,trafficPrice,trafficUsers,trafficText,trafficBtn,trafficLink}) => {
  return (
    <div className='p-3 mt-20 flex flex-col justify-between border border-gray-300 h-[600px] pb-12'>
<div>
    <h1>{trafficName}</h1>

<div className='flex items-end font-semibold'>
    <p>$</p>
    <b className='text-[38px] font-semibold'>{trafficPrice}</b>
    <p>$</p>
</div>
<p className='text-gray-500 text-sm'>{trafficUsers}</p>
</div>

<p className='line-clamp-3'>{trafficText}</p>

<NavLink to={'/login'} className={' hover:bg-blue-200 cursor-pointer transition duration-500 border border-blue-600 bg-white w-3/4 flex items-center justify-center rounded-lg active:scale-95 self-center h-12  '} >{trafficBtn}</NavLink>
<a href='#' className='text-blue-500 underline self-center'>{trafficLink}</a>
    </div>
  )
}

export default TrafficProps