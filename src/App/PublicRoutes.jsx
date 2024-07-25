
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Auth/HomePage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import NotPage from '../pages/NotPage';
import Layout from '../components/Layout';

const PublicRoutes = () =>  {
    return (
        <>
<Routes>
    <Route element={<Layout/>} >
   
    <Route path='/' element={<HomePage/>} />
 </Route>
     <Route path='/login' element={<LoginPage/>} />
    <Route path='/register' element={<RegisterPage/> } />
    
     <Route path='*' element={<NotPage/>} />

</Routes>
        </>
    );
}

export default PublicRoutes;