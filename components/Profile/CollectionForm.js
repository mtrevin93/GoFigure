import React, { useContext, useEffect, useState } from "react"
import { ProfileContext } from "./ProfileProvider"
import { useHistory } from "react-router-dom"

export const CollectionForm = () => {

const { addCollectionUser, users, addCollection, getUsers } = useContext(ProfileContext)
const [collection, setCollection] = useState({

    name: "",
    description: "",

  });

  useEffect(() => {
    getUsers()
}, [])

const history = useHistory()
const [ userString, setUserString ] = useState("")

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

  const handleUserString = (event) => {

    let newUserString = userString
    newUserString = event.target.value
    setUserString(newUserString)

  }

const handleClickCreateCollection = (event) => {
    
    const newCollection = {...collection}

    if( newCollection.name="" || newCollection.description===""){
        window.alert("Your collection needs a name and description")
        return
    }
    else{
        addCollection(newCollection).then((res) => addUsers(res.id))
    }
}

    const addUsers = (collectionId) => {

    const thisUser = parseInt(sessionStorage.getItem("GoFigure_user"))
    const thisCollectionUser = {userId: thisUser, collectionId: collectionId}
    addCollectionUser(thisCollectionUser)

    const newUserString = userString

    const newUsers = newUserString.split(',')
    for (const newUser of newUsers){
        if (users.find(existingUser => existingUser.username.toLowerCase() === newUser.toLowerCase())){
        const userObj = users.find(userObj => userObj.username === newUser)
        const newCollectionUser = {userId: userObj.id, collectionId: collectionId}
        addCollectionUser(newCollectionUser)
        }
    }
        const resetCollection = {
            name: "",
            description: "",
        }
        setCollection(resetCollection)
        history.push("/profile")
}

return(
<section class="section">
    <h2 class="title">
        Create a Collection
    </h2>
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
    <div class="field">
        <label class="label">Add Additional Users</label>
        <fieldset>
            <div class="form-group">
              <input class="input nameTextInput" type="text is-large"  id="description" required autoFocus class="form-control" placeholder="Users" value={userString} onChange={handleUserString} 
              defaultValue=""/>
            </div>
        </fieldset>
    </div>
    <button class="button is-success" onClick={handleClickCreateCollection}>
        Save Collection
    </button>
    </div> 
</section>

)}