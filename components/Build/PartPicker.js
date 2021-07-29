import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { FigContext } from "./FigProvider"
import  "./PartPicker.css"

export const PartPicker = () => {

const { parts, getParts } = useContext(CollectionContext)

const history = useHistory()

useEffect(() => {
    getParts()
}, []) 

const myHeads = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.typeId === 2)
    
const myHeadwear = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.typeId === 1)

const myTorsos = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.typeId === 3)

const myLegs = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.typeId === 4)

    const { minifigure, setMinifigure } = useContext(FigContext)

    const [headwearCounter, setHeadwearCounter] = useState(0)
    const [headCounter, setHeadCounter] = useState(0)
    const [torsoCounter, setTorsoCounter] = useState(0)
    const [legsCounter, setLegsCounter] = useState(0)
    
      const downHeadCounter = () => {
    
        let newHeadCounter = parseInt(headCounter)
        newHeadCounter = newHeadCounter-1
        if(newHeadCounter < 0){
            newHeadCounter = myHeads.length-1
            setHeadCounter(parseInt(newHeadCounter))
        }
        setHeadCounter(parseInt(newHeadCounter))
    }
    
    const upHeadCounter = () => {
    
        let newHeadCounter = parseInt(headCounter)
        newHeadCounter = newHeadCounter + 1
        if(newHeadCounter === myHeads.length){
            newHeadCounter = 0
            setHeadCounter(parseInt(newHeadCounter))
        }
        setHeadCounter(newHeadCounter)
    }

const downLegsCounter = () => {
    
    let newLegsCounter = parseInt(legsCounter)
    newLegsCounter = newLegsCounter-1
    if(newLegsCounter < 0){
        newLegsCounter = myLegs.length-1
        setLegsCounter(parseInt(newLegsCounter))
    }
    setLegsCounter(parseInt(newLegsCounter))
}

const upLegsCounter = () => {

    let newLegsCounter = parseInt(legsCounter)
    newLegsCounter = newLegsCounter + 1
    if(newLegsCounter === myLegs.length){
        newLegsCounter = 0
        setLegsCounter(parseInt(newLegsCounter))
    }
    setLegsCounter(newLegsCounter)
}

const downTorsoCounter = () => {
    
    let newTorsoCounter = parseInt(torsoCounter)
    newTorsoCounter = newTorsoCounter-1
    if(newTorsoCounter < 0){
        newTorsoCounter = myTorsos.length-1
        setTorsoCounter(parseInt(newTorsoCounter))
    }
    setTorsoCounter(parseInt(newTorsoCounter))
}

const upTorsoCounter = () => {

    let newTorsoCounter = parseInt(torsoCounter)
    newTorsoCounter = newTorsoCounter + 1
    if(newTorsoCounter === myTorsos.length){
        newTorsoCounter = 0
        setTorsoCounter(parseInt(newTorsoCounter))
    }
    setTorsoCounter(newTorsoCounter)
}

const downHeadwearCounter = () => {
    
    let newHeadwearCounter = parseInt(headwearCounter)
    newHeadwearCounter = newHeadwearCounter-1
    if(newHeadwearCounter < 0){
        newHeadwearCounter = myHeadwear.length-1
        setHeadwearCounter(parseInt(newHeadwearCounter))
    }
    setHeadwearCounter(parseInt(newHeadwearCounter))
}

const upHeadwearCounter = () => {

    let newHeadwearCounter = parseInt(headwearCounter)
    newHeadwearCounter = newHeadwearCounter + 1
    if(newHeadwearCounter === myHeadwear.length){
        newHeadwearCounter = 0
        setHeadwearCounter(parseInt(newHeadwearCounter))
    }
    setHeadwearCounter(newHeadwearCounter)
}

const handleControlledHeadwearChange = (event) => {

    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    let newMinifigure = {...minifigure}
    const newPart = myHeadwear[headwearCounter]
    /* Minifigure is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newMinifigure.headwearId = newPart.id
    // update state
    setMinifigure(newMinifigure)
}
const handleControlledHeadChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    let newMinifigure = {...minifigure}

    const newPart = myHeads[parseInt(event.target.value)]
    /* Minifigure is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newMinifigure.headId = newPart.id
    // update state
    setMinifigure(newMinifigure)
}

const handleControlledTorsoChange = (event) => {

    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    let newMinifigure = {...minifigure}

    const newPart = myTorsos[parseInt(event.target.value)]
    /* Minifigure is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newMinifigure.torsoId = newPart.id
    // update state
    setMinifigure(newMinifigure)
}

const handleControlledLegsChange = (event) => {

    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    let newMinifigure = {...minifigure}

    const newPart = myLegs[parseInt(event.target.value)]
    /* Minifigure is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newMinifigure.legsId = newPart.id
    // update state
    setMinifigure(newMinifigure)
}

const navigate = () => {
    history.push("/build")
}

const checkHeadwear() => 
if(minifigure.headwearId === 0){
    let newMinifigure = {...minifigure}
    newMinifigure.headwearId = myHeadwear[0].id
    setMinifigure(newMinifigure)
}
if(minifigure.headId === 0){
    let newMinifigure = {...minifigure}
    newMinifigure.headId = myHeads[0].id
    setMinifigure(newMinifigure)
}
if(minifigure.torsoId === 0){
    let newMinifigure = {...minifigure}
    newMinifigure.torsoId = myTorsos[0].id
    setMinifigure(newMinifigure)
}
if(minifigure.legsId === 0){
    let newMinifigure = {...minifigure}
    newMinifigure.legsId = myLegs[0].id
    setMinifigure(newMinifigure)
}

return(
<>
    <section class="section">
    <h2 class="title m-3">
        Build a Minifigure
    </h2>
    <div class="columns is-multiline">
        <div class="column is-4 my-2">
            <div class="rows">
                <div class="headwear row m-3">
                    <button class="button is-primary m-5" id="headwearId" value={[headwearCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downHeadwearCounter()
                        handleControlledHeadwearChange(event)
                        }}>
                        Previous
                    </button>
                </div>
                <div class="head row m-3">
                    <button class="button is-primary m-5" id="headId" value={[headCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downHeadCounter()
                        handleControlledHeadChange(event)
                        }}>
                        Previous
                    </button>
                </div>
                <div class="torso row m-3">
                    <button class="button is-primary m-5" id="torsoId" value={[torsoCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downTorsoCounter()
                        handleControlledTorsoChange(event)
                        }}>
                        Previous
                    </button>
                </div>
                <div class="legs row m-3">
                    <button class="button is-primary m-5" id="legsId" value={[legsCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downLegsCounter()
                        handleControlledLegsChange(event)
                        }}>
                        Previous
                    </button>
                </div>
            </div>
        </div>
        <div class="column is-4 my-2">
            <div class="rows">
                <div class="headwear row m-3">
                    <figure class=" headwear image is-96x96">
                        <img class="headwear"src=
                            {myHeadwear[headwearCounter]? 
                            myHeadwear[headwearCounter]?.img : myHeadwear[0]?.img}>
                        </img>
                    </figure>
                    </div>
                <div class="head row m-3">
                    <figure class="heads image is-96x96">
                        <img class="head image"src=
                            {myHeads[headCounter]? 
                            myHeads[headCounter]?.img : myHeads[0]?.img}>
                        </img>
                    </figure>
                </div>
                <div class="torso row m-3">
                    <figure class="torsos image is-128x128 ">
                        <img class="torsos"src=
                            {myTorsos[torsoCounter]? 
                            myTorsos[torsoCounter]?.img : myTorsos[0]?.img}>
                        </img>
                    </figure>
                </div>
                <div class="legs row m-3">
                    <figure class="legs image is-128x128 ">
                        <img class="legs"src=
                            {myLegs[legsCounter]? 
                            myLegs[legsCounter]?.img : myLegs[0]?.img}>
                        </img>
                    </figure>
                </div>
            </div>
        </div>
        <div class="column is-4 my-2">
            <div class="rows">
                <div class="headwear row m-3 my-3">
                    <button class="button is-primary m-5" id="myHeadwear" value={[headwearCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upHeadwearCounter()
                        handleControlledHeadwearChange(event)
                        }}>
                        Next
                    </button>
                </div>
                <div class="head row m-3 my-3">
                <button class="button is-primary m-5" id="myHeads" value={[headCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upHeadCounter()
                        handleControlledHeadChange(event)
                        }}>
                        Next
                    </button>
                </div>
                <div class="torso row m-3 my-3">
                    <button class="button is-primary m-5" id="myTorsos" value={[torsoCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upTorsoCounter()
                        handleControlledTorsoChange(event)
                        }}>
                        Next
                    </button>
                </div>
                <div class="legs row m-3 my-3">
                    <button class="button is-primary m-5" id="myLegs" value={[legsCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upLegsCounter()
                        handleControlledLegsChange(event)
                        }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section class="section">
        <button class="button is-success is-pulled-right" onClick={event => {
            event.preventDefault()
            checkHeadwear()
            checkHead()
            checkTorso()
            checkLegs()
            navigate()
        }}>
            Use These Parts
        </button>
    </section>
</>
)}