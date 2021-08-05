import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { BrickContext } from "./BrickProvider"
import { SearchList } from "./SearchList"
import "./MinifigSearchForm.css"
import { ProfileContext } from "../Profile/ProfileProvider"

export const MinifigSearchForm = () => {

    const { themes, searchTerms, setSearchTerms, getThemes, getMinifigsByTheme, figSearch, setFigSearch } = useContext(BrickContext)
    const { collections, users, getCollections, getUsers, savedFigs, getSavedFigs } = useContext(ProfileContext)
    const [ filteredThemes, setFilteredThemes ] = useState([])

    const history = useHistory()

    const [theme, setTheme] = useState({
        id: 0
    })
    const [collection, setCollection] = useState({
        id:null
    })
    const [ collectionSearch, setCollectionSearch ] = useState([])

    useEffect(() => {
        getThemes()
        .then(getUsers)
        .then(getCollections)
        .then(getSavedFigs)
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
        console.log(event.target.value)
        const id = parseInt(event.target.value)
        const specificEvent = event.target[id]
        if (specificEvent?.label?.includes("'")){
            const newCollection = {...collection}
            newCollection.id = id
            setCollection(newCollection)
        }
        else {
            const newTheme = {...theme}
            newTheme.id = id
            setTheme(newTheme)
    }
}

    const handleClickFindMinifigures = () => {
        
        if(collection.id !== null){
            const searchFound = collections.find(resource=>resource.id === collection.id)
            setFigSearch([])
            setCollectionSearch(searchFound)
        }
        else{
        setCollectionSearch([])
        {getMinifigsByTheme(theme.id, 1)}
        }

    const resetCollection = {
        id:null
    }
    const resetTheme = {
        id:0
    }
    setCollection(resetCollection)
    setTheme(resetTheme)
}   

const handleClickNavigate = () => {
    history.push("/search/part")
}

    return (
        <>
        
        <section class="hero is-link is-small m-3 mt-6">
  <div class="hero-body">
    <p class="title">
      Add LEGO Parts To Your Collection
    </p>
    <p class="subtitle m-1">
      Start By Searching For Minifigures by Theme
    </p>
  </div>
</section>

        <div class="columns is-multiline">

            <div class="field column is-one-half ml-6 mt-6">
                <label class="label">Search for Themes</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Search for a Theme"
                    id="themes" onChange={(event) => setSearchTerms(event.target.value)} autoFocus/>
                </div>
            </div>

            <div class="field column is-one-eigth ml-3 mr-3 mt-6">
                <label class="label"><br/></label>
                    <div class="control">
                        <div class="select">
                        <select onChange={handleControlledInputChange}>
                            <option value="0">Select a Theme</option>
                            {collections.map(collection => {
                                return <option name="collection" key={collection.id} value={collection.id}>
                                {users.find(user => user.id === collection.userId).name}'s "{collection.name}"
                                </option>
                            })}
                             {filteredThemes.map(theme => {
                                return <option name="theme" key={theme.id} value={theme.id}>
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
        <button class="button is-info is-warning is-rounded m-6" onClick={event => {
                    event.preventDefault()
                    handleClickNavigate()
                }}>
                    Search By Part
        </button>
            <SearchList collection={collectionSearch} minifigs={figSearch} savedFigs={savedFigs}/>
    </>
    
)
}