// src/context/StarsContext.js
import { createContext, useEffect, useState } from "react";

export const StarsContext = createContext();

const StarsProvider = ({ children }) => {
  const initialStars = JSON.parse(localStorage.getItem('stars')) || [false, false];
  const [stars, setStars] = useState(initialStars);

  useEffect(() => {
    localStorage.setItem('stars', JSON.stringify(stars));
  }, [stars]);

  return (
    <StarsContext.Provider value={{ stars, setStars }}>
      {children}
    </StarsContext.Provider>
  );
};

export default StarsProvider;
