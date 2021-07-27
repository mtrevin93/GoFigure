import React from "react"
import { SearchCard } from "./SearchCard"

export const SearchList = ({ minifigs }) => {
    
    return(
    <section class="section">
        <div class="columns is-multiline">
            <h2 class="title">
                {minifigs[0]? "Search Results" : ""}
            </h2>
            {minifigs?.map(minifig => {
                return <SearchCard key={minifig.set_num} minifig={minifig}/>})}
        </div>
    </section>
)}