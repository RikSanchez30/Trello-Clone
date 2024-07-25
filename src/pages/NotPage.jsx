import React, { useContext } from 'react';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NotPage = () => {

  const {isAuth} = useContext(AuthContext)

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl animate-numColorChange gap-4    select-none flex  justify-center font-bold text-gray-300 relative  mb-16">
          4
          <span className="  animate-wiggle   transition    duration-[33s]   transform -translate-x-1/2">
            <FontAwesomeIcon icon={faGhost} className=" text-[150px] transition  duration-[3s]  animate-colorChange   " />
          </span>
          4
        </h1>
        <h2 className="text-3xl font-semibold text-3xl mb-4">Error: 404 page not found</h2>
        <p className="text-gray-400 text-xl">Sorry, the page you're looking for cannot be accessed</p>
      { isAuth ? '' : <NavLink to="/login" className="inline-block select-none transition duration-500 mt-4 px-6 py-3 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Login 
        </NavLink> } 
        <NavLink to="/" className="inline-block ml-3 select-none transition duration-500 mt-4 px-6 py-3 border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default NotPage;
