import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Root = () => {
  const {isAuth} = useContext(AuthContext)
  return  <div> { isAuth ? <PrivateRoutes/> : <PublicRoutes/> }</div>
  
}

export default Root