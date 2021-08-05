import React, { useContext } from "react"
import { CollectionContext } from "./CollectionProvider"

export const BrickCard = ({ part }) => {

const { updatePart } = useContext(CollectionContext)

const handleClickRemoveBrick = () => {
    const newPart = {...part}
    newPart.isAvailable = false
    updatePart(newPart)
}

return (
    <>
    <div class="column is-2 my-2 height">
        <figure class="image is-128x128">
            <img class= "image is-128x128" src={part.img}/>
        </figure>
        <div class="box box-radius-large my-1">{part.name}</div>
        <button class="button is-danger is-small is mt-2" onClick={event => {
            event.preventDefault()
            handleClickRemoveBrick()
        }}>
            Remove Part
        </button>
    </div>
    
    </>
)}  

