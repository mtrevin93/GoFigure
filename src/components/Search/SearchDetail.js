import React, { useContext, useEffect, useState } from "react"
import { BrickContext } from "./BrickProvider"
import { CollectionContext } from "../Bricks/CollectionProvider"
import { Link } from "react-router-dom"
import { useParams, useHistory } from "react-router-dom"

export const SearchDetail = () => {

const { getFigNum, types, figNum, setFigNum } = useContext(BrickContext)
const { getTypes, getParts } = useContext(CollectionContext)

const {setNum} = useParams();

// const getFigParts = () => {
   
//         getFigNum(setNum).then(() => {figNum.results.map(piece => {
//         types.find(type => (part.part_cat_id === type.id))
//         const part = {
//             "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
//             "rebrickableId": part.part_num,
//             "typeId":types.find(type => part.part_cat_id===type.rebrickableId).id,
//             "img": part.part_img_url,
//             "name": part.name
//         }
//         return fetch("http://localhost:8088/parts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(part)
//             })
// })})
//         // .then(getParts)
// }

// const minifig = getFigParts()

// return (
//     <>
//     <div class="column is-3 my-2">
//         <figure class="image is-square">
//             <img src={minifig?.set_img_url}/>
//         </figure>
//         <div class="subtitle my-1">{minifig?.name}</div>
//     </div>
//     <div class="column is-1 my-2">
//         <button class="button is-success mt-6" onClick={event => {
//             event.preventDefault()
//             // handleClickAddAllParts()
//         }}>
//             Add Parts
//         </button>
//         <button class="button is-info my-6">
//             <Link
//             minifig={minifig}to={
//                 `/search/detail/${minifig?.set_num}`
//             }
//             >
//             <text class="is-white">Details</text>
//             </Link>
//         </button>
//     </div>
//     </>
// )
}