import { faChevronDown, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MenuItem = ({ children, isHovered, setIsHovered, index }) => (
  <p
    onMouseEnter={() => setIsHovered(index)}
    onMouseLeave={() => setIsHovered(null)}
    className="w-full h-12 relative overflow-hidden hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3"
  >
    {children}
    <FontAwesomeIcon
      className={`absolute transition-all duration-300 ${isHovered === index ? 'right-3' : '-right-4'}`}
      icon={faChevronRight}
    />
  </p>
);

const Menu = () => {
  const [space, setSpace] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="text-[#9fadbc] w-full tablet:w-[35%]">
      <div className="flex flex-col border-b border-b-[#44484b95] select-none pb-3">
        <Link to="/boards">Доски</Link>
        <Link to="/templatest">Шаблоны</Link>
        <Link to="/">Главная страница</Link>
      </div>
      <p className="select-none text-sm pt-5">Рабочие пространства</p>
      <div
        onClick={() => setSpace(!space)}
        className="flex text-[#9fadbc] hover:bg-[#a0a0a03d] h-10 mt-3 cursor-pointer rounded-lg gap-3 items-center"
      >
        <b className="bg-gradient-to-l to-blue-600 text-black items-center justify-center text-xl rounded-xl from-blue-500 flex h-full w-[45px]">
          P
        </b>
        <div className="flex justify-between w-[300px] px-2 items-center">
          <p className="text-sm font-bold">Рабочее пространство Trello</p>
          <FontAwesomeIcon
            className={`transition-all transform ${space ? 'rotate-180' : 'rotate-0'} duration-300`}
            icon={faChevronDown}
          />
        </div>
      </div>

      <div
        className={`mt-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isRendered ? 'block' : 'hidden'} relative`}
      >
        <Link to="/boards">Доски</Link>
        <p className="w-full h-12 hover:bg-[#a0a0a03d] flex items-center rounded-lg px-3">Важные события</p>
        <MenuItem isHovered={isHovered} setIsHovered={setIsHovered} index={0}>
          Представления
        </MenuItem>
        <MenuItem isHovered={isHovered} setIsHovered={setIsHovered} index={1}>
          Участники <FontAwesomeIcon className="absolute right-10" icon={faPlus} />
        </MenuItem>
        <MenuItem isHovered={isHovered} setIsHovered={setIsHovered} index={2}>
          Настройки
        </MenuItem>
      </div>
    </div>
  );
};

export default Menu;
