import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
     const greeting = 'hello';

     const [isDarkTheme, setIsDarkTheme] = useState(false)

     const toggleTheme = () => {
       const newDarkTheme = !isDarkTheme;
       setIsDarkTheme(newDarkTheme);
     }
     }

     return (
          <AppContext.Provider value={{greeting}}>{children}</AppContext.Provider>
     );
}
export const useGlobalContext = () => {
     return useContext(AppContext);
}
