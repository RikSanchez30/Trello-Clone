import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheck, faChevronDown, faChevronLeft, faChevronRight, faCircleQuestion, faEllipsisVertical, faMagnifyingGlass, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { StarsContext } from '../context/StarsContext';



const HeaderPrivate = () => {



  const { setIsAuth } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const email = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuth(false);
    navigate('/')
  };



  const [tab, setTab] = useState(false)
  const [ellipsis, setEllipsis] = useState(false)






  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  const notificationArr = [
    'Никогда',
    'Периодически',
    'Мгновенно',
  ];

  const [notification, setNotification] = useState('Периодически');
  const [view, setView] = useState(false);


  const notificatioN = (index) => {
    setView(false);
    setNotification(notificationArr[index]);
  };
  

  const {stars,setStars} = useContext(StarsContext)


  const starsClick = (index) => {
    const updatedStars = stars.map((star, i) => (i === index ? !star : star));
    setStars(updatedStars);
  };

  const [search, setSearch] = useState(false);

  

  return (
    <>
      <header className='transition px-2 tablet:px-5 duration-300 text-[#9FADBC]  h-24 flex items-center justify-between fixed z-[100] bg-[#1d2125] top-0 left-0 border-b border-b-[#44484b95]'>
        <div className=' h-24 flex items-center gap-2 justify-between w-full'>
          <div className='flex gap-4 items-center'>
            <Link to={'/'} className='flex flex-col items-center'>
              <h2 className='text-3xl tablet:block hidden font-bold'>Trello</h2>
              <h2 className='text-xl tablet:hidden block  font-bold'>T</h2>
            </Link>
            <nav className=' items-center flex gap-2'>
              <p onClick={() => handleClick(0)} className=' h-10 transition duration-300 cursor-pointer hidden tablet-xl:flex hover:bg-[#a0a0a03d]  items-center px-2 gap-3 rounded-lg'> Рабочие пространства <FontAwesomeIcon icon={faChevronDown} /> </p>

              {/*  handleClick dropdown num:0 */}
              <div className={` ${activeIndex === 0 ? 'flex' : 'hidden'} absolute  top-[98px] border border-[#9fadbc9e]   flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                <p className='text-[#9fadbc] cursor-default select-none px-1'>Ваши рабочие пространства</p>
                <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center'>
                  <b className='bg-gradient-to-l to-blue-600 text-black flex items-center justify-center text-3xl rounded-xl from-blue-500 h-12 w-[50px]'>P</b>
                  <p>Рабочее пространство Trello</p>
                </div>
              </div>

              <p onClick={() => handleClick(1)} className=' h-10 transition duration-300 cursor-pointer hidden laptop-lg:flex hover:bg-[#a0a0a03d] items-center px-2 gap-3 rounded-lg'> Недавние <FontAwesomeIcon icon={faChevronDown} /></p>

              {/*  handleClick dropdown num:1 */}

              <div className={` ${activeIndex === 1 ? 'flex' : 'hidden'} absolute left-[20%]  border border-[#9fadbc9e]  cursor-pointer top-[98px] flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center'>
                  <b className='bg-gradient-to-l to-blue-600 text-black flex items-center justify-center text-3xl rounded-xl from-blue-500 h-12 w-[50px]'>P</b>
                  <div className="">
                    <b>Project</b>
                    <p>Рабочее пространство Trello</p>
                  </div>
                </div>
                <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center'>
                  <b className='bg-gradient-to-l to-violet-600 text-black flex items-center justify-center text-3xl rounded-xl from-violet-500 h-12 w-[50px]'>K</b>
                  <div className="">
                    <b>Kanban Tempalate</b>
                    <p>Рабочее пространство Trello</p>
                  </div>
                </div>

              </div>

              <p onClick={() => handleClick(2)} className=' h-10 transition duration-300 cursor-pointer hidden desktop:flex hover:bg-[#a0a0a03d] items-center px-2 gap-3 rounded-lg'> В избранном <FontAwesomeIcon icon={faChevronDown} /></p>

              {/*  handleClick dropdown num:2 */}

              <div className={` ${activeIndex === 2 ? 'flex' : 'hidden'} w-[350px]  border border-[#9fadbc9e]  absolute left-[27%] top-[98px] flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                <img className='w-full object-contain select-none rounded-lg' src="https://trello.com/assets/cc47d0a8c646581ccd08.svg" alt="" />
                <div className=''>

                  <p className='text-center  text-[#9fadbc]'>Чтобы быстро находить важные доски, отмечайте их.</p>
                </div>
              </div>

              <p onClick={() => handleClick(3)} className=' h-10 transition duration-300 cursor-pointer hover:bg-[#a0a0a03d]  items-center hidden pc:flex px-2 gap-3 rounded-lg'> Шаблоны <FontAwesomeIcon icon={faChevronDown} /></p>

              {/*  handleClick dropdown num:3 */}

              <div className={` ${activeIndex === 3 ? 'flex' : 'hidden'} w-[300px] left-[36%] absolute  border border-[#9fadbc9e]   bg-[#1d2125] top-[98px] flex flex-col gap-2 p-3 rounded-lg`}>
                <p className='text-[#9fadbc] cursor-default select-none px-1'>При загрузке шаблонов произошла ошибка.</p>

              </div>
            
              <p onClick={() => handleClick(7)} className=' h-10 transition duration-300 cursor-pointer hover:bg-[#a0a0a03d] pc:hidden flex items-center px-2 gap-3 rounded-lg'> Больше <FontAwesomeIcon icon={faChevronDown} /></p>
                
                        {/*  handleClick dropdown num:7 */}

              <div className={` ${activeIndex === 7 ? 'flex' : 'hidden'} left-[18%] tablet-xl:left-[380px] laptop-lg:left-[530px] desktop:left-[700px] pc:hidden absolute  top-[98px] flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg `}>
          
              <p onClick={() => handleClick(8)} className=' h-10 w-64 transition duration-300 cursor-pointer  tablet-xl:hidden flex hover:bg-[#a0a0a03d]  items-center justify-between   px-2   gap-5 rounded-lg'> Рабочие пространства <FontAwesomeIcon icon={faChevronRight} /> </p>
             

             
              <p onClick={() => handleClick(9)} className=' h-10 w-64 transition duration-300 cursor-pointer  laptop-lg:hidden flex hover:bg-[#a0a0a03d] items-center justify-between   px-2   gap-5 rounded-lg'> Часто посещаемые доски <FontAwesomeIcon icon={faChevronRight} /></p>
             

             
              <p onClick={() => handleClick(10)} className=' h-10 w-64 transition duration-300 cursor-pointer  desktop:hidden flex hover:bg-[#a0a0a03d] items-center justify-between   px-2   gap-5 rounded-lg'> избранные <FontAwesomeIcon icon={faChevronRight} /></p>
             

             
              <p onClick={() => handleClick(11)} className=' h-10 w-64 transition duration-300 cursor-pointer hover:bg-[#a0a0a03d] items-center pc:hidden flex px-2  justify-between  gap-3   rounded-lg'> Шаблоны <FontAwesomeIcon icon={faChevronRight} /></p>




              </div>
                                         {/*  handleClick dropdown num:8 */}
                   
                                         <div className={` ${activeIndex === 8 ? 'flex' : 'hidden'} absolute  top-[98px] flex flex-col  left-[18%] tablet-xl:left-[380px] laptop-lg:left-[530px] desktop:left-[700px] pc:hidden gap-5 bg-[#1d2125] p-3 rounded-lg`}>
               <div className='flex items-center justify-between'>
         
               <div onClick={() => handleClick(7)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[12px]' icon={faChevronLeft} />
               </div>
               
               <p className='text-[#9fadbc] cursor-default font-bold select-none px-1'>Рабочие пространства</p>
               
                <div onClick={() => handleClick(8)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[14px]' icon={faXmark} />
               </div>
               
              </div>
              <div className="">
              <p className='text-[#9fadbc] text-sm font-semibold  cursor-default select-none pb-4 px-2'> Ваши рабочие пространства</p>
                <div className='flex text-[#9fadbc]  cursor-pointer  hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center'>
                  <b className='bg-gradient-to-l to-blue-600 text-black flex items-center justify-center text-3xl rounded-xl from-blue-500 h-12 w-[50px]'>P</b>
                  <p>Рабочее пространство Trello</p>
                </div>
                </div>
              </div>

                                        {/*  handleClick dropdown num:9 */}
                   
                                        <div className={` ${activeIndex === 9 ? 'flex' : 'hidden'} absolute  top-[98px]  left-[18%] tablet-xl:left-[380px] laptop-lg:left-[530px] desktop:left-[700px] pc:hidden flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                                        <div className='flex items-center justify-between'>
                                          <div onClick={() => handleClick(7)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[12px]' icon={faChevronLeft} />
               </div>

                <p className='text-[#9fadbc] cursor-default font-bold select-none px-1'>Часто посещаемые доски</p>
               
                <div onClick={() => handleClick(9)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[14px]' icon={faXmark} />
               </div>

              </div>
      {/* First Item */}
      <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center cursor-pointer'>
        <b className='bg-gradient-to-l to-blue-600 text-black flex items-center justify-center text-xl rounded-xl from-blue-500 h-8 w-[45px]'>P</b>
        <div className="text-sm">
          <b>Project</b>
          <p>Рабочее пространство Trello</p>
        </div>
        <FontAwesomeIcon
          onClick={() => starsClick(0)}
          className={stars[0] ? 'text-yellow-500' : ''}
          icon={faStar}
        />
      </div>

      {/* Second Item  */}
      <div className='flex text-[#9fadbc] hover:bg-[#a0a0a03d] px-1 rounded-lg gap-3 items-center cursor-pointer'>
        <b className='bg-gradient-to-l to-violet-600 text-black flex items-center justify-center text-xl rounded-xl from-violet-500 h-8 w-[45px]'>K</b>
        <div className="text-sm">
          <b>Kanban Template</b>
          <p>Рабочее пространство Trello</p>
        </div>
        <FontAwesomeIcon
          onClick={() => starsClick(1)}
          className={stars[1] ? 'text-yellow-500' : ''}
          icon={faStar}
        />
      </div>
              </div>

                                                      {/*  handleClick dropdown num:10 */}
                   
                                                      <div className={` ${activeIndex === 10 ? 'flex' : 'hidden'} absolute max-w-[350px]  left-[18%] tablet-xl:left-[380px] laptop-lg:left-[530px] desktop:left-[700px] pc:hidden  top-[98px] flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                                                      <div className='flex items-center justify-between'>
                                          <div onClick={() => handleClick(7)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[12px]' icon={faChevronLeft} />
               </div>

                <p className='text-[#9fadbc] cursor-default font-bold select-none px-1'>Избранные</p>
               
                <div onClick={() => handleClick(10)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[14px]' icon={faXmark} />
               </div>

              </div>
              <img className='w-full object-contain select-none rounded-lg' src="https://trello.com/assets/cc47d0a8c646581ccd08.svg" alt="" />
                <div className=''>

                  <p className='text-center  text-[#9fadbc]'>Чтобы быстро находить важные доски, отмечайте их.</p>
                </div>

              </div>

                                         {/*  handleClick dropdown num:11 */}
                   
                                         <div className={` ${activeIndex === 11 ? 'flex' : 'hidden'} absolute  top-[98px]  left-[18%] tablet-xl:left-[380px] laptop-lg:left-[530px] desktop:left-[700px] pc:hidden flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
                                         <div className='flex items-center justify-between'>
                                          <div onClick={() => handleClick(7)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[12px]' icon={faChevronLeft} />
               </div>

                <p className='text-[#9fadbc] cursor-default font-bold select-none px-1'>Шаблоны</p>
               
                <div onClick={() => handleClick(11)}   className='w-[20px] h-[20px] flex items-center justify-center rounded-sm cursor-pointer hover:bg-[#a0a0a03d]'>
               <FontAwesomeIcon className='cursor-pointer text-[14px]' icon={faXmark} />
               </div>

              </div>
              <p className='text-[#9fadbc] cursor-default select-none px-1'>При загрузке шаблонов произошла ошибка.</p>
              </div>


              <button className='bg-blue-500 text-[#393a3b] active:scale-95 rounded-lg py-2 hidden laptop:block  px-4'> Создать </button>
              <button className='bg-blue-500 text-[#393a3b] active:scale-95 rounded-lg py-1 block laptop:hidden text-xl px-3'> <FontAwesomeIcon icon={faPlus} /> </button>

            </nav>
          </div>
          <div className='flex items-center h-15  gap-4 '>
            <form className='flex h-14 items-center gap-0 '>
              <div  onClick={() => setSearch(!search)} className=' px-2 cursor-pointer laptop:border laptop:border-r-0  border-[#9FADBC] hover:bg-[#a0a0a03d] laptop:hover:bg-transparent h-[42px]     flex items-center justify-center laptop:rounded-l-lg'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>

              <input onClick={() => setSearch(!search)} className={` ${search ? 'w-full' : ''} bg-transparent border hidden laptop:block outline-none rounded-r-lg border-l-0 w-24  border-[#9FADBC] py-2 px-2`} type="text" placeholder='Поиск' />
            </form>
            <div className='w-6 h-6 flex items-center justify-center'>
            <FontAwesomeIcon onClick={() => handleClick(4)} className='text-lg  rounded-full w-full h-full hover:bg-[#a0a0a0a0]  text-[#9fadbc] cursor-pointer' icon={faBell} />
 </div>
            {/* notification dropdown num:4 */}
            <div className={`${activeIndex === 4 ? 'flex' : 'hidden'} border border-[#80808085] w-[100%] tablet:w-[600px] right-0 absolute top-[98px] flex flex-col gap-2 bg-[#1d2125] p-3 rounded-lg`}>
               <div className='flex flex-col tablet:flex-row items-center justify-between'>
                <p className='text-[#9fadbc] cursor-default text-2xl font-semibold select-none px-1'>Уведомления</p>
                <div className='flex items-center gap-2'>
                  <p className='w-[170px]'>Показывать только непрочитанные</p>
                  <div onClick={() => setTab(!tab)} className={`w-[55px] transition-all duration-300  ${tab ? 'bg-green-500' : 'bg-gray-500'}   relative text-black px-2 flex items-center justify-between h-8 rounded-2xl cursor-pointer bg-gray-500`} >
                    <FontAwesomeIcon icon={faCheck} />
                    <div className={`absolute transition-all duration-300 ${tab ? 'left-[30px]' : 'left-2'}  w-[20px] h-[20px] rounded-full bg-black `}></div>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  <div onClick={() => setEllipsis(!ellipsis)} className="hover:bg-[#a0a0a03d] cursor-pointer flex items-center text-2xl rounded-lg justify-center w-9 h-9">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>

                  <div className={` absolute p-3 right-1  w-[98%] tablet:w-[450px] left-[4px] tablet:left-[14%]  top-16 bg-[#1d2125] border border-[#80808085] rounded-lg text-[#9fadbc] ${ellipsis ? 'flex flex-col' : 'hidden'}`}>
                    <div className='flex items-center h-12 mb-8 justify-center w-full'>
                      <p className='text-xl select-none'>настройки уведомлений</p>
                      <FontAwesomeIcon onClick={() => setEllipsis(false)} className={'absolute cursor-pointer right-4 text-xl '} icon={faXmark} />
                    </div>

                    <div>
                      <p className='text-lg font-bold   w-full select-none'>Частота уведомлений по электронной почте</p>

                      <div className={"w-full"}>
                        <div onClick={() => setView(!view)} className={` select-none w-full h-10 border flex items-center justify-between  mb-2 px-3 text-lg cursor-pointer border-[#80808085] rounded-sm`}>
                          <p>{notification}</p>
                          <FontAwesomeIcon className={`  transform duration-300     ${view ? 'rotate-180 ' : 'rotate-[360deg]'}`} icon={faChevronDown} />

                        </div>
                        <div className={`w-full border  py-2  ${view ? 'block' : 'hidden'} absolute left-0 top-[58%] z-20  bg-[#1d2125] border-[#80808085] rounded-lg px-3`}>
                          {
                            notificationArr.map((item, index) => (
                              <p
                                key={index}
                                onClick={() => notificatioN(index)}
                                className={`cursor-pointer mb-1 rounded-lg  ${notification === index ? 'bg-[#00000068]' : ''} border-b hover:bg-[#00000068] border-black pb-1`}
                              >
                                {item}
                              </p>
                            ))
                          }

                        </div>
                      </div>

                    </div>
                    <div >
                      <p className={`cursor-pointer text-xl px-2 h-12 flex items-center justify-center mb-1 rounded-lg hover:bg-[#00000068] text-[#9fadbc] pb-1`}>Разрешить уведомления на рабочем столе</p>
                      <p className={`cursor-pointer relative text-xl px-2 h-12 flex items-center justify-center mb-1 rounded-lg hover:bg-[#00000068] text-[#9fadbc] pb-1`}>Все настройки уведомлений
                        <img className='absolute right-3 top-1/5' src="arrow-up-right.svg" alt="" />
                      </p>

                    </div>
                  </div>

                </div>

              </div>
              <div className='self-center flex flex-col pb-20 gap-8 mt-14'>
                <img className='m-auto select-none' width={150} src="https://trello.com/assets/ee2660df9335718b1a80.svg" alt="" />
                {tab ? <p className='text-center text-2xl font-semibold select-none'>Нет непрочитанных уведомлений</p> : <p className='text-center text-2xl font-semibold select-none'>Нет уведомлений</p>}
              </div>
            </div>

<div className='w-7 h-7 flex items-center justify-center'>
            <FontAwesomeIcon onClick={() => handleClick(5)} className='text-xl text-[#9fadbc] flex items-center justify-center  hover:border-4 rounded-full hover:border-[#a0a0a0a0]   cursor-pointer' icon={faCircleQuestion} />
</div>
            {/* notification dropdown num:5  */} {/* hind start */}
            <div className={` ${activeIndex === 5 ? 'flex' : 'hidden'} border border-[#80808085] flex flex-col  tablet:w-[480px] w-full tablet:right-1 right-0 absolute  top-[98px]  gap-2 bg-[#1d2125] p-3 rounded-lg`}>
              <div className='self-center flex flex-col cursor-pointer hover:bg-[#a0a0a03d] rounded-lg transition-all duration-300 pb-10 gap-3 '>
                <img className=' select-none rounded-lg w-full h-[200px]' src="https://trello.com/assets/77d4b431a528da2dd7c6.png" alt="" />
                <p className='text-center text-lg text-balance font-semibold select-none'>Подготовить команду к продуктивной работе с Trello очень просто — для этого воспользуйтесь нашими сборниками сценариев</p> 
              </div>
            </div>

            {/* hint end */}


            {/* User setting */}
            <div onClick={() => handleClick(6)} className={`w-6 h-6 tablet:w-10 tablet:h-10   cursor-pointer flex flex-col justify-between transition duration-100 `}>
              <img className='rounded-full select-none' src="userLogo.jpg" alt="" />
            </div>
          </div>
        </div>
      </header>
      {/* User setting sidebar */}
      <div
        className={`
      sidebar 
      bg-[#323c46] 
      p-4 
      rounded-lg 
      fixed 
      top-[97px]  
      right-0 
      z-10 
      overflow-y-hidden 
      tablet:w-[400px] 
      w-full
      transition 
      duration-700 
      flex-col
      text-[#9fadbc]
      ${activeIndex === 6 ? 'flex' : 'hidden'}`
        }>
        <div className={`gap-7 flex-col w-full items-start mb-4 `}>
          <h2 className='text-[#9fadbc] select-none'>УЧЕТНАЯ ЗАПИСЬ</h2>
          <div className='w-full'>
            <div
              className=' 
      text-[#9fadbc]
        flex 
        items-center
        gap-4'
            >
              <img className='w-14 h-14 cursor-default select-none rounded-full ' src="userLogo.jpg" alt="" />
              <div className='
       flex-col
        select-none
      text-[#9fadbc]
       flex'>
                <b className='text-xl'>{user?.fullName ? user?.fullName : user?.fullname }</b>
                <i>{email?.email}</i>
              </div>

            </div>
            <p className='py-3 text-[18px] hover:bg-[#85858528] cursor-pointer w-full px-4  mt-2'>Переключение аккаунтов</p>
            <p className='py-3 text-[18px] hover:bg-[#85858528] cursor-pointer w-full px-4  border-b border-b-[#7f8386]'>Управление аккаунтом</p>
          </div>

          <div className="w-full">
            <h2 className='uppercase font-semibold mt-1 select-none rounded-lg px-4'>trello</h2>
            <div className='w-full'>
              <p className='
  py-3 text-[18px] hover:bg-[#85858528] cursor-pointer rounded-lg w-full px-4'
              >Профиль и доступ</p>
              <p className='
          py-3 text-[18px] hover:bg-[#85858528] cursor-pointer rounded-lg w-full px-4  '
              >Действия</p>
              <p className='
  py-3 text-[18px] hover:bg-[#85858528] cursor-pointer w-full rounded-lg px-4'
              >Карточки</p>
              <p className='
          py-3 text-[18px] hover:bg-[#85858528] cursor-pointer rounded-lg w-full px-4  '
              >Настройки</p>
              <p className='
  py-3 text-[18px] hover:bg-[#85858528] cursor-pointer flex justify-between rounded-lg items-center w-full px-4  border-b border-b-[#7f8386]'
              >Выбор темы <FontAwesomeIcon icon={faChevronRight} /></p>

            </div>
          </div>

          <button onClick={logout} className="bg-red-600 text-white py-2 mt-2 px-4 rounded-lg active:scale-95">выйти</button>
        </div>
      </div>


    </>
  );
};

export default HeaderPrivate;
