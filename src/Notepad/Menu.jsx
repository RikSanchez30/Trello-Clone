import { faChevronDown, faChevronRight, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [space, setSpace] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState(null);

  
  const getClick = (index) => {
    const updatedClick = clicks.map((click, i) => (i === index ? !click : click));
    setClicks(updatedClick);
  };

  useEffect(() => {
    if (space) {
      setIsRendered(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setIsRendered(false);
      }, 300);
    }
  }, [space]);

  return (
    <div className='text-[#9fadbc] w-full tablet:w-[35%]'>
      <div className='flex flex-col border-b border-b-[#44484b95] select-none pb-3'>
        <Link onClick={() => getClick(0)} className={` ${clicks === 0 ? 'bg-[#1919b159]' : 'bg-transparent'} w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3`} to={'/boards'}>Доски</Link>
        <Link onClick={() => getClick(1)} className={` ${clicks === 1 ? 'bg-[#1919b159]' : 'bg-transparent'} w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3`} to={'/templatest'}>Шаблоны</Link>
        <Link onClick={() => getClick(2)} className={` ${clicks === 2 ? 'bg-[#1919b159]' : 'bg-transparent'} w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3`} to={'/'}>Главная страница</Link>
      </div>
      <p className='select-none text-sm pt-5'>Рабочие пространства</p>
      <div onClick={() => setSpace(!space)} className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] h-10 mt-3 cursor-pointer rounded-lg gap-3 items-center'>
        <b className='bg-gradient-to-l to-blue-600 text-black  items-center justify-center text-xl rounded-xl from-blue-500 flex h-full w-[45px]'>P</b>
        <div className="flex justify-between w-[300px] px-2 items-center">
          <p className='text-sm font-bold'>Рабочее пространство Trello</p>
          <FontAwesomeIcon className={`transition-all transform ${space ? 'rotate-180' : "rotate-0"} duration-300`} icon={ faChevronDown} />
        </div>
      </div>

      <div className={`mt-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isRendered ? 'block' : 'hidden'} relative`}>
        <Link to={'/boards'} className='w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3'>Доски</Link>
        <p className='w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3'>Важные события</p>
        <p
          onMouseEnter={() => setIsHovered(0)}
          onMouseLeave={() => setIsHovered(null)}
          className='w-full h-12 relative overflow-hidden hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3'
        >
          Представления
          <FontAwesomeIcon
            className={`absolute transition-all duration-300 ${isHovered === 0 ? 'right-3' : '-right-4'}`}
            icon={faChevronRight}
          />
        </p>
        <p
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(null)}
          className='w-full h-12 relative overflow-hidden hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3'
        >
          Участники <FontAwesomeIcon className={`absolute right-10`} icon={faPlus} />
          <FontAwesomeIcon
            className={`absolute transition-all duration-300 ${isHovered === 1 ? 'right-3' : '-right-4'}`}
            icon={faChevronRight}
          />
        </p>
        <p
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(null)}
          className='w-full h-12 relative overflow-hidden hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3'
        >
          Настройки
          <FontAwesomeIcon
            className={`absolute transition-all duration-300 ${isHovered === 2 ? 'right-3' : '-right-4'}`}
            icon={faChevronRight}
          />
        </p>
      </div>
    </div>
  );
};

export default Menu;
