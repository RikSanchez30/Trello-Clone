import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Menu from '../Notepad/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const SearchPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [product, setProduct] = useState([])
    const [isError, setIsError] = useState(false)



    const getData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search${location.search}`)
            setProduct(response.data.products)  
            if(response.data.products.length === 0){   
                 setIsError(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [location.search])

    return (
        <div className='w-full h-full'>
            <div className='text-[#9fadbc] w-full bg-[#1d2125] pt-32 flex flex-col '>
               
                    <Menu />
                
             
                <p className='text-3xl select-none my-5 self-end pr-5 font-semibold'>search result: {product.length}</p>
                       
                       {isError && <div className='w-full flex relative justify-center items-center h-[53.5vh]' >
                        <img className='absolute top-3 w-[230px] left-3' src="spider-web.svg" alt="" />
                        <img className='absolute bottom-3 w-[230px] left-3' src="spider-web.svg" alt="" />
                        <img className='absolute top-3 w-[230px] right-0' src="spider-web.svg" alt="" />
                        <img className='absolute bottom-3 w-[230px] right-0' src="spider-web.svg" alt="" />
                        <div className='flex items-center'>
                            <img src="spider-web.svg" alt="" />
                        <b className='text-[#9fadbc] text-6xl'>Товар не был найден! ''/ </b>
                      <img src="spider-web.svg" alt="" />  </div>
                      </div>}
                        <div className='grid px-5 grid-cols-auto-fit gap-3 text-[#9fadbc] bg-[#1d2125]'>
                            {product.map((value) => (
                                <div key={value.id} className="border border-[#0b38868f] rounded-lg p-2 text-[#9fadbc] bg-[#1d2125] h-full flex flex-col">
                                    <img className='object-contain w-full select-none' src={value.thumbnail} alt={value.title} height={100} />
                                    <div className="flex flex-col justify-between items-start h-full w-full gap-1">
                                        <div className='select-none'>
                                            <h2 className='line-clamp-1 text-2xl font-semibold'>{value.title}</h2>
                                            <p className='line-clamp-3 text-lg'>{value.description}</p>
                                        </div>
                                        <div className="flex text-xl justify-between w-full">
                                            <b>${Number(value.price).toLocaleString('ru')}</b>
                                        </div>
                                        <p>rating: {value.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
            </div>
        </div>
    )
}

export default SearchPage


