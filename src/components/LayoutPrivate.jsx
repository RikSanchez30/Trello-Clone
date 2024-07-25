import Header from './Header'
import { Outlet } from 'react-router-dom'
import HeaderPrivate from './HeaderPrivate'


const LayoutPrivate = () => {
  return (
 
    <div>
        <HeaderPrivate/>
        <Outlet/>
    </div>
  
  )
}

export default LayoutPrivate
