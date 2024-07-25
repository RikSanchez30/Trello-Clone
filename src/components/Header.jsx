import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SubTitle from './SubTitle';
import Right from './Right'; 

const Header = () => {
  const [opportunities, setOpportunities] = useState(false);
  const [opportunitiesMobil, setOpportunitiesMobil] = useState(false);
  const [menu, setMenu] = useState(false);
  
  const accard = (index) => {
    setOpportunities( index === opportunities ? false : index );
  };

  const accardM = (index) => {
    setOpportunitiesMobil(index === opportunitiesMobil ? false : index);
  };

  return (
    <>
      <header className='transition duration-300 hover:shadow-[1px_28px_52px_-21px_rgba(84,_140,_184,_0.47)] h-24 flex items-center justify-between border-b fixed z-[100] bg-white top-0 left-0'>
        <div className='laptop:container h-24 flex items-center justify-between w-full'>
          <div className='flex gap-7 items-center'>
            <Link to={'/'} className='flex flex-col items-center'>
              <p className='absolute uppercase text-[17px] font-bold text-blue-700'>attlassion</p>
               <img width={150} src="/trello-logo.png" alt="" />
            </Link>
            <nav className='hidden laptop:flex gap-8'>
              <p onClick={() => accard(0)} className={`border-b-2 cursor-pointer ${opportunities === 0 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'} py-3 text-[18px] font-semibold hover:text-blue-700 uppercase`} >возможности</p>
              <p onClick={() => accard(1)} className={`border-b-2 cursor-pointer ${opportunities === 1 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'} py-3 text-[18px] font-semibold hover:text-blue-700 uppercase`} >решения</p>
              <p onClick={() => accard(2)} className={`border-b-2 cursor-pointer ${opportunities === 2 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'} py-3 text-[18px] font-semibold hover:text-blue-700 uppercase`} >планы</p>
              <NavLink to={'/price'} className='border-b-2 border-b-transparent py-3 text-[18px] font-semibold hover:text-blue-700 uppercase'>цены</NavLink>
              <p onClick={() => accard(3)} className={`border-b-2 cursor-pointer ${opportunities === 3 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'} py-3 text-[18px] font-semibold hover:text-blue-700 uppercase`}>ресурсы</p>
            </nav>
          </div>
          <div className='items-center hidden laptop:flex gap-3'>
            <NavLink to={'/register'} className='text-3xl laptop:text-[22px] font-semibold'>Войти</NavLink>
            <button className='flex items-center justify-center  text-xl tablet:text-2xl laptop:w-[119px] laptop:text-[18px] desktop:text-2xl desktop:w-auto font-semibold bg-[#5075ee] hover:bg-blue-900 h-24 px-3 text-[#ffffff]'>Получить Trello бесплатно</button>
          </div>
          {/* Burger menu */}
          <div onClick={() => setMenu(!menu)} className={`w-8 h-6 mr-5 laptop:hidden cursor-pointer flex flex-col justify-between transition duration-100 ${menu ? 'justify-center items-center' : ''}`}>
            <div className={`w-full h-[3px] bg-blue-700 transition duration-500 ${menu ? 'rotate-45 translate-y-1' : 'rotate-0'}`}></div>
            <div className={`w-full h-[3px] bg-blue-700 ${menu ? 'hidden' : 'block'}`}></div>
            <div className={`w-full h-[3px] bg-blue-700 transition duration-300 ${menu ? '-rotate-45 -translate-y-4' : 'rotate-0'}`}></div>
          </div>
        </div>
      </header>
      {/* Burger menu sidebar */}
      <div className={`sidebar bg-white laptop:hidden  p-4 fixed  left-0 z-10 overflow-y-hidden w-full transition duration-700 ${menu ? 'top-[9.5vh]' : '-top-[200vw]'} `}>
        <button onClick={() => setOpportunitiesMobil(false)} className={`bg-blue-400 py-2 px-8 text-white active:scale-95 my-5 ${!opportunitiesMobil ? 'hidden' : 'block'} `}>back</button>
        <div className={`flex gap-7 items-center mb-4 ${opportunitiesMobil ? 'hidden' : 'block'} `}>
          <nav className='flex w-full flex-col items-start gap-8'>
            <p onClick={() => accardM(0)} className={`cursor-pointer border-b-2 py-3 text-[24px] font-semibold hover:text-blue-700 uppercase h-20 w-full flex justify-between ${opportunitiesMobil === 0 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'}`}>возможности <span className='inline-block font-bold text-[30px]'>&gt;</span> </p>
            <p onClick={() => accardM(1)} className={`cursor-pointer border-b-2 py-3 text-[24px] font-semibold hover:text-blue-700 uppercase flex h-20 w-full justify-between ${opportunitiesMobil === 1 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'}`}>решения <span className='inline-block font-bold text-[30px]'>&gt;</span></p>
            <p onClick={() => accardM(2)} className={`cursor-pointer border-b-2 py-3 text-[24px] font-semibold hover:text-blue-700 uppercase flex justify-between h-20 w-full ${opportunitiesMobil === 2 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'}`}>планы <span className='inline-block font-bold text-[30px]'>&gt;</span> </p>
            <NavLink to={'/price'} className={`cursor-pointer py-3 text-[24px] font-semibold hover:text-blue-700 uppercase w-full h-20 `}>цены </NavLink>
            <p onClick={() => accardM(3)} className={`cursor-pointer py-3 text-[24px] font-semibold hover:text-blue-700 uppercase flex justify-between w-full h-20 ${opportunitiesMobil === 3 ? 'border-b-[#2380f8b7]' : 'border-b-transparent'}`}>ресурсы <span className='inline-block font-bold text-[30px]'>&gt;</span></p>
          </nav>
        </div>
        <div className='items-center flex flex-col-reverse gap-3'>
          <NavLink to={'/register'} className={`text-3xl border border-[#5075ee] font-semibold w-full h-24 flex items-center justify-center active:scale-95 duration-100`}>Войти</NavLink>
          <button className={`text-3xl w-full font-semibold bg-[#5075ee] h-24 px-3 text-white active:scale-95 transition duration-100`}>Получить Trello бесплатно</button>
        </div>
      </div>
      
      <div  onClick={(e) => accard(e.target.className === 'inner' ? setOpportunities(true) : setOpportunities(false) ) } className={`inner hidden laptop:flex flex-col w-full  transition-all absolute ${opportunities ? 'top-0 h-[280%]' : '-top-[100vw]'} fixed z-30 pt-[95px] bg-[#000000ab]`}>
        <div className={` bg-white flex gap-8 h-auto py-3 sticky z-50 transition duration-500 absolute ${opportunities ? 'top-[95px] z-50' : 'top-[-150vw]'} justify-between w-full`}>
          <div className='ml-[10%] pt-4'>
            <div className='flex gap w-5/6 place-self-center self-center border-b py-6'>
              <h2>Изучите функции, которые помогут привести вашу команду к успеху.</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 py-6'>
              <SubTitle subTitle={'Представления'} desc={'Отслеживайте работу над проектами своей команды, не упуская ни одной детали.'} />
              <SubTitle subTitle={'Автоматизация'} desc={'Автоматизируйте задачи и рабочие процессы с помощью Butler.'} />
              <SubTitle subTitle={'Улучшения'} desc={'Работайте эффективнее с плагинами Trello, подключив любимые инструменты команд.'} />
              <SubTitle subTitle={'Шаблоны'} desc={'Шаблоны'} />
              <SubTitle subTitle={'Интеграции'} desc={'Находите приложения, которыми ваша команда уже пользуется, или открывайте для себя новые способы эффективного решения задач с помощью Trello.'} />
            </div>
          </div>
          <div className='w-5/5 pt-4 px-7 bg-blue-100'>
            <Right rSubTitle={'Добро пожаловать в Trello'} rDesc={'С Trello выполнять задачи в срок просто. Все ваши проекты и рабочие процессы будут организованы. Зарегистрируйтесь, создайте доску и вперед — за продуктивностью!'} btn={'Ознакомьтесь с возможностями Trello'} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
