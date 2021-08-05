import React, { useContext, useEffect } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { ProfileContext } from "./ProfileProvider"

export const Post = ({savedFig}) => {
    
    const { parts, getParts } = useContext(CollectionContext)
    const { collections, getCollections } = useContext(ProfileContext)

    useEffect(() => {
        getParts()
        .then(getCollections)
    }, [])

const relatedCollection = collections.find(collection => collection.id === savedFig?.collectionId)

return (
    <>
<section class="div">
    <section class="hero is-link is-small m-3 my-5">
  <div class="hero-body">
    <p class="title">
    {savedFig?.user.username} added 
             "{savedFig?.name}" to {relatedCollection?.name}
    </p>
    <p class="subtitle m-1">
      {savedFig.description}
    </p>
  </div>
</section>
</section>

    <div class="columns is-multiline">
    
    {savedFig.img? 
    <div class="column is-2">
        <img class = "image is-3by-4 m-6" src={savedFig.img}/>
    </div>
    : 
    <div class="column is-2 ml-6">
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === savedFig.headId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === savedFig.legsId)?.img}/>
    </div>}
    <div class="column is-1"></div>
    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === savedFig.headwearId)?.img}/>
        </figure>
        <div class="box box-color">{parts.find(part => part.id === savedFig.headwearId)?.name}</div>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === savedFig.headId)?.img}/>
        </figure>
        <div class="box color-primary">{parts.find(part => part.id === savedFig.headId)?.name}</div>
    </div>

    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === savedFig.torsoId)?.img}/>
        </figure>
        <div class="box color-primary">{parts.find(part => part.id === savedFig.torsoId)?.name}</div>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === savedFig.legsId)?.img}/>
        </figure>
        <div class="box color-primary">{parts.find(part => part.id === savedFig.legsId)?.name}</div>
    </div>

    </div>
    </>
)}  