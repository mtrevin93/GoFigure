import React, { useState, createContext } from "react"

export const SearchContext = createContext()

//SearchProvider export handles calls for minifig searching by theme or term & destructuring found minifigs into parts
export const SearchProvider = (props) => {

    const [ figSearch, setFigSearch ] = useState([])
    const [ themes, setThemes ] = useState([])

    const getThemesBySearch = ([terms],page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&search=${terms.length=0? term : term[0] + terms.slice(1).map(term => `%20${term}`)}`)
        .then(res => res.json())
        .then(setThemes)
    }

    const getMinifigsByTheme = (themeId, page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&in_theme_id=${themeId}`)
        .then(res => res.json())
        .then(setSearch)
    }

    const getMinifigsBySearch = ([terms],page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&search=${terms.length=0? term : term[0] + terms.slice(1).map(term => `%20${term}`)}`)
        .then(res => res.json())
        .then(setSearch)
    }

    return (
        <SearchContext.Provider value={{
            getThemesBySearch, getMinifigsByTheme, getMinifigsBySearch
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

