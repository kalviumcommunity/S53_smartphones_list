import React, { useState,useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
export const AppContext=createContext()

const AppProvider=({children})=>{
    const [users,setUsers]=useState([]);
    const[value,setValue] =useState("");
    useEffect(()=>{
       axios.get('https://smartphones-list.onrender.com/data')
       .then(res=>setUsers(res.data))
    },[])

    return(
        <AppContext.Provider value={{setUsers,users,value,setValue}}>
          {children}
        </AppContext.Provider>
    )
}

export default AppProvider


