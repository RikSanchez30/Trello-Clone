import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
    let submit = (e) => {
      e.preventDefault()
    }
     return (
    <>
    <div className='w-full bg-gradient-to-t  -z-40 from-purple-600 via-purple-500 to-pink-500'>
    <div className="mt-24 laptop:px-[90px] px-4  laptop:justify-center  laptop:container text-white flex flex-col laptop:flex-row justify-between  bg-cover bg-center items-center h-auto  laptop:h-[99vh]">
        <div className=" flex flex-col justify-between items-start gap-8 ">
            <h2 className='text-[35px] w-full'>Trello помогает собрать всех сотрудников, задачи и инструменты в одном месте</h2>
            <p className='text-[25px]'>Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</p>

            <form onSubmit={submit} className='flex flex-col gap-4 w-full laptop:w-1/2' >
                <input className='h-16 text-black outline-none p-2 rounded-lg' type="text" placeholder='Эл.почта' />
                <Link to={'/register'} className="h-16 flex items-center justify-center  rounded-lg active:scale-95  cursor-pointer bg-blue-400"> Зарегистрируйтесь — это бесплатно!</Link>
            </form>
        </div>
        <img className=' w-full laptop:w-1/2 items-end' src="/TrelloUICollage_4x.webp" alt="" />
    </div>
    
    </div>
    </>
  )
}

export default Auth