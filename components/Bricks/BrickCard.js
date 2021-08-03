import React, { useContext } from "react"
import { CollectionContext } from "./CollectionProvider"

export const BrickCard = ({ part }) => {

const { removePart } = useContext(CollectionContext)

const handleClickRemoveBrick = () => {
    removePart(part.id)
}

return (
    <>
    <div class="column is-2 my-2 height">
        <figure class="image is-square">
            <img src={part.img}/>
        </figure>
        <text class="textarea is-small my-1">{part.name}</text>
        <button class="button is-danger is-small mt-2" onClick={event => {
            event.preventDefault()
            handleClickRemoveBrick()
        }}>
            Remove Part
        </button>
    </div>
    
    </>
)}  

