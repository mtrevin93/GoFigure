import React, { useState, createContext, useContext, useEffect } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { BrickContext } from "./BrickProvider"

export const MinifigSearchForm = () => {

    const { themes, getFigNum, searchTerms, setSearchTerms, getThemes, getMinifigsByTheme, figSearch } = useContext(BrickContext)
    const { getParts, types, setTypes, parts, setParts } = useContext(CollectionContext)

    const [ filteredThemes, setFilteredThemes ] = useState([])

    const [theme, setTheme] = useState({
        id: null
    })

    useEffect(() => {
        getThemes().then(console.log(filteredThemes))
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching themes
            const subset = themes?.results?.filter(theme => theme.name.toLowerCase().includes(searchTerms))
            setFilteredThemes(subset)
        } else {
            // If the search field is blank, display all themes
            setFilteredThemes(themes)
        }
    }, [searchTerms, themes])   
    
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const selectedTheme = { ...theme }
        /* Theme is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        selectedTheme[event.target.id] = event.target.value
        // update state
        setTheme(selectedTheme)
    }

    const handleClickFindMinifigures = () => {
        getMinifigsByTheme(theme.id, 1)
    }

    const getFigParts = (fig) => {
        const figNum = getFigNum(fig)
        figNum.results.map(fig => {
            types.find(type => (part.part_cat_id === type.id))
            const part = {
                "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
                "rebrickableId": part.part_num,
                "typeId":types.find(type => part.part_cat_id===type.rebrickableId).id,
                "img": part.part_img_url,
                "name": part.name
            }
            return fetch("http://localhost:8088/parts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(part)
                })
        })
        .then(getParts)
    }

    return (
        <>
        <div class="columns is-multiline">

            <div class="field column is-one-half ml-6 mt-6">
                <label class="label">Search for Themes</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Search for a Theme"
                    id="themes" onChange={(event) => setSearchTerms(event.target.value)} autoFocus/>
                </div>
            </div>

            <div class="field column is-one-eigth ml-3 mr-3 mt-6">
                <label class="label">Theme</label>
                <div class="control">
                    <div class="select" id="themeId" value={theme}>
                        <select id="theme" onChange={handleControlledInputChange}>
                            <option value="select">Select a Theme</option>
                            {filteredThemes.map(theme => (
                                <option key={theme.id} value={theme.id}>
                                {theme.name}
                                </option>
                            )
                            )}
                        </select>
                    </div>
                </div>
            </div>

            <div class="column is one-eigth mt-6">
                <button class="button is-info is-medium is-rounded mt-5 mr-6" onClick={event => {
                    event.preventDefault()
                    handleClickFindMinifigures()
                }}>
                        Find Minifigures
                </button>
            </div>

            <div class="column is one-fourth">
            </div>


        </div>
        </>
    )
}

