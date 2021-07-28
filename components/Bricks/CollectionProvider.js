import React, { useState, createContext } from "react"

export const CollectionContext = createContext()

//SearchProvider export handles calls for minifig searching by theme or term & destructuring found minifigs into parts
export const CollectionProvider = (props) => {

    const [types, setTypes] = useState([])
    const [parts, setParts] = useState([])

    const getTypes = () => {
        return fetch(`http://localhost:8088/types`)
        .then(res => res.json())
        .then(setTypes)
    }

    const getParts = () => {
        return fetch(`http://localhost:8088/parts?_expand=user`)
        .then(res => res.json())
        .then(setParts)
    }
    const removePart = (partId) => {
        return fetch(`http://localhost:8088/parts/${partId}`, {
          method: "DELETE"
        })
          .then(getParts)
    }

    return (
        <CollectionContext.Provider value ={{
            getTypes, getParts, types, parts, removePart
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}