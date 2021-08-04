import React, { useState, createContext } from "react"

export const FigContext = createContext()

export const FigProvider = (props) => {

const [minifigure, setMinifigure] = useState({

    userId: 0,
    headwearId: 0,
    headId: 0,
    torsoId: 0,
    legsId: 0,
    name: "",
    description: "",
    img: null,
    collectionId:0

  });

const postFig = fig => {
return fetch("http://localhost:8088/savedFigs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fig)
    })
    .then(response => response.json())
}

  const updateFig = savedFig => {
    return fetch(`http://localhost:8088/savedFigs/${savedFig.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedFig)
        })
        .then(response => response.json())
        // .then(getSavedFigs)
    }

    return (
        <FigContext.Provider value ={{
            minifigure, setMinifigure, postFig, updateFig
        }}>
            {props.children}
        </FigContext.Provider>
    )
}

