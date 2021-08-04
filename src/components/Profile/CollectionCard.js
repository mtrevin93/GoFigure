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
    <h2 class="title">{collection.name}</h2>
    <h5>{collection.description}</h5>
    {filteredFigs.map(savedFig => {
    return <FigCard key={savedFig.id} savedFig={savedFig}/>})}
    </>
)}  