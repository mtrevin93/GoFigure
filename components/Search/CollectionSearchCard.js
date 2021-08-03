import React, { useContext, useEffect, useState } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const CollectionSearchCard = ({ minifig, types }) => {

const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
    getParts()
},[])

const getHeadwear = () => {
       
        const headwear = parts.find(part => part.id === minifig.headwearId)
        const newHeadwear = {...headwear}
            newHeadwear.id = null
            newHeadwear.userId = parseInt(sessionStorage.getItem("GoFigure_user"))
            newHeadwear.isAvailable = true

        if(parts.some(brick => brick.rebrickableId === newHeadwear.rebrickableId && brick.isAvailable && brick.userId === parseInt(sessionStorage.getItem("GoFigure_user")))){
            console.log("Part already in user inventory")
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHeadwear)
            })
        }
    }
    const getHead = () => {
        const head = parts.find(part => part.id === minifig.headId)
        const newHead = {...head}
            newHead.id = null
            newHead.userId = parseInt(sessionStorage.getItem("GoFigure_user"))
            newHead.isAvailable = true

        if(parts.some(brick => brick.rebrickableId === newHead.rebrickableId && brick.isAvailable && brick.userId === parseInt(sessionStorage.getItem("GoFigure_user")))){
            console.log("Part already in user inventory")
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHead)
            })
        }
    }
    const getTorso = () => {
        const torso = parts.find(part => part.id === minifig.torsoId)
        const newTorso = {...torso}
            newTorso.id = null
            newTorso.userId = parseInt(sessionStorage.getItem("GoFigure_user"))
            newTorso.isAvailable = true

        if(parts.some(brick => brick.rebrickableId === newTorso.rebrickableId && brick.isAvailable && brick.userId === parseInt(sessionStorage.getItem("GoFigure_user")))){
            console.log("Part already in user inventory")
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTorso)
            })
        }
    }
    const getLegs = () => {
        const legs = parts.find(part => part.id === minifig.legsId)
        const newLegs = {...legs}
            newLegs.id = null
            newLegs.userId = parseInt(sessionStorage.getItem("GoFigure_user"))
            newLegs.isAvailable = true

        if(parts.some(brick => brick.rebrickableId === newLegs.rebrickableId && brick.isAvailable && brick.userId === parseInt(sessionStorage.getItem("GoFigure_user")))){
            console.log("Part already in user inventory")
        }
        else{
        return fetch("http://localhost:8088/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLegs)
            })
        }
    }

const handleClickAddAllParts = () => {
    getHeadwear()
    getHead()
    getTorso()
    getLegs()

}

return (
    <>
    {minifig.img? 
    <div class="column is-3 my-2">
        <img class = "image is-3by-4 m-6" src={minifig.img}/>
    </div>
    : 
    <div class="column is-3 my-2">
        <img class = "image is-96x96" src={parts.find(part => part.id === minifig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === minifig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === minifig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === minifig.legsId)?.img}/>
    </div>}

    <div class="column is-1 my-2">
        <button class="button is-success mt-6" onClick={event => {
            event.preventDefault()
            handleClickAddAllParts()
        }}>
            Add Parts
        </button>
    </div>
    </>
)
}
