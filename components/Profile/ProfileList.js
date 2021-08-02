import React, { useContext, useEffect, useState } from "react"
import { FigCard } from "./FigCard"
import { CollectionCard } from "./CollectionCard"
import { ProfileContext } from "./ProfileProvider"
import { useHistory } from "react-router-dom"

export const ProfileList = () => {

const history = useHistory()
const {  savedFigs, getSavedFigs, collections, getCollections,
    collectionUsers,  getCollectionUsers } = useContext(ProfileContext)

useEffect(() => {
    getSavedFigs()
    .then(getCollections)
    .then(getCollectionUsers)
}, [])

const handleClickShowCollectionForm = () => {
    history.push("/collection")
}

    return(
    
    <section class="section">
                <div class="m-2">
                    <h2 class="title">
                        My Minifigures
                    </h2>
                </div>
        <div class="columns">
            {savedFigs.map(savedFig => {
                if(savedFig.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
                && (savedFig.collectionId === 0))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
        </div>
        

    {collections.map(collection => {
            if(collectionUsers.find(collectionUser => collectionUser.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
            && collection.id === collectionUser.collectionId))
            {
            return <CollectionCard key={collection.id} collection={collection} collectionUsers={collectionUsers}/>}})}


    <button class="button is-pulled-left is-primary"onClick={event => {
        event.preventDefault()
        handleClickShowCollectionForm()
    }}>
       Create a Collection
    </button>
</section>

)}

