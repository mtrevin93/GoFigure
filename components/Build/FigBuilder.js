import React, { useContext, useState } from "react"
import { FigContext } from "./FigProvider"

export const FigBuilder = () => {

const { minifigure, setMinfigure } = useContext(FigContext)

// const [minifigure, setMinifigure] = useState({
//     userId: 0,
//     title: "",
//     description: "",
//     imgLink: ""
// })

console.log(minifigure)


return(
<>
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