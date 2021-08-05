import React, { useContext, useEffect } from "react"
import { PartSearchCard } from "./PartSearchCard"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const PartSearchList = ({ parts }) => {

const { types, getTypes } = useContext(CollectionContext)


useEffect(() => {
    getTypes()
}, [])

    return(
    <section class="section">
            <h2 class="title">
                {parts.length > 0? "Search Results" : ""}
            </h2>
        <div class="columns is-multiline">
            {parts?.map(part => {
                return <PartSearchCard types={types} part={part}/>})}
        </div>
    </section>
)}