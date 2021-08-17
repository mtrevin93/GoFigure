import React, { useState, createContext } from "react"

import { apikey } from "../apikey"

export const BrickContext = createContext()

//SearchProvider export handles calls for minifig searching by theme or term & destructuring found minifigs into parts
export const BrickProvider = (props) => {

    const [ searchTerms, setSearchTerms ] = useState("")
    const [ figSearch, setFigSearch ] = useState([])
    const [ partSearch, setPartSearch ] = useState([])
    const [ themes, setThemes ] = useState([])
    const [ figNum, setFigNum ] = useState([])

    const getThemes = () => {
        return fetch(`https://rebrickable.com/api/v3/lego/themes/?key=${apikey}&page=1&page_size=1000`)
        .then(res => res.json())
        //Pass anonymous function into .then that calls setThemes so we can pass it an argument
        .then((themes) => setThemes(themes.results))
    }

    const getMinifigsByTheme = (themeId, page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=${apikey}&page=${page}&page_size=20&in_theme_id=${themeId}`)
        .then(res => res.json())
        .then((figs) => setFigSearch(figs.results))
    }

    const getMinifigsBySearch = ([terms],page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=${apikey}&page=${page}&page_size=20&search=${terms.length=0? terms[0] : terms[0] + terms.slice(1).map(term => `%20${term}`)}`)
        .then(res => res.json())
        .then(setFigSearch)
    }

    const getFigNum = (setNum) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/${setNum}/parts/?key=${apikey}`)
        .then(res => res.json())
    }

    const getPartsBySearch = (categoryId, term) => {
        return fetch(`https://rebrickable.com/api/v3/lego/parts/?key=${apikey}&part_cat_id=${categoryId}&search=${term}`)
        .then(res => res.json())
        .then((parts) => setPartSearch(parts.results))
    }
    

    return (
        <BrickContext.Provider value={{
            themes, getThemes, getMinifigsByTheme, getMinifigsBySearch, getFigNum, searchTerms, setSearchTerms, figSearch, setFigSearch, setFigNum, figNum,
            partSearch, setPartSearch, getPartsBySearch
        }}>
            {props.children}
        </BrickContext.Provider>
    )
}
