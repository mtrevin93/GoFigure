import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { FigCard } from "./FigCard"

export const CollectionCard = ({ collection, collectionFigs }) => {

const { removePart, savedFigs, getSavedFigs, getCollectionFigs  } = useContext(ProfileContext)
const { parts, getParts, collections } = useContext(CollectionContext)

useEffect(() => {
    getParts()
    .then(getSavedFigs)
      }, [])

const handleClickRemoveFig = (savedFig) => {
removePart(savedFig.id)
}

const filteredFigs = savedFigs.filter(savedFig=> savedFig?.collectionId === collection.id)

return (
    <>
            <section class="section">
            
            </section>
            <section class="hero is-info is-small mb-6">
         <div class="hero-body">
           <p class="title">
             {collection.name}
           </p>
           <p class="subtitle m-1">
      {collection.description}
    </p>
         </div>
       </section>
       <div class="columns is-multiline">
    {filteredFigs.map(savedFig => {
    return <FigCard key={savedFig.id} savedFig={savedFig}/>})}
       </div>
    </>
)}  

