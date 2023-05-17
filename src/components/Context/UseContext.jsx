import { createContext, useState,useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [isRegister, setIsRegister] = useState(false);

  const [dark, setDark] = useState(true);
  const handleTheme = () => setDark(!dark);

  const [searchText, setSearchText] = useState('');
  const handleSearch = (e) => setSearchText(e)

    
      return (
        <MyContext.Provider value={{isRegister, setIsRegister, dark, handleTheme, searchText, setSearchText}}>
            {children}
        </MyContext.Provider>
      )

}