import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const Post = ({savedFig}) => {
    
    const { parts, getParts } = useContext(CollectionContext)

    useEffect(() => {
        getParts()
    }, [])

return (
    <>
    <div class="column is-12">
    <section class="section header">
        <div class="title">
            {savedFig?.collectionId === 0? `Check out ${savedFig?.user.name}'s 
             "${savedFig?.name}" Minifigure`:
            `${savedFig?.user?.name} added "${savedFig?.name}" to "${savedFig?.collection?.name}"`}
        </div>
    </section>
    {savedFig.img? 
    <div class="column is-2">
        <img class = "image is-3by-4 m-6" src={savedFig.img}/>
    </div>
    : 
    <div class="column is-6 m-6">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId)?.img}/>
    </div>}
    </div>
    </>
)}  