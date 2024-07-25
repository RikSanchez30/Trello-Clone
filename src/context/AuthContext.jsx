import { createContext, useEffect, useState } from "react"




export const AuthContext = createContext() 

const AuthProvider = ({children}) => {
    const token = JSON.parse(localStorage.getItem('token'))
     const [isAuth, setIsAuth] = useState(token ? true : false);


  
   


  return (
     <AuthContext.Provider value={{isAuth,setIsAuth }}>
        {children}
     </AuthContext.Provider>
    )
}

export default AuthProvider
