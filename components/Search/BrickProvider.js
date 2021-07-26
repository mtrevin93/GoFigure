import React, { useState, createContext } from "react"

export const BrickContext = createContext()

//SearchProvider export handles calls for minifig searching by theme or term & destructuring found minifigs into parts
export const BrickProvider = (props) => {

    const [ figSearch, setFigSearch ] = useState([])
    const [ themes, setThemes ] = useState([])
    const [ bricks, setBricks ] = useState([])

    const getThemes = () => {
        return fetch(`https://rebrickable.com/api/v3/lego/themes/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=1&page_size=1000`)
        .then(res => res.json())
        .then(setThemes)
    }

    const getMinifigsByTheme = (themeId, page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&in_theme_id=${themeId}`)
        .then(res => res.json())
        .then(setFigSearch)
    }

    const getMinifigsBySearch = ([terms],page) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/?key=67defb55cb3d7d95d714dbb8be7e2fe9&page=${page}&page_size=20&search=${terms.length=0? terms[0] : terms[0] + terms.slice(1).map(term => `%20${term}`)}`)
        .then(res => res.json())
        .then(setFigSearch)
    }

    const getFigNum = (fig) => {
        return fetch(`https://rebrickable.com/api/v3/lego/minifigs/${fig.set_num}/parts/?key=67defb55cb3d7d95d714dbb8be7e2fe9`)
        .then(res => res.json())
        .then((fig) => {
            return fig
        }
        )}

    return (
        <BrickContext.Provider value={{
            getThemesBySearch, getMinifigsByTheme, getMinifigsBySearch, getFigNum
        }}>
            {props.children}
        </BrickContext.Provider>
    )
}
