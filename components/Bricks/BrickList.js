import React, { useContext, useEffect } from "react"
import { BrickCard } from "./BrickCard"
import { CollectionContext } from "./CollectionProvider"

export const BrickList = () => {

const { parts, getParts } = useContext(CollectionContext)

useEffect(() => {
    getParts()
}, [])

    return(
    <section class="section">
            <h2 class="title">
                My Collection
            </h2>
        <div class="columns is-multiline">
            {parts.map(part => {
                if(part.userId === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable === true){
                return <BrickCard key={part.id} part={part}/>}})}
        </div>
    </section>
)}