import React, { useState, useContext, useEffect } from "react"
import { BrickContext } from "./BrickProvider"
import { SearchList } from "./SearchList"
import "./MinifigSearchForm.css"

export const MinifigSearchForm = () => {

    const { themes, getFigNum, searchTerms, setSearchTerms, getThemes, getMinifigsByTheme, figSearch, setFigSearch } = useContext(BrickContext)

    const [ filteredThemes, setFilteredThemes ] = useState([])

    const [theme, setTheme] = useState({
        id: 0
    })

    useEffect(() => {
        getThemes()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching themes
            const subset = themes.filter(theme => theme.name.toLowerCase().includes(searchTerms))
            setFilteredThemes(subset)
        } else {
            // If the search field is blank, display all themes
            setFilteredThemes(themes)
        }
    }, [searchTerms, themes])   
    
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        let selectedTheme = {...theme}
        /* Theme is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        selectedTheme.id = parseInt(event.target.value)
        // update state
        setTheme(selectedTheme)
    }

    const handleClickFindMinifigures = () => {
        getMinifigsByTheme(theme.id, 1)
    }

    return (
        <>
        <div class="header rows">
            <div class="row">
            <div class="title m-6">
                Search for Parts By Minifigure
            </div>
            </div>
            <div class="row m-6">
                <div className="wrg-toggle">
                <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    {/* <span>🌜</span> */}
                </div>
                <div className="wrg-toggle-uncheck">
                    {/* <span>🌞</span> */}
                </div>
                </div>
                <div className="wrg-toggle-circle"></div>
                <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
            </div>
        </div>

        </div>

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
                    <div class="select">
                        <select onChange={handleControlledInputChange}>
                            <option value="0">Select a Theme</option>
                             {filteredThemes.map(theme => {
                                return <option name={theme.name} key={theme.id} value={theme.id}>
                                {theme.name}
                                </option>
                            })}
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
        </div>
            <SearchList minifigs={figSearch}/>
    </>
)
}