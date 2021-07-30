import React, { useContext, useState } from "react"
import { FigContext } from "./FigProvider"

export const FigBuilder = () => {

const { minifigure, setMinifigure, updateFig } = useContext(FigContext)

//     userId: 0,
//     title: "",
//     description: "",
//     img: ""

function convertToDataURLviaCanvas(url, callback, outputFormat){
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null; 
    };
    img.src = url;
}

convertToDataURLviaCanvas(minifigure.img, function(base64Img){
    // Base64DataURL
});

console.log(minifigure)

// state = { selectedFile: null }

const fileChangedHandler = event => {
  let newMinifigure = {...minifigure}
  newMinifigure.img = event.target.files[0]
  convertToDataURLviaCanvas(newMinifigure.img, function(base64Img){
      "http://minifigimg"})
  setMinifigure(newMinifigure)
  console.log(newMinifigure)
}



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






return(
<>
<input type="file" onChange={fileChangedHandler}/>
{/* <button onClick={uploadHandler}>Upload!</button> */}
<section>
<img class="img" src={minifigure.img}/>
</section>

{/* <div class="field column is-one-half ml-6 mt-6">
                <label class="label">Search for Themes</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Search for a Theme"
                    id="themes" onChange={(event) => setSearchTerms(event.target.value)} autoFocus/>
                </div>
            </div>

            <div class="field column is-one-eigth ml-3 mr-3 mt-6">
                <label class="label">Theme</label>
                <div class="control">
                    <div class="select">
                        <select onChange={handleControlledInputChange}>
                            <option value="0">Select a Theme</option>
                             {filteredThemes.map(theme => {
                                return <option name={theme.name} key={theme.id} value={theme.id}>
                                {theme.name}
                                </option>
                            })}
                        </select>
                    </div>
                </div>
            </div> */}
  
</>
)}