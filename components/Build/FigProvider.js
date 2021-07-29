import React, { useState, createContext } from "react"

export const FigContext = createContext()

export const FigProvider = (props) => {

const [minifigure, setMinifigure] = useState({
    userId: 0,
    headwearId: 0,
    headId: 0,
    torsoId: 0,
    legsId: 0,
    title: "",
    description: "",
    imgLink: ""

  });

    return (
        <FigContext.Provider value ={{
            minifigure, setMinifigure
        }}>
            {props.children}
        </FigContext.Provider>
    )
}

