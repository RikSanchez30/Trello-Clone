import React from 'react'

const Development = () => {
  return (
    <div className='laptop:container w-full flex flex-col  gap-16'>
        <div>
       <p className='text-[24px] font-medium '> 
        ЭФФЕКТИВНЫЕ СПОСОБЫ РОСТА
       </p> 
<h2 
className='
text-
laptop:text-[45px]
text-balance
w-full
'

>
       Делайте больше вместе с Trello
</h2>
<p
className='

text-balance 
text-[22px] 
w-full
laptop:w-1/2
pt-7
'
>
  Интуитивно понятные функции Trello позволяют команде быстро настроить любые рабочие процессы.
</p>
</div>
<div className='grid w-full items-center grid-cols-auto-fill   gap-5 justify-center '>
    <div className='w-[300px]  tablet:m-0  rounded-lg text-balance bg-blue-50 p-2  flex flex-col m-auto justify-center items-center  gap-4 text-xl'>
        <img className='w-[130px]' src="/Integrations_Puzzle.svg" alt="" />
        <h2 className='text-xl'>Интеграции</h2>
        <p>
        Вы можете подключить к рабочему процессу Trello приложения, которыми уже пользуется команда, или добавить улучшения Power-Up для тонкой настройки под конкретные задачи.
        </p>
        <button className="px-4 py-3 rounded-lg active:scale-95 border border-blue-700">Просмотрите интеграции</button>
    </div>
    <div className='w-[300px]  tablet:m-0  rounded-lg text-balance bg-blue-50 p-2  flex flex-col m-auto justify-center items-center  gap-4 text-xl'>
        <img className='w-[130px]' src="/Gears.svg" alt="" />
        <h2 className='text-2xl'>Автоматизация Butler</h2>
        <p>
        Во все доски Trello встроена автоматизация, не требующая навыков программирования. Сосредоточьтесь на самом важном, а все остальное пусть делают роботы.
        </p>
        <button className="px-5 py-3 rounded-lg active:scale-95 border border-blue-700">Познакомьтесь с автоматизацией</button>
    </div>
    <div className='w-[300px]  tablet:m-0  rounded-lg text-balance bg-blue-50 p-2  flex flex-col m-auto justify-center items-center  gap-4 text-xl'>
        <img className='w-[130px]' src="/Search_Value.svg" alt="" />
        <h2 className='text-xl'>Trello Enterprise</h2>
        <p>
        Популярный среди команд инструмент повышения производительности плюс все возможности для безопасного масштабирования.


        </p>
        <button className="px-5 py-3 rounded-lg active:scale-95 border border-blue-700">Ознакомьтесь с Trello Enterprise</button>
    </div>
</div>
    </div>
  )
}

export default Development