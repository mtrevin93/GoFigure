import React, { useContext, useEffect } from "react"
import { SearchCard } from "./SearchCard"
import { CollectionSearchCard } from "./CollectionSearchCard"
import { CollectionContext } from "../Bricks/CollectionProvider"

export const SearchList = ({ minifigs, collection, savedFigs }) => {

const { types, getTypes  } = useContext(CollectionContext)

useEffect(() => {
    getTypes()
  }, [])

const collectionFigs = savedFigs.filter(fig => collection.id === fig.collectionId)

    return(
    <section class="section">
            <h2 class="title">
                {minifigs[0] || collectionFigs.length > 0? "Search Results" : ""}
            </h2>
        <div class="columns is-multiline">
            {collectionFigs.length > 0? collectionFigs.map(minifig => {
                    return <CollectionSearchCard types={types} key={minifig.id} minifig={minifig}/>})
            :
            minifigs?.map(minifig => {
                return <SearchCard types={types} key={minifig.set_num} minifig={minifig}/>})}
        </div>
    </section>
)}