import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  // Массив доступных языков
  const langArr = [
    'Čeština', 
    'Deutsch', 
    'English', 
    'Español', 
    'Français', 
    'Italiano', 
    'Magyar', 
    'Nederlands', 
    'Norsk (Bokmål)', 
    'Suomi', 
    'Svenska', 
    'Tiếng Việt', 
    'Türkçe', 
    'Русский', 
    'Українська', 
    'India', 
    '中国（简体）', 
    '中国（繁體）', 
    '日本'
  ];

  const [lang, setLang] = useState('Русский');
  const [view, setView] = useState(false);

  
  const language = (index) => {
    setView(false); 
    setLang(langArr[index]); 
  };

  return (
    <div className='bg-[#172b4d] text-white w-full'>
      <div className="flex items-center w-full laptop:container gap-3">
        <div className="flex flex-col gap-3">
          <img className='w-36' src={'/logo.png'} alt="" />
          <NavLink className='pl-2' to='/login'>Войти</NavLink>
        </div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 w-full border-b border-b-2 border-b-gray-500  container items-center justify-between'>
          <div className="flex text-balance py-5 px-1  hover:bg-[#ffffff23] flex-col gap-4">
            <p>О Trello</p>
            <p>Что скрывается за досками.</p>
          </div>
          <div className="flex text-balance py-5 px-3 hover:bg-[#ffffff23] flex-col gap-4">
            <p>Вакансии</p>
            <p>Узнайте об открытых вакансиях в команде Trello.</p>
          </div>
          <div className="flex text-balance py-5 px-3 hover:bg-[#ffffff23] flex-col gap-4">
            <p>Приложения</p>
            <p>Загрузите приложение Trello для компьютеров или мобильных устройств.</p>
          </div>
          <div className="flex text-balance py-5 px-3 hover:bg-[#ffffff23] flex-col gap-4">
            <p>Обратная связь</p>
            <p>Что-нибудь нужно? Обращайтесь, мы поможем.</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-auto-fit gap-4 py-5  laptop:container justify-between'>
        <div className='relative grid grid-cols-auto-fit items-center   gap-5'>
        <div>  <div className=' cursor-pointer  flex items-center gap-3'  onClick={() => setView(!view)}>
          <FontAwesomeIcon icon={faGlobe} />
            <p>{lang}</p>
            <div className={` transform duration-300     ${view ? 'rotate-180 ' : 'rotate-[360deg]'}`}>
            <FontAwesomeIcon icon={faChevronDown} />
            </div>
          
          </div>
          <div className={`absolute bottom-9 scrollbar-gutter px-3 py-2 rounded-lg duration-300  ${view ? 'block' : 'hidden'} w-56 bg-[#00000067] backdrop-blur-lg`}>
            {langArr.map((item, index) => (
              <p key={index} onClick={() => language(index)} className='cursor-pointer border-b hover:bg-[#00000068] border-black pb-1'>{item}</p>
            ))}
          </div></div>
         
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
          <p>© Atlassian, 2023 г.</p>
        
        </div>
     

      </div>
    </div>
  );
};

export default Footer;
