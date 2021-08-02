import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { FigContext } from "../Build/FigProvider"

export const FigCard = ({ savedFig }) => {

const { removeFig, collections, getCollections, 
    addFigToCollection, removeFigFromCollection, } = useContext(ProfileContext)
const { parts, getParts } = useContext(CollectionContext)
const { updateFig } = useContext(FigContext)

useEffect(() => {
getCollections()
  }, [])

const handleControlledInputChange = (event) => {
    const newFig = {...savedFig}
    newFig.collectionId = parseInt(event.target.value)
    updateFig(newFig)
}

const handleClickRemoveFig = () => {
    removeFigFromCollection(savedFig.id)
}

return (
    <>
    {savedFig.img? 
    <div class="column is-2">
        <img class = "image is-3by-4" src={savedFig.img}/>
    </div>
    : 
    <div class="column is-2">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId)?.img}/>
    </div>}
    <div class="column is-2 my-2 height">
        Name
        <text class="textarea is-small my-1">{savedFig.name}</text>
        Description
        <text class="textarea is-small my-1">{savedFig.description}</text>
        <div class="select">
                        <select onChange={(event) => handleControlledInputChange(event)}>
                            <option value="null">Change Collection</option>
                             {collections.map(collection => {
                                return <option name={collection.name} key={collection.id} value={collection.id}>
                                {collection.name}
                                </option>
                            })}
                            {savedFig.collectionId ===0? null : <option value="0">Remove From Collection</option>}
                        </select>
                    </div>
        <button class="button is-danger is-small mt-2" onClick={event => {
            event.preventDefault()
            handleClickRemoveFig()
        }}>
            Delete Minifigure
        </button>
    </div>
    
    </>
)}  
