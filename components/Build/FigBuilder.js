import React, { useContext, useState } from "react"
import { FigContext } from "./FigProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const FigBuilder = () => {

const { minifigure, setMinifigure, updateFig } = useContext(FigContext)
const { parts } = useContext(CollectionContext)
const [image, setImage ] = useState("");

// userId: 0,
// headwearId: 0,
// headId: 0,
// torsoId: 0,
// legsId: 0,
// title: "",
// description: "",
// img: null

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
            <button class="row is-full m-1" onClick={uploadImage}>Upload</button>
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
            <button class="row is-full m-1" onClick={uploadImage}>Upload</button>
        </div>
    </div>}

    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.headwearId).img}/>
        </figure>
        <text class="textarea is-small my-1">{parts.find(part => part.id === minifigure.headwearId).name}</text>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.headId).img}/>
        </figure>
        <text class="textarea is-small my-1">{parts.find(part => part.id === minifigure.headId).name}</text>
    </div>

    <div class="column is-3">
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.torsoId).img}/>
        </figure>
        <text class="textarea is-small my-1">{parts.find(part => part.id === minifigure.torsoId).name}</text>
        <figure class="image is-128x128">
            <img src={parts.find(part => part.id === minifigure.legsId).img}/>
        </figure>
        <text class="textarea is-small my-1">{parts.find(part => part.id === minifigure.legsId).name}</text>
    </div>




</div>
</section>
)
}


// state = { selectedFile: null }

// const fileChangedHandler = event => {
//   let newMinifigure = {...minifigure}
//   newMinifigure.img = event.target.files[0]
//   convertToDataURLviaCanvas(newMinifigure.img, function(base64Img){
//       "http://minifigimg"})
//   setMinifigure(newMinifigure)
//   console.log(newMinifigure)
// }



// const uploadHandler = () => {

//     // const figImg = new FormData()
//     // FormData.append(
//     //   `minifigure${minifigure.id}img`,
//     //   minifigure.img,
//     //   minifigure.img.name
//     // )
//     updateFig(minifigure)
//     console.log(minifigure)
//   }






// return(
// <>
// <input type="file" onChange={fileChangedHandler}/>
// {/* <button onClick={uploadHandler}>Upload!</button> */}
// <section>
// <img class="img" src={minifigure.img}/>
// </section>

// {/* <div class="field column is-one-half ml-6 mt-6">
//                 <label class="label">Search for Themes</label>
//                 <div class="control">
//                     <input class="input" type="text" placeholder="Search for a Theme"
//                     id="themes" onChange={(event) => setSearchTerms(event.target.value)} autoFocus/>
//                 </div>
//             </div>

//             <div class="field column is-one-eigth ml-3 mr-3 mt-6">
//                 <label class="label">Theme</label>
//                 <div class="control">
//                     <div class="select">
//                         <select onChange={handleControlledInputChange}>
//                             <option value="0">Select a Theme</option>
//                              {filteredThemes.map(theme => {
//                                 return <option name={theme.name} key={theme.id} value={theme.id}>
//                                 {theme.name}
//                                 </option>
//                             })}
//                         </select>
//                     </div>
//                 </div>
//             </div> */}
  
// </>
// )}