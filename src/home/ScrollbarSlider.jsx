import React from 'react'
import { Scrollbar } from 'swiper/modules'
import App from '../components/ScrollBar'

const ScrollbarSlider = () => {
  return (
    <div className='laptop:container py-10'>

        <div className="w-full">
            <b className="text-lg">TRELLO В ДЕЙСТВИИ</b>   
            <h2 className="laptop:text-[50px] text-[24px] tablet:text-[30px] font-bold tablet:w-[60%]  text-balance">Рабочие процессы для проектов любого масштаба</h2>

        </div>
        <div className='h-auto'>
        <App/>  
        </div>
        <div className='flex-col flex tablet:flex-row justify-between gap-5 items-center mt-8'>
          <p className='text-xl w-full tablet:w-2/3'>Нет необходимости начинать с нуля. Ускорьте свой рабочий процесс с помощью проверенного руководства, разработанного для разных команд. Настройте его так, чтобы оно стало вашим.
</p>
<button className='bg-white border border-blue-700 h-16 text-xl rounded-lg tablet:px-2 active:scale-95 hover:bg-blue-100'>Изучите все варианты использования</button>
        </div>

    </div>
  )
}

export default ScrollbarSlider