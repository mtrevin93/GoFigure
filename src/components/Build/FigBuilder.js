import React, { useContext, useState } from "react"
import { FigContext } from "./FigProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import "./FigBuilder.css"
import { useHistory } from "react-router-dom"

export const FigBuilder = () => {
    
    const { minifigure, setMinifigure, postFig } = useContext(FigContext)
    const { parts } = useContext(CollectionContext)
    const [image, setImage ] = useState("");
    const history=useHistory()
    
const uploadImage = () => {

    const newMinifigure = {...minifigure}
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "minifigure")
    data.append("minifigure","drpheklfx")
    fetch("  https://api.cloudinary.com/v1_1/drpheklfx/image/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    newMinifigure.img = data.url
    setMinifigure(newMinifigure)
    console.log(newMinifigure)
    })
    .catch(err => console.log(err))
    }

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newMinifigure = { ...minifigure }
        /* Minifigure is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newMinifigure[event.target.id] = event.target.value
        // update state
        setMinifigure(newMinifigure)
    }

    const handleClickSaveMinifigure = (event) => {

        const newMinifigure = {...minifigure}
        newMinifigure.name = minifigure.name
        newMinifigure.groupId = null
        newMinifigure.userId = parseInt(sessionStorage.getItem("GoFigure_user"))

            if(minifigure.headwearId === 0 || minifigure.headId === 0 || 
            minifigure.torsoId === 0 || minifigure.legsId ===0){
                history.push("/sketch")
            }
            else if( newMinifigure.name="" || newMinifigure.description===""){
                window.alert("Your minifig needs a name and description")
                return
            }
            else{
                newMinifigure.name = minifigure.name
                newMinifigure.groupId = null
                postFig(newMinifigure)
                const resetMinifigure = {
                userId: 0,
                headwearId: 0,
                headId: 0,
                torsoId: 0,
                legsId: 0,
                name: "",
                description: "",
                img: null,
                groupId: null
                }
                setMinifigure(resetMinifigure)
                history.push("/profile")
            }
    }

return (
<section class="section">
<div class = "columns">
    <div class="column is-1">
    </div>
    {minifigure.img? 
    <div class="column is-3">
        <img class = "image is-3by-4" src={minifigure.img}/>
        <div class="rows m-3">
            <input class="row is-full m-1" type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button class="button is-info row is-full m-1" onClick={uploadImage}>Upload</button>
        </div>
    </div>
    : 
    <div class="column is-3">
        <img class = "image is-96x96" src={parts.find(part => part.id === minifigure.headwearId).img}/>
        <img class = "image is-96x96" src={parts.find(part => part.id === minifigure.headId).img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === minifigure.torsoId).img}/>
        <img class = "image is-128x128" src={parts.find(part => part.id === minifigure.legsId).img}/>
        <div class="rows m-3">
            <input class="row is-full m-1" type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button class="button is-info row is-full m-1" onClick={uploadImage}>Upload An Image</button>
        </div>
    </div>}

    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.headwearId).img}/>
        </figure>
        <div class="box my-6">{parts.find(part => part.id === minifigure.headwearId).name}</div>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.headId).img}/>
        </figure>
        <div class="box my-6">{parts.find(part => part.id === minifigure.headId).name}</div>
    </div>

    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.torsoId).img}/>
        </figure>
        <div class="box my-6">{parts.find(part => part.id === minifigure.torsoId).name}</div>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.legsId).img}/>
        </figure>
        <div class="box my-6">{parts.find(part => part.id === minifigure.legsId).name}</div>
    </div>
</div>

<div class="names">
<div class="field">
        <label class="label">Name Your Minifig:</label>
    <fieldset class="fieldset">
            <div class="control is-large mz-6">
              <input class="input"  id="name" required autoFocus class="form-control" placeholder="Name" value={minifigure.name} onChange={handleControlledInputChange} 
              defaultValue=""/>
            </div>
    </fieldset>
</div>
<div class="field">
        <label class="label">Tell Us About Them:</label>
        <fieldset class="fieldset">
            <div class="control is-large mz-6">
              <input class="input mz-6" type="text is-large mz-6"   id="description" required autoFocus class="form-control" placeholder="Description" value={minifigure.description} onChange={handleControlledInputChange} 
              defaultValue=""/>
            </div>
        </fieldset>
</div> 
</div>

    <button class="button is-success is-medium is-pulled-right m-6" onClick={handleClickSaveMinifigure}>
        Save
    </button>
</section>
)
}