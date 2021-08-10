import React, { useContext, useEffect, useState } from "react"
import { FigCard } from "./FigCard"
import { CollectionCard } from "./CollectionCard"
import { ProfileContext } from "./ProfileProvider"
import { useHistory } from "react-router-dom"
import { CollectionForm } from "./CollectionForm"

export const ProfileList = () => {

const history = useHistory()
const {  savedFigs, getSavedFigs, collections, getCollections,
    collectionUsers,  getCollectionUsers, showCollectionForm, setShowCollectionForm } = useContext(ProfileContext)

    const toggleShowCollectionForm = () => {
        const view = showCollectionForm
        setShowCollectionForm(!view)
    }

useEffect(() => {
    getCollections()
    .then(getSavedFigs)
}, [showCollectionForm])

const handleClickShowCollectionForm = () => {
    history.push("/collection")
}

    return(
    
        <section class="section">
        <section class="hero is-success is-small mb-6">
         <div class="hero-body">
           <p class="title">
             My Minifigures
           </p>
         </div>
       </section>
        <div class="columns is-multiline">
            {savedFigs.map(savedFig => {
                if(savedFig.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
                && (savedFig.collectionId === null))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
        </div>


    {collections.map(collection => {
        if(collection.userId === parseInt(sessionStorage.getItem("GoFigure_user")))
        {
            return <CollectionCard showCollectionForm={showCollectionForm} key={collection.id} collection={collection} collectionUsers={collectionUsers}/>}})}

    {showCollectionForm === false? 
    <button class="button is-pulled-left is-primary"onClick={event => {
        event.preventDefault()
        toggleShowCollectionForm()
    }}>
       Create a Collection
    </button>
    :
    null}
    <div class="section">
    {showCollectionForm === true? <CollectionForm/> : null}
    </div>

        </section>

)}

