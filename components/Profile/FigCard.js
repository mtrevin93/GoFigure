import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const FigCard = ({ savedFig }) => {

const { removePart } = useContext(ProfileContext)
const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
getParts()
  }, [])

const handleClickRemoveFig = () => {
removePart(savedFig.id)
}

return (
    <>
    {savedFig.img? 
    <div class="column is-3">
        <img class = "image is-3by-4" src={savedFig.img}/>
    </div>
    : 
    <div class="column is-3">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId).img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId).img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId).img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId).img}/>
    </div>}
    <div class="column is-2 my-2 height">
        <text class="textarea is-small my-1">{savedFig.name}</text>
        <text class="textarea is-small my-1">{savedFig.description}</text>
        <button class="button is-danger is-small mt-2" onClick={event => {
            event.preventDefault()
            handleClickRemoveFig()
        }}>
            Delete Minifigure
        </button>
    </div>
    
    </>
)}  
