import React, { useContext, useEffect, useState } from "react"
import { BrickContext } from "./BrickProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const PartSearchCard = ({ part, types }) => {

const { getFigNum, figNum, setFigNum  } = useContext(BrickContext)
const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
    getParts()
},[])

const addPart = () => {
        
        const newPart = {
            "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
            "rebrickableId": part.part_num,
            "typeId":types.find(type => part.part_cat_id===type.rebrickableId).id,
            "img": part.part_img_url,
            "name": part.name,
            "bricklinkId": part.external_ids?.BrickLink? part.external_ids.BrickLink[0] : null,
            "isAvailable": true
        }
        if(parts.some(brick => brick.rebrickableId === part.part_num && brick.isAvailable && brick.userId === parseInt(sessionStorage.getItem("GoFigure_user")))){
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPart)
            })
        .then(getParts)
}
}

const handleClickAddAllParts = () => {
    console.log(types)
    addPart()
}

return (
    <>
    <div class="column is-2 my-2">
        <figure class="image is-square">
            <img src={part.part_img_url}/>
        </figure>
        <div class="box my-1">{part.name}</div>
    </div>
    <div class="column is-1 my-2">
        <button class="button is-success mt-6" onClick={event => {
            event.preventDefault()
            handleClickAddAllParts()
        }}>
            Add Part
        </button>
    </div>
    </>
)
}
