import React, { useContext, useEffect } from "react"
import { FigCard } from "./FigCard"
import { FigContext } from "../Build/FigProvider"
import { ProfileContext } from "./ProfileProvider"

export const ProfileList = () => {

const {  savedFigs, getSavedFigs, collections, getCollections, collectionFigs, getCollectionFigs } = useContext(ProfileContext)

useEffect(() => {
    getSavedFigs()
    .then(getCollections)
    .then(getCollectionFigs)
}, [])

    return(

    <section class="section">
            <h2 class="title">
                My Minifigures
            </h2>
        <div class="columns is-multiline">
            {savedFigs.map(savedFig => {
                if(savedFig.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
                && !(collectionFigs.find(collectionFig => collectionFig.figId === savedFigs.id)))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
        </div>
    </section>
)}