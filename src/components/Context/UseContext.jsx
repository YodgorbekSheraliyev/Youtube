import { createContext, useState,useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({children}) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if(user) setUser(user);
          setUser(null);
      
          return unsubscribe;
        })
      })
      return (
        <MyContext.Provider value={{user, setUser}}>
            {children}
        </MyContext.Provider>
      )

}