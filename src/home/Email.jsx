import React from 'react'
import { NavLink } from 'react-router-dom'

const Email = () => {
  return (
    <div className='w-full flex flex-col h-80 gap-6 mt-24 py-12   bg-gradient-to-l h-auto items-center justify-center text-white to-violet-700 from-pink-600'>
        <h2 className="text-[36px] font-semibold">Начните работу с Trello уже сегодня</h2>
        <form className='flex laptop:flex-row flex-col w-full laptop:w-[700px]  items-center gap-5'>
            <input className='py-3 w-4/5 laptop:w-1/2 px-2 text-black outline-none rounded-lg ' type="email" placeholder='Email' />
            <NavLink to={'/login'} className={`bg-blue-500 rounded-lg active:scale-95 w-4/5 laptop:w-1/2 text-white hover:bg-blue-700 py-3 px-2`}>
            Зарегистрируйтесь — это бесплатно!
            </NavLink>
        </form>
    </div>
  )
}

export default Email