/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";


const UserContext=createContext()

const UserProvider=({children})=>{
    const [user,setUser]=useState("Moha Ostad Learner");

    // faksdfaj

    return (
        <UserContext.Provider value={[user,setUser]}>
{children}
        </UserContext.Provider>
    )

}

const useUser=()=>useContext(UserContext)



export {useUser,UserProvider}

