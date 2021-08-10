import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./ProfileProvider"
import { useHistory } from "react-router-dom"

export const CollectionForm = () => {

const { addCollection, showCollectionForm, setShowCollectionForm } = useContext(ProfileContext)
const [collection, setCollection] = useState({

    name: "",
    description: "",

  });

  const toggleShowCollectionForm = () => {
    const view = showCollectionForm
    setShowCollectionForm(!view)
}


const history = useHistory()

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

const handleClickCreateCollection = (event) => {

    const newCollection = {...collection}
    if( newCollection.name="" || newCollection.description===""){
        return
    }
    else{
        newCollection.name = collection.name
        newCollection.userId = parseInt(sessionStorage.getItem("GoFigure_user"))
 
        addCollection(newCollection)
    }

    const resetCollection = {
        name: "",
        description: "",
    }
    setCollection(resetCollection)
    history.push("/profile")
    }
    
return(
  
<div class="my-6">
    <h2 class="title my-2">
        Create a Collection
    </h2>
        <label class="label my-3">Name Your Collection:</label>
            <div class="form-group">
              <input class="input nameTextInput" type="text is-large"  id="name" required autoFocus class="form-control" placeholder="Name" value={collection.name} onChange={handleControlledInputChange} 
              defaultValue=""/>
        <label class="label my-3">Give Your Collection a Description:</label>
            <div class="form-group">
              <input class="input descriptionTextInput" type="text is-large"  id="description" required autoFocus class="form-control" placeholder="Description" value={collection.description} onChange={handleControlledInputChange} 
              defaultValue=""/>
    </div>
    <button class="button is-success my-5" onClick={event => {
        event.preventDefault()
        toggleShowCollectionForm()
        handleClickCreateCollection()
    }}>
        {collection.name === "" || collection.description ===""?<p>Cancel </p> : <p>Save Collection</p>}
    </button>
    </div> 
    </div>

)}