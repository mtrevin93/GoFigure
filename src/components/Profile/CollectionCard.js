import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { FigCard } from "./FigCard"

export const CollectionCard = ({ collection, showCollectionForm }) => {

const { savedFigs, getSavedFigs, deleteCollection  } = useContext(ProfileContext)
const { getParts} = useContext(CollectionContext)

useEffect(() => {
    getParts()
    .then(getSavedFigs)
      }, [])

const handleClickDeleteCollection = () => {
deleteCollection(collection.id)
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
      {showCollectionForm === true? <button class="button is-danger mr-6 ml-6" onClick ={handleClickDeleteCollection}>
        Delete</button> :null}
    </p>
         </div>
       </section>
       <div class="columns is-multiline">
    {filteredFigs.map(savedFig => {
    return <FigCard key={savedFig.id} savedFig={savedFig}/>})}
       </div>
    </>
)}  

