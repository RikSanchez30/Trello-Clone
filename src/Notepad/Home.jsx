import React, { useContext } from 'react';
import { StarsContext } from '../context/StarsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { stars, setStars } = useContext(StarsContext);

  const starsClick = (index) => {
    const updatedStars = stars.map((star, i) => (i === index ? !star : star));
    setStars(updatedStars);
  };

  return (
    <div className='flex justify-center  gap-20'>
      <div className='border-b border-b-black laptop:w-1/2 w-full tablet:w-3/4 flex flex-col gap-3 justify-center items-center rounded-lg'>
        <div className='w-full h-[130px] flex justify-center bg-[#38291e]'>
          <img className='h-full' src="https://trello.com/assets/e55b3540e5c1f06a51d7.svg" alt="" />
        </div>
        <b>Будьте в курсе всех дел</b>
        <p className='px-7 text-center text-balance pb-6'>
          Приглашайте людей на доски и карточки, оставляйте комментарии, добавляйте сроки, и мы отобразим здесь наиболее важные активности.
        </p>
      </div>
      <div className='hidden laptop:block'>
        <p className={'select-none pb-3'}>Недавно просмотренное
        </p>
        <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center cursor-pointer'>
          <b className='bg-gradient-to-l to-blue-600 text-black flex items-center justify-center text-xl rounded-xl from-blue-500 h-8 w-[45px]'>P</b>
          <div className="text-sm">
            <b>Project</b>
            <p>Рабочее пространство Trello</p>
          </div>
          <FontAwesomeIcon
            onClick={() => starsClick(0)}
            className={`cursor-pointer ${stars[0] ? 'text-yellow-500' : ''}`}
            icon={faStar}
          />
        </div>

        <div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
