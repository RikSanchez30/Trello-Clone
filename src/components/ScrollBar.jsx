import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-grab relative h-[300px] mt-2 laptop:h-[330px] active:cursor-grabbing"
      >
    
        <SwiperSlide>
            <div className='   laptop:h-[280px]   tablet:h-auto shadow-lg border flex gap-2 flex-col justify-between pb-5 border-orange-200'>
               
               <div className="bg-orange-600 w-full h-12    ">

               </div>
               <div className='px-3 overflow-hidden line-clamp-5 text-balance'>
                <h2 className=' text-lg mt-[50px] laptop:text-3xl '>Управление проектами</h2>
                <p className=' text-sm  laptop:lg '>Поддерживайте порядок среди заданий, отслеживайте сроки и координируйте командную работу с помощью Trello.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='   laptop:h-[280px]  tablet:h-auto shadow-lg border flex gap-2 flex-col justify-between pb-5  border-orange-200'>
               
               <div className="bg-blue-600 w-full h-12 ">

               </div>
               <div className='px-3 overflow-hidden line-clamp-5 '>
                <h2 className='  text-lg mt-8 laptop:text-3xl  '>Встречи</h2>
                <p className='  text-sm  laptop:lg '>Сделайте собрания вашей команды более продуктивными, вдохновляющими и, осмелюсь сказать— веселыми.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='    laptop:h-[280px]  tablet:h-auto shadow-lg border flex gap-2 flex-col justify-between pb-5  border-orange-200'>
               
               <div className="bg-lime-500 w-full h-12 ">

               </div>
               <div className='px-3 overflow-hidden line-clamp-5 '>
                <h2 className='  text-lg  mt-8 laptop:text-3xl  '>Адаптация</h2>
                <p className='  text-sm  laptop:lg '>Благодаря визуальному расположению задач, ресурсов и отслеживанию прогресса Trello легко перейти в новую компанию или проект.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='    laptop:h-[280px]  tablet:h-auto shadow-lg border flex gap-2 flex-col justify-between pb-5   border-orange-200'>
               
               <div className="bg-yellow-600 w-full h-12 ">

               </div>
               <div className='px-3 overflow-hidden line-clamp-5 '>
                <h2 className='  text-lg mt-8 laptop:text-3xl  '>Управление задачами</h2>
                <p className='  text-sm  laptop:lg '>Используйте Trello для отслеживания, управления, выполнения и объединения задач, как кусочков пазла, и обеспечения постоянного успеха проектов вашей команды.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='   laptop:h-[280px]  tablet:h-auto shadow-lg border flex gap-2 flex-col justify-between pb-5  border-orange-200'>
               
               <div className="bg-cyan-600 w-full h-12 ">

               </div>
               <div className='px-3 overflow-hidden line-clamp-5 '>
                <h2 className=' text-lg mt-8 laptop:text-3xl '>Brainstorming</h2>
                <p className='  text-sm  laptop:lg  '>Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.</p>
                </div>
            </div>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
}
export default App
