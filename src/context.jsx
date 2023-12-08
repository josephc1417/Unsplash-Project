import { createContext, useContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
     const greeting = 'hello';

     const [isDarkTheme, setIsDarkTheme] = useState(false)

     const toggleDarkTheme = () => {
       const newDarkTheme = !isDarkTheme;
       setIsDarkTheme(newDarkTheme);
       const body = document.querySelector('body');
       console.log(body);
       body.classList.toggle('dark-theme',newDarkTheme);
       console.log(body);
     }
     

     return (
          <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>{children}</AppContext.Provider>
     );
}
export const useGlobalContext = () => {
     return useContext(AppContext);
}
