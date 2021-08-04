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
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable && part.typeId === 2)
    
const myHeadwear = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable && part.typeId=== 1)

const myTorsos = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable && part.typeId=== 3)

const myLegs = parts.filter(part => part.userId 
    === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable && part.typeId=== 4)

    const { minifigure, setMinifigure } = useContext(FigContext)

    const [headwearCounter, setHeadwearCounter] = useState(0)
    const [headCounter, setHeadCounter] = useState(0)
    const [torsoCounter, setTorsoCounter] = useState(0)
    const [legsCounter, setLegsCounter] = useState(0)
    const [ showPartDetails, setShowPartDetails ] = useState(false)
    
      const downHeadCounter = () => {
    
        let newHeadCounter = parseInt(headCounter)
        newHeadCounter = newHeadCounter-1
        if(newHeadCounter < 0){
            newHeadCounter = myHeads.length-1
            setHeadCounter(parseInt(newHeadCounter))
            let newMinifigure = {...minifigure}
            const newPart = myHeads[newHeadCounter]
            newMinifigure.headId = newPart.id
            // update state
            setMinifigure(newMinifigure)
        }
        else{setHeadCounter(parseInt(newHeadCounter))
            let newMinifigure = {...minifigure}
            const newPart = myHeads[newHeadCounter]
            newMinifigure.headId = newPart.id
            // update state
            setMinifigure(newMinifigure)
        }
    }
    
    const upHeadCounter = () => {
    
        let newHeadCounter = parseInt(headCounter)
        if(newHeadCounter === myHeads.length-1){
            newHeadCounter = 0
            setHeadCounter(parseInt(newHeadCounter))
            let newMinifigure = {...minifigure}
            const newPart = myHeads[newHeadCounter]
            newMinifigure.headId = newPart.id
            // update state
            setMinifigure(newMinifigure)
        }
        else {
            let newHeadCounter = parseInt(headCounter)
            newHeadCounter = newHeadCounter + 1
            setHeadCounter(newHeadCounter)
            let newMinifigure = {...minifigure}
            const newPart = myHeads[newHeadCounter]
            newMinifigure.headId = newPart.id
            // update state
            setMinifigure(newMinifigure)
        }
    }

const downLegsCounter = () => {
    
    let newLegsCounter = parseInt(legsCounter)
    newLegsCounter = newLegsCounter-1
    if(newLegsCounter < 0){
        newLegsCounter = myLegs.length-1
        setLegsCounter(parseInt(newLegsCounter))
        let newMinifigure = {...minifigure}
        const newPart = myLegs[newLegsCounter]
        newMinifigure.legsId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else {setLegsCounter(parseInt(newLegsCounter))
        let newMinifigure = {...minifigure}
        const newPart = myLegs[newLegsCounter]
        newMinifigure.legsId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
}

const upLegsCounter = () => {

    let newLegsCounter = parseInt(legsCounter)
    if(newLegsCounter === myLegs.length-1){
        newLegsCounter = 0
        setLegsCounter(parseInt(newLegsCounter))
        let newMinifigure = {...minifigure}
        const newPart = myLegs[newLegsCounter]
        newMinifigure.legsId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else {
        let newLegsCounter = parseInt(legsCounter)
        newLegsCounter = newLegsCounter + 1
        setLegsCounter(newLegsCounter)
        let newMinifigure = {...minifigure}
        const newPart = myLegs[newLegsCounter]
        newMinifigure.legsId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
}

const downTorsoCounter = () => {
    
    let newTorsoCounter = parseInt(torsoCounter)
    newTorsoCounter = newTorsoCounter-1
    if(newTorsoCounter < 0){
        newTorsoCounter = myTorsos.length-1
        setTorsoCounter(parseInt(newTorsoCounter))
        let newMinifigure = {...minifigure}
        const newPart = myTorsos[newTorsoCounter]
        newMinifigure.torsoId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else {setTorsoCounter(parseInt(newTorsoCounter))
        let newMinifigure = {...minifigure}
        const newPart = myTorsos[newTorsoCounter]
        newMinifigure.torsoId = newPart.id
        // update state
        setMinifigure(newMinifigure)

    }
}

const upTorsoCounter = () => {

    let newTorsoCounter = parseInt(torsoCounter)
    if(newTorsoCounter === myTorsos.length-1){
        newTorsoCounter = 0
        setTorsoCounter(parseInt(newTorsoCounter))
        let newMinifigure = {...minifigure}
        const newPart = myTorsos[newTorsoCounter]
        newMinifigure.torsoId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else {
        let newTorsoCounter = parseInt(torsoCounter)
        newTorsoCounter = newTorsoCounter + 1
        setTorsoCounter(newTorsoCounter)
        let newMinifigure = {...minifigure}
        const newPart = myTorsos[newTorsoCounter]
        newMinifigure.torsoId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
}

const downHeadwearCounter = () => {
    
    let newHeadwearCounter = parseInt(headwearCounter)
    newHeadwearCounter = newHeadwearCounter-1
    if(newHeadwearCounter < 0){
        newHeadwearCounter = myHeadwear.length-1
        setHeadwearCounter(parseInt(newHeadwearCounter))
        let newMinifigure = {...minifigure}
        const newPart = myHeadwear[newHeadwearCounter]
        newMinifigure.headwearId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else{setHeadwearCounter(parseInt(newHeadwearCounter))
    let newMinifigure = {...minifigure}
        const newPart = myHeadwear[newHeadwearCounter]
        newMinifigure.headwearId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
}

const upHeadwearCounter = () => {

    let newHeadwearCounter = parseInt(headwearCounter)
    if(newHeadwearCounter === myHeadwear.length-1){
        newHeadwearCounter = 0
        setHeadwearCounter(parseInt(newHeadwearCounter))
        let newMinifigure = {...minifigure}
        const newPart = myHeadwear[newHeadwearCounter]
        newMinifigure.headwearId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
    else {
        let newHeadwearCounter = parseInt(headwearCounter)
        newHeadwearCounter = newHeadwearCounter + 1
        setHeadwearCounter(newHeadwearCounter)
        let newMinifigure = {...minifigure}
        const newPart = myHeadwear[newHeadwearCounter]
        newMinifigure.headwearId = newPart.id
        // update state
        setMinifigure(newMinifigure)
    }
}

const navigate = () => {
    history.push("/build")
}

const mecabricksNavigate = () => {
        const win = window.open("https://www.mecabricks.com/en/workshop/");
        win.focus();
}

const setPartDetailsView = () => {
    const view = showPartDetails
    setShowPartDetails(!view)
}

const checkHead = (newMinifigure) => {
if(minifigure.headId === 0){
    newMinifigure.headId = myHeads[0].id
    setMinifigure(newMinifigure)
    checkTorso(newMinifigure)}
    else{checkTorso(newMinifigure)}
}

const checkHeadwear = () => {
    if(minifigure.headwearId === 0){
        let newMinifigure = {...minifigure}
        newMinifigure.headwearId = myHeadwear[0].id
        setMinifigure(newMinifigure)
        checkHead(newMinifigure)}
    else{let newMinifigure={...minifigure}
    checkHead(newMinifigure)}
    }

const checkTorso = (newMinifigure) => {
    if(minifigure.torsoId === 0){
        newMinifigure.torsoId = myTorsos[0].id
        setMinifigure(newMinifigure)
        checkLegs(newMinifigure)}
        else{checkLegs(newMinifigure)}
        }
    
const checkLegs = (newMinifigure) => {
    if(minifigure.legsId === 0){
        newMinifigure.legsId = myLegs[0].id
        newMinifigure.name= ""
        newMinifigure.description= ""
        setMinifigure(newMinifigure)
        navigate()}
        else{
            newMinifigure.name= ""
            newMinifigure.description= ""
            setMinifigure(newMinifigure)
            navigate()}
        }

return(
<>
    <section class="section">
    <h2 class="title m-3">
        Build a Minifigure
    </h2>
    <div class="columns is-multiline">
        <div class="column is-2 my-2">
            <div class="rows">
                <div class="headwear row m-2 my-5">
                    <button class="button is-primary m-5" id="headwearId"  
                     onClick = {event => {
                        event.preventDefault()
                        downHeadwearCounter()
                        }}>
                        Previous
                    </button>
                </div>
                <div class="head row m-2 my-5">
                    <button class="button is-primary m-5" id="headId" value={[headCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downHeadCounter()
                        }}>
                        Previous
                    </button>
                </div>
                <div class="torso row m-2 my-5">
                    <button class="button is-primary m-5" id="torsoId" value={[torsoCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downTorsoCounter()
                        }}>
                        Previous
                    </button>
                </div>
                <div class="legs row m-2 my-5">
                    <button class="button is-primary m-5" id="legsId" value={[legsCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        downLegsCounter()
                        }}>
                        Previous
                    </button>
                </div>
            </div>
        </div>
        <div class="column is-2 my-2">
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
        <div class="column is-2 my-2">
            <div class="rows">
                <div class="headwear row m-2 my-5">
                    <button class="button is-primary m-5" id="myHeadwear" value={[headwearCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upHeadwearCounter()
                        }}>
                        Next
                    </button>
                </div>
                <div class="head row m-2 my-5">
                <button class="button is-primary m-5" id="myHeads" value={[headCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upHeadCounter()
                        }}>
                        Next
                    </button>
                </div>
                <div class="torso row m-2 my-5">
                    <button class="button is-primary m-5" id="myTorsos" value={[torsoCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upTorsoCounter()
                        }}>
                        Next
                    </button>
                </div>
                <div class="legs row m-2 my-5">
                    <button class="button is-primary m-5" id="myLegs" value={[legsCounter]} 
                     onClick = {event => {
                        event.preventDefault()
                        upLegsCounter()
                        }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    <div class="column is-1">

    </div>
    <div class="details column is-5">
        {showPartDetails? null : <div class="">
        <div class="rows">
            <div class="row">
        <div class="column is-3">
            <figure class="image is-square">
                <img src={myHeadwear[headwearCounter]? 
                            myHeadwear[headwearCounter]?.img : myHeadwear[0]?.img}/>
            </figure>
            <text class="label is-small my-1">{myHeadwear[headwearCounter]? 
                            myHeadwear[headwearCounter]?.name : myHeadwear[0]?.name}</text>
                            <br/>
                            <text class="label is-small m-1">Bricklink ID: {myHeadwear[headwearCounter]?.bricklinkId? 
                            myHeadwear[headwearCounter]?.bricklinkId : "NOT AVAILABLE"}</text>
        </div>
        <div class="column is-3">
            <figure class="image is-square">
                <img src={myHeads[headCounter]? 
                            myHeads[headCounter]?.img : myHeads[0]?.img}/>
            </figure>
            <text class="label is-small my-1">{myHeads[headCounter]? 
                            myHeads[headCounter]?.name : myHeads[0]?.name}</text>
                            <br/>
                            <text class="label is-small m-1">Bricklink ID: {myHeads[headCounter]?.bricklinkId? 
                            myHeads[headCounter]?.bricklinkId : "NOT AVAILABLE"}</text>
        </div>
        </div>
        <div class="column is-2"/>
        <div class="row">
        <div class="column is-3">
            <figure class="image is-square">
                <img src={myTorsos[torsoCounter]? 
                            myTorsos[torsoCounter]?.img : myTorsos[0]?.img}/>
            </figure>
            <text class="label is-small my-1">Bricklink ID: {myTorsos[torsoCounter]? 
                            myTorsos[torsoCounter]?.name : myTorsos[0]?.name}</text>
                            <br/>
                            <text class="label is-small m-1">Bricklink ID: {myTorsos[torsoCounter]?.bricklinkId? 
                            myTorsos[torsoCounter]?.bricklinkId : "NOT AVAILABLE"}</text>
        </div>
        <div class="column is-3">
            <figure class="image is-square">
                <img src={myLegs[legsCounter]? 
                            myLegs[legsCounter]?.img : myLegs[0]?.img}/>
            </figure>
            <text class="label is-small my-1">Bricklink ID:{myLegs[legsCounter]? 
                            myLegs[legsCounter]?.name : myLegs[0]?.name}</text>
                            <br/>
                            <text class="label is-small m-1">Bricklink ID: {myLegs[legsCounter]?.bricklinkId? 
                            myLegs[legsCounter]?.bricklinkId : "NOT AVAILABLE"}</text>
        </div>
        </div>
        </div>
    </div>}
    </div>                    
</div>
       

    </section>
    <section class="section">
        <button class="button is-warning is-pulled-left m-5" href="https://www.mecabricks.com/en/workshop/" onClick={event => {
            event.preventDefault()
            mecabricksNavigate()
        }}>
            Mecabricks 3D Builder
        </button>
        <button class="button is-info is-pulled-left m-5" onClick={event => {
            event.preventDefault()
            setPartDetailsView()
        }}>
            Show Part Details
        </button>
        <button class="button is-success is-pulled-left m-5" onClick={event => {
            event.preventDefault()
            checkHeadwear()
        }}>
            Use These Parts
        </button>
    </section>
</>
)}