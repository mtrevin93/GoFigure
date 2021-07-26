import React, { useState, createContext, useContext } from "react"
import { CollectionContext } from "../Bricks/CollectionProvider.js"
import { BrickContext } from "./BrickProvider.js"

export const MinifigSearchForm = () => {

    const { getFigNum } = useContext(BrickContext)
    const { getParts } = useContext(CollectionContext)
    const [types, setTypes] = useContext(CollectionContext)
    const [parts, setParts] = useContext(CollectionContext)
    
    const getFigParts = (fig) => {
        const figNum = getFigNum(fig)
        figNum.results.map(fig => {
            types.find(type => (part.part_cat_id === type.id))
            const part = {
                "userId": parseInt(sessionStorage.getItem("GoFigure_user")),
                "rebrickableId": part.part_num,
                "typeId":types.find(type => part.part_cat_id===type.rebrickableId).id,
                "img": part.part_img_url,
                "name": part.name
            }
            return fetch("http://localhost:8088/parts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(part)
                })
        })
        .then(getParts)
    }


    return (
        <>
        <div class="columns is-multiline is-centered">
            <div class="field column is-one-half">
                <label class="label">Search for Themes></label>
                <div class="control">
                    <input class="input" type="text" placeholder="Enter one or more keywords"/>
                </div>
            </div> 


        </div>
        </>
    )





}

        

    
