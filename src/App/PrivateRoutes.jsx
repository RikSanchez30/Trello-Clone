import { Route, Routes } from 'react-router-dom'
import NotPage from '../pages/NotPage'
import HomePage from '../pages/Homepage'
import LayoutPrivate from '../components/LayoutPrivate'
import Templatest from '../pages/TemplatestPage'
import SearchPage from '../pages/SearchPage'
import BoardsPage from '../pages/BoardsPage'


const PrivateRoutes = () => {
  return (
   <Routes>
    <Route                    element={<LayoutPrivate/>} >
    <Route path='/'           element={<HomePage     />}/>
    <Route path='/templatest' element={<Templatest   />}/>
    <Route path='/search'     element={<SearchPage   />}/>
    <Route path='/boards'     element={<BoardsPage   />}/>
    </Route>
    <Route path='*'           element={<NotPage/>}   />
   </Routes>
  )
}

export default PrivateRoutes