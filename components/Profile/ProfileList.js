import React, { useContext, useEffect, useState } from "react"
import { FigCard } from "./FigCard"
import { ProfileContext } from "./ProfileProvider"
import { useHistory } from "react-router-dom"

export const ProfileList = () => {

const history = useHistory()
const {  savedFigs, getSavedFigs, collections, getCollections, collectionFigs, getCollectionFigs } = useContext(ProfileContext)

useEffect(() => {
    getSavedFigs()
    .then(getCollections)
    .then(getCollectionFigs)
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
                // if(savedFig.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
                // && !(collectionFigs.find(collectionFig => collectionFig.figId === savedFigs.id)))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
        </div>
<div>
    <button class="button is-pulled-left is-primary"onClick={event => {
        event.preventDefault()
        handleClickShowCollectionForm()
    }}>
       Create a Collection
    </button>
</div>
</section>
    // {/* {collections.map(collection => {
    //             if(collection.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
    //             && !(collectionFigs.find(collectionFig => collectionFig.figId === savedFigs.id)))
    //             { 
    //             return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
    // </section> */}
)}

