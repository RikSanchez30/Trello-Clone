import { useState, useEffect } from 'react'
import axios from 'axios'
import Menu from '../Notepad/Menu'
import Loader from '../components/Loaderj'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Templatest = () => {
  const [data, setData] = useState([])

  const getProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setData(response.data.products)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  

  useEffect(() => {
    getProduct()
  }, [])

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?q=${e.target.search.value}`)

  }

  return (
    <div className='text-[#9fadbc] bg-[#1d2125] pt-32 flex flex-col h-full'>
      <div className=" px-5 flex flex-col items-start gap-14">
        <Menu />
       <div className="w-full">
       <div className="flex-col-reverse mb-4 flex laptop:flex-row  justify-between w-full h-24 px-3">
          <h2 className='text-3xl select-none font-semibold'>Избранные категории</h2>
         <div className="">
          <form onSubmit={handleSearch} className='hover:border-[#5986d4c5] w-auto rounded-lg flex items-center border border-[#091e4283]  gap-0'>
           
            <input name='search' className='text-[#9fadbc] bg-[#22272b] h-12 rounded-l-lg outline-none  w-full laptop:w-[300px]  placeholder:text-[#9fadbc] px-2  ' type="text" placeholder='найти шаблон' />
             <button><FontAwesomeIcon  className='text-[#9fadbc] cursor-pointer bg-[#22272b] h-[46px] text-[10px] rounded-r-lg  w-[30px]  border-l-0 px-2  ' icon={faMagnifyingGlass} /></button>
         </form>
          </div>
          
        </div>
           <div className='grid grid-cols-auto-fit gap-3 text-[#9fadbc] bg-[#1d2125] '>
          
          {data.map((value) => (
            <div className="border border-[#0b38868f] rounded-lg justify-between p-2 text-[#9fadbc] bg-[#1d2125] laptop:h-[500px] flex flex-col" key={value.id}>
              <img className='object-contain w-full select-none' src={value.thumbnail} alt={value.title} height={100} />
              <div className="flex flex-col select-none justify-between items-start h-full w-full gap-1">
                <div className='select-none'>
                  <h2 className='line-clamp-1 text-2xl font-semibold'>{value.title}</h2>
                  <p className='line-clamp-2 text-lg'>{value.description}</p>
                </div>
                <div className="flex text-xl justify-between w-full">
                  <b className='text-green-600 text-2xl'>$ {Number(value.price).toLocaleString('ru')}</b>
                </div>
                <p className='text-xl select-none'>raiting: <span className={` font-bold tracking-wide ${value.rating >= 4 ? 'text-green-600' : 'text-red-600'}`}> {value.rating}</span></p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Templatest