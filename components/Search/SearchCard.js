import React from "react"

export const SearchCard = ({ minifig }) => (
    <div class="column is-one-quarter">
        <div class="title">{minifig.name}</div>
        <figure class="image is-9by16">
            <img src={minifig.set_img_url}/>
        </figure>
        <button class="button is-primary is pulled-right">
            Select
        </button>
    </div>
)