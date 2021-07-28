import React, { useContext, useEffect, useState } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"
import  "./FigBuilder.css"

export const FigBuilder = () => {

const { parts, getParts } = useContext(CollectionContext)

const [headwearCounter, setHeadwearCounter] = useState([0])
const [headCounter, setHeadCounter] = useState([0])
const [torsoCounter, setTorsoCounter] = useState([0])
const [legsCounter, setLegsCounter] = useState([0])

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

const changeHeadCounter = (val) => {
    let newHeadCounter = parseInt(headCounter)
    newHeadCounter = newHeadCounter + val
    if(newHeadCounter < 0){
        newHeadCounter = myHeads.length-1
        setHeadCounter(parseInt(newHeadCounter))
    }
    else if(newHeadCounter === myHeads.length){
        newHeadCounter = 0
        setHeadCounter(parseInt(newHeadCounter))
    }
    setHeadCounter(newHeadCounter)
}

const changeTorsoCounter = (val) => {
    let newTorsoCounter = parseInt(torsoCounter)
    newTorsoCounter = newTorsoCounter + val
    if(newTorsoCounter < 0){
        newTorsoCounter = myTorsos.length-1
        setTorsoCounter(parseInt(newTorsoCounter))
    }
    else if(newTorsoCounter === myTorsos.length){
        newTorsoCounter = 0
        setTorsoCounter(parseInt(newTorsoCounter))
    }
    setTorsoCounter(newTorsoCounter)
}

const changeLegsCounter = (val) => {
    let newLegsCounter = parseInt(legsCounter)
    newLegsCounter = newLegsCounter + val
    if(newLegsCounter < 0){
        newLegsCounter = myLegs.length-1
        setLegsCounter(parseInt(newLegsCounter))
    }
    else if(newLegsCounter === myLegs.length){
        newLegsCounter = 0
        setLegsCounter(parseInt(newLegsCounter))
    }
    setLegsCounter(newLegsCounter)
}

const changeHeadwearCounter = (val) => {
    let newHeadwearCounter = parseInt(headwearCounter)
    newHeadwearCounter = newHeadwearCounter + val
    if(newHeadwearCounter < 0){
        newHeadwearCounter = myHeadwear.length-1
        setHeadwearCounter(parseInt(newHeadwearCounter))
    }
    else if(newHeadwearCounter === myHeadwear.length){
        newHeadwearCounter = 0
        setHeadwearCounter(parseInt(newHeadwearCounter))
    }
    setHeadwearCounter(newHeadwearCounter)
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
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeHeadwearCounter(-1)}}>
                        Previous
                    </button>
                </div>
                <div class="head row m-3">
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeHeadCounter(-1)}}>
                        Previous
                    </button>
                </div>
                <div class="torso row m-3">
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeTorsoCounter(-1)}}>
                        Previous
                    </button>
                </div>
                <div class="legs row m-3">
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeLegsCounter(-1)}}>
                        Previous
                    </button>
                </div>
            </div>
        </div>
        <div class="column is-4 my-2">
            <div class="rows">
                <div class="headwear row mz-6">
                    <figure class="image is-96x96 my--6">
                        <img class="headwear"src=
                            {myHeadwear[headwearCounter]? 
                            myHeadwear[headwearCounter]?.img : myHeadwear[0]?.img}>
                        </img>
                    </figure>
                    </div>
                <div class="head row mz-6">
                    <figure class="image is-96x96 my--6">
                        <img class="heads"src=
                            {myHeads[headCounter]? 
                            myHeads[headCounter]?.img : myHeads[0]?.img}>
                        </img>
                    </figure>
                </div>
                <div class="torso row mz-6">
                    <figure class="image is-128x128 my--6">
                        <img class="torsos"src=
                            {myTorsos[torsoCounter]? 
                            myTorsos[torsoCounter]?.img : myTorsos[0]?.img}>
                        </img>
                    </figure>
                </div>
                <div class="legs row mz-6">
                    <figure class="image is-128x128 my--6">
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
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeHeadwearCounter(1)}}>
                        Next
                    </button>
                </div>
                <div class="head row m-3 my-3">
                <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeHeadCounter(1)}}>
                        Next
                    </button>
                </div>
                <div class="torso row m-3 my-3">
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeTorsoCounter(1)}}>
                        Next
                    </button>
                </div>
                <div class="legs row m-3 my-3">
                    <button class="button is-primary m-5" onClick = {event => {
                        event.preventDefault()
                        changeLegsCounter(1)}}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>

    
        {/* {minifigs?.map(minifig => {
            return <SearchCard types={types} key={minifig.set_num} minifig={minifig}/>})}
    </div>
    </section> */}

{/* // <div class="column is-3 my-2">
// <figure class="image is-square">
//     <img src={minifig.set_img_url}/>
// </figure>
// <div class="subtitle my-1">{minifig.name}</div>
// </div>
// <div class="column is-1 my-2">
// <button class="button is-success mt-6" onClick={event => {
//     event.preventDefault()
//     handleClickAddAllParts()
// }}>
//     Add Parts
// </button> */}
</>
)
}