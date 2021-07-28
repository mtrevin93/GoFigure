import React, { useContext, useEffect } from "react"
import { SearchCard } from "./SearchCard"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const SearchList = ({ minifigs }) => {

const { types, getTypes  } = useContext(CollectionContext)

useEffect(() => {
    getTypes()
  }, [])
    
    return(
    <section class="section">
            <h2 class="title">
                {minifigs[0]? "Search Results" : ""}
            </h2>
        <div class="columns is-multiline">
            {minifigs?.map(minifig => {
                return <SearchCard types={types} key={minifig.set_num} minifig={minifig}/>})}
        </div>
    </section>
)}