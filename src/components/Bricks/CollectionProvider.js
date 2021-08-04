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

    const updatePart = part => {

        return fetch(`http://localhost:8088/parts/${part.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(part)
        })
          .then(getParts)
      }

    return (
        <CollectionContext.Provider value ={{
            getTypes, getParts, types, parts, updatePart
        }}>
            {props.children}
        </CollectionContext.Provider>
    )
}