import React from 'react'
import TrafficProps from '../components/TrafficProps'

const Trafic = () => {
  return (
    <>
         <div className='bg-[#d2f8fa6e] h-auto   w-full shadow-blue-200 shadow'>
     <div className='w-full flex justify-center  '>
        <div className='max-w-[600px] flex gap-6 text-center flex-col items-center text-[23px]'>
            
           <h2 className='text-[38px]'>Trello по выгодной цене</h2>
           <p>Trello доверяют миллионы людей, ведь Trello открывает новые возможности для команд по всему миру.</p>
           <button className='bg-blue-600 border-none py-2 px-5 text-white rounded-lg active:scale-95'> сравните тарифные планы</button>
        </div>
     </div>


     <div className='grid grid laptop:container items-center justify-center grid-cols-auto-fit'>
       <TrafficProps trafficName={'бесплатно'} trafficPrice={'0'} trafficUsers={'Бесплатно для всей команды'} trafficText={'Для людей или команд, которые хотят организовать какой-либо проект.'} trafficBtn={'Начните работу'} />
       <TrafficProps trafficLink={'Подробнее о плане Standard'} trafficName={'STANDARD'} trafficPrice={'5'} trafficUsers={'За пользователя в месяц при годовой оплате ($6 ежемесячно)'} trafficText={'Для небольших команд, которым необходимо управлять задачами и масштабировать совместную работу.'} trafficBtn={'Зарегистрироваться сейчас'}  />
       <TrafficProps trafficLink={'Подробнее о плане Premium'}  trafficName={'PREMIUM'} trafficPrice={'10'} trafficUsers={'За пользователя в месяц при годовой оплате ($12.50 ежемесячно)'} trafficText={'Для команд, которым необходимо отслеживать и визуализировать множество проектов несколькими способами, в том числе в виде доски, хронологии, календаря и т. д.'} trafficBtn={'Попробуйте бесплатно'}  />
       <TrafficProps trafficLink={'Подробнее о плане Enterprise'}  trafficName={'ENTERPRISE'} trafficPrice={'17.50'} trafficUsers={'За пользователя в месяц при годовой оплате ($210.00 за пользователя ежегодно)'} trafficText={'Для организаций, которые хотят обеспечить совместную работу команд и повысить уровень безопасности и контроля.'} trafficBtn={'Обратная связь'}  />
     </div>
     </div>
    </>
  )
}

export default Trafic