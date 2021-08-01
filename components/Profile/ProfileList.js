import React, { useContext, useEffect, useState } from "react"
import { FigCard } from "./FigCard"
import { FigContext } from "../Build/FigProvider"
import { ProfileContext } from "./ProfileProvider"

export const ProfileList = () => {

const {  addCollection, savedFigs, getSavedFigs, collections, getCollections, collectionFigs, getCollectionFigs } = useContext(ProfileContext)

useEffect(() => {
    getSavedFigs()
    .then(getCollections)
    .then(getCollectionFigs)
}, [])

const [showModal, setShowModal] = useState(false)
const [collection, setCollection] = useState({

    userId: 0,
    name: "",
    description: "",

  });

const handleClickCreateCollection = (event) => {

    const newCollection = {...collection}
    newCollection.userId = parseInt(sessionStorage.getItem("GoFigure_user"))

        if( newCollection.name="" || newCollection.description===""){
            window.alert("Your collection needs a name and description")
            return
        }
        else{
            addCollection(newCollection)
            const resetCollection = {
                userId: 0,
                name: "",
                description: "",
              }
            setCollection(resetCollection)
            handleClickShowCollectionForm()
        }
}

const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newCollection = { ...collection }
    /* collection is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newCollection[event.target.id] = event.target.value
    // update state
    setCollection(newCollection)
}



const handleClickShowCollectionForm = () => {
    setShowModal(prev => !prev)
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
                && !(collectionFigs.find(collectionFig => collectionFig.figId === savedFigs.id)))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
        </div>
<div>
    <button class="button is-pulled-left is-primary"onClick={event => {
        event.preventDefault()
        handleClickShowCollectionForm()
    }}>
       {showModal? "Cancel" : "Create A Collection"}
    </button>
    <br/><br/>
</div>
{showModal? 
    <div>
<div class="field">
        <label class="label">Name Your Collection:</label>
        <fieldset>
            <div class="form-group">
              <input class="input nameTextInput" type="text is-large"  id="name" required autoFocus class="form-control" placeholder="Name" value={collection.name} onChange={handleControlledInputChange} 
              defaultValue=""/>
            </div>
        </fieldset>
</div>
<div class="field">
        <label class="label">Give Your Collection a Description:</label>
        <fieldset>
            <div class="form-group">
              <input class="input nameTextInput" type="text is-large"  id="description" required autoFocus class="form-control" placeholder="Description" value={collection.description} onChange={handleControlledInputChange} 
              defaultValue=""/>
            </div>
        </fieldset>
</div>
<button class="button is-success" onClick={handleClickCreateCollection}>
    Save Collection
</button>
    </div> : null}
    {/* {collections.map(collection => {
                if(collection.userId === parseInt(sessionStorage.getItem("GoFigure_user"))
                && !(collectionFigs.find(collectionFig => collectionFig.figId === savedFigs.id)))
                { 
                return <FigCard key={savedFig.id} savedFig={savedFig}/>}})}
    </section> */}
)}

