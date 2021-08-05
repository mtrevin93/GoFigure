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
        setPartTypes(id)
    }
    
const handleClickFindParts = () => {

        getPartsBySearch(partTypes, partSearchTerms)

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
      Search For Individual Parts
    </p>
  </div>
</section>

            <button class="button is-info is-warning is-rounded m-6" onClick={event => {
                event.preventDefault()
                handleClickNavigate()
            }}>
                    Search By Minifigure
            </button>
        <div class="columns is-multiline">

            <div class="field column is-one-half ml-6 mt-6">
                <label class="label">Search for Parts</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Enter Search Term"
                    onChange={(event) => setPartSearchTerms(event.target.value)} autoFocus/>
                </div>
            </div>

            <div class="field column is-one-eigth ml-3 mr-3 mt-6">    
                        <div class="subtitle">Select a Part Type</div>
                        <div class="control">
                            <fieldset>
                                <label class="radio my-1">Headwear</label>
                                <input type="radio" name="slot" id="65" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="radio my-1">Head</label>
                                <input type="radio" name="slot" id="59" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="radio my-1">Torso</label>
                                <input type="radio" name="slot" id="60" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                            <fieldset>
                                <label class="radio my-1">Legs</label>
                                <input type="radio" name="slot" id="61" onChange={(event)=> handleControlledInputChange(event)}/>
                            </fieldset>
                        </div>
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

    </>
)
}