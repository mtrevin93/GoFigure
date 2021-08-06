import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { FigContext } from "../Build/FigProvider"

export const FigCard = ({ savedFig }) => {

const { removeFig, collections, getCollections, 
    addFigToCollection, removeFigFromCollection, updateFig} = useContext(ProfileContext)
const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
getCollections()
  }, [])

const handleControlledInputChange = (event) => {
    const newFig = {
        "userId": savedFig.userId,
        "headwearId": savedFig.headwearId,
        "headId": savedFig.headId,
        "torsoId": savedFig.torsoId,
        "legsId": savedFig.legsId,
        "name": savedFig.name,
        "description": savedFig.description,
        "img": savedFig.img,
        "collectionId": parseInt(event.target.value),
        "id": savedFig.id,
      }
    updateFig(newFig)
}

const handleClickRemoveFig = () => {
    removeFig(savedFig.id)
}

return (
    <>
    {savedFig.img? 
    <div class="column is-2">
        <img class = "image is-5by-6" src={savedFig.img}/>
    </div>
    : 
    <div class="column is-2 my-2">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId)?.img}/>
    </div>}
    <div class="column is-2 my-2 height">
        <p class="title">{savedFig.name}</p>
        <div class="box is-small my-1 mb-6">{savedFig.description}</div>
        <div class="select">
                        <select onChange={(event) => handleControlledInputChange(event)}>
                            <option value="null">Collection</option>
                             {collections.map(collection => {
                                return <option name={collection.name} key={collection.id} value={collection.id}>
                                {collection.name}
                                </option>
                            })}
                            {savedFig.collectionId ===0? null : <option value="0">Remove From Collection</option>}
                        </select>
        <button class="button is-danger is-small my-5" id={savedFig.id} onClick={event => {
            event.preventDefault()
            handleClickRemoveFig()}}>
            Delete
            </button>
                </div>
  
    </div>
    
    </>
)}  
