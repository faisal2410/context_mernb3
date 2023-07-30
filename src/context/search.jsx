/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {useState,createContext,useContext} from 'react';

const SearchContext=createContext()

const SearchProvider=({children})=>{
    const [search, setSearch]=useState({
        searchText:"Bangladesh"
    })

    return (
        <SearchContext.Provider value={[search,setSearch]}>
        {children}

        </SearchContext.Provider>
    )
}

const useSearch=()=>useContext(SearchContext)

export {useSearch, SearchProvider}