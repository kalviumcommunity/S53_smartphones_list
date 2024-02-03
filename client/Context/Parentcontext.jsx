import React, { useState } from "react";
import { createContext } from "react";

export const AppContext=createContext()

const AppProvider=({children})=>{
    const [isDark,setIsDark]=useState(false);

    return(
        <AppContext.Provider value={{isDark,setIsDark}}>
          {children}
        </AppContext.Provider>
    )
}

export default AppProvider


