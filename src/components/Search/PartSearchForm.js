import React, { useState, useContext, useEffect } from "react"
import { BrickContext } from "./BrickProvider"
import { PartSearchList } from "./PartSearchList"
import { ProfileContext } from "../Profile/ProfileProvider"
import { useHistory } from "react-router-dom"

export const PartSearchForm = () => {

    const { getPartsBySearch  } = useContext(BrickContext)
    const { users, getUsers, savedFigs, getSavedFigs } = useContext(ProfileContext)
    const [ partTypes, setPartTypes ] = useState([])
    const { partSearch } = useContext(BrickContext)
    const [ partSearchTerms, setPartSearchTerms ] = useState([])

    const history=useHistory()

    useEffect(() => {
    }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const id = parseInt(event.target.id)
        if (!partTypes.includes(id)){
            partTypes.push(id)
        }
        else if (partTypes.includes(id)){
            partTypes.pop(id)
        }
    }
    
const handleClickFindParts = () => {
    partTypes.map(partType => {
        getPartsBySearch(partType, partSearchTerms)
    })
}

const handleClickNavigate = () => {
    history.push("/search")
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
                <label class="label">Search for Parts</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Enter Search Term"
                    onChange={(event) => setPartSearchTerms(event.target.value)} autoFocus/>
                </div>
            </div>

            <div class="field column is-one-eigth ml-3 mr-3 mt-6">    
                        Select a Part Type
                            <fieldset>
                                <label class="headwear__label">Headwear</label>
                                <input type="checkbox" name="headwear" id="59" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="headwear__label">Head</label>
                                <input type="checkbox" name="head" id="60" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="headwear__label">Torso</label>
                                <input type="checkbox" name="torso" id="61" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="headwear__label">Legs</label>
                                <input type="checkbox" name="legs" id="65" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
            </div>

            <div class="column is one-eigth mt-6">
                <button class="button is-info is-medium is-rounded mt-5 mr-6" onClick={event => {
                    event.preventDefault()
                    handleClickFindParts()
                }}>
                Search For Parts
                </button>
            </div>
            </div>
            <PartSearchList parts={partSearch}/>
            <button class="button is-info is-warning is-rounded m-6" onClick={event => {
                    event.preventDefault()
                    handleClickNavigate()
                }}>
                    Search By Minifigure
            </button>

    </>
)
}