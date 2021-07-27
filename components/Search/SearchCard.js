import React from "react"

export const SearchCard = ({ minifig }) => (
    <div class="column is-3">
        <div class="title">{minifig.name}</div>
        <figure class="image is-9by16">
            <img src={minifig.set_img_url}/>
        </figure>
    </div>
    // <div class="column is-1">
    //     <button class="button is-success" onclick={event => {
    //         event.preventDefault()
    //         handleClickAddAllParts()
    //     }}>
    //         Add All Parts
    //     </button>
    //     <button class="button is-info" onclick={event => {
    //         event.preventDefault()
    //         handleClickFigDetails()
    //     }}>
    //         Details
    //     </button>
    // </div>
)
