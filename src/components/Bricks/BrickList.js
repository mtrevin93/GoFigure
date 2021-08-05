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
 <section class="hero is-success is-small">
  <div class="hero-body">
    <p class="title">
      My Parts Collection
    </p>
  </div>
</section>
        <div class="columns is-multiline">
            {parts.map(part => {
                if(part.userId === parseInt(sessionStorage.getItem("GoFigure_user")) && part.isAvailable === true){
                return <BrickCard key={part.id} part={part}/>}})}
        </div>
    </section>
)}