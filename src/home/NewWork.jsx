import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NewWork = () => {
    return (
        <div className="bg-gradient-to-tr  gap-20 from-blue-400 to-blue-600 bg-left-top bg-no-repeat bg-contain flex flex-col laptop:h-[160vh] laptop:mb-[25vh] justify-start items-center ">
 
 <div className='self-center  text-center flex flex-col items-center justify-center gap-5 text-[26px]'>
    <h2 className='laptop:text-[40px] text-[25px]'>Взгляните на работу совершенно по-новому
   </h2>
    <p className='max-w-[850px] text-xl text-center'> Рассматривайте проекты команды со всех сторон. По-новому взгляните на поставленную задачу.</p>
    <button className='border border-blue-800 py-3 text-[20px] rounded-lg px-3 active:scale-95 bg-white max-w-[480px] '>Ознакомьтесь со всеми представлениями Trello</button>
 </div>
 <div className='w-[76%] shadow-2xl bg-white h-auto laptop:h-[650px] laptop:py-4 flex flex-col laptop:flex-row justify-between items-center laptop:px-4 rounded-sm  gap-5 '>

     <img className='laptop:h-[330px] w-full laptop:w-[47%] ' src="\TrelloBoard_Timeline_2x.webp" alt="" />
<article className='flex flex-col max-w-[550px] gap-5 text-sm laptop:text-[24px]'>
<b>ВСЕГДА СОБЛЮДАЙТЕ СРОКИ
</b>
<p>Представление «Хронология» помогает держать под контролем все задания, от еженедельных спринтов до ежегодного планирования. Быстро получайте представление о предстоящих задачах и выявляйте помехи, которые могут замедлить работу команды.

</p>

<a href="#" className='text-blue-500 border-b max-w-[470px] border-blue-500 inline-block'>Подробнее о представлении «Хронология»</a>
</article>
 </div>
 <div className='w-[76%] shadow-2xl bg-white h-auto laptop:h-[650px] laptop:py-4 flex flex-col-reverse laptop:flex-row justify-between items-center laptop:px-4 rounded-sm  gap-5 '>


<article className='flex flex-col max-w-[550px] gap-5 text-sm laptop:text-[24px]'>
<b>КОНТРОЛИРУЙТЕ ЗАДАНИЯ</b>
<p>Начинайте каждый день без сюрпризов. Представление «Календарь» дает максимально ясное представление о предстоящей работе, будь то составление тематического плана или контроль текущих задач.

</p>

<a href="#" className='text-blue-500 border-b max-w-[470px] border-blue-500 inline-block'>Подробнее о представлении «Календарь»

</a>
</article>
<img className='laptop:h-[350px]  w-full laptop:w-[47%]' src="\TrelloBoard_Calendar_2x.webp" alt="" />
</div>
</div>


 
    )
}

export default NewWork