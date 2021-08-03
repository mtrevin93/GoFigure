import React, { useState, createContext } from "react"

export const BrickContext = createContext()

//SearchProvider export handles calls for minifig searching by theme or term & destructuring found minifigs into parts
export const BrickProvider = (props) => {

    const [ searchTerms, setSearchTerms ] = useState("")
    const [ figSearch, setFigSearch ] = useState([])
    const [ themes, setThemes ] = useState([])
    const [ figNum, setFigNum ] = useState([])

    const getThemes = () => {
        return fetch(`https://rebrickable.com/api/v3/lego/themes/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=1&page_size=1000`)
        .then(res => res.json())
        //Pass anonymous function into .then that calls setThemes so we can pass it an argument
        .then((themes) => setThemes(themes.results))
    }

    const getMinifigsByTheme = (themeId, page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&in_theme_id=${themeId}`)
        .then(res => res.json())
        .then((figs) => setFigSearch(figs.results))
        debugger
    }

    const getMinifigsBySearch = ([terms],page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&search=${terms.length=0? terms[0] : terms[0] + terms.slice(1).map(term => `%20${term}`)}`)
        .then(res => res.json())
        .then(setFigSearch)
    }

    const getFigNum = (setNum) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/${setNum}/parts/?key=67defb55cb3d7d95d714dbb8be7e2fe9`)
        .then(res => res.json())
        // .then(setFigNum)
    }

    return (
        <BrickContext.Provider value={{
            themes, getThemes, getMinifigsByTheme, getMinifigsBySearch, getFigNum, searchTerms, setSearchTerms, figSearch, setFigSearch, setFigNum, figNum
        }}>
            {props.children}
        </BrickContext.Provider>
    )
}
