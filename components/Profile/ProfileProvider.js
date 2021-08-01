import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

  const [savedFigs, setSavedFigs] = useState([])
  const [ collections, setCollections ] = useState([])
  const [collectionFigs, setCollectionFigs] = useState([])

  const getSavedFigs = () => {
    return fetch(`http://localhost:8088/savedFigs`)
    .then(res => res.json())
    .then(setSavedFigs)
  }

  const getCollections = () => {
    return fetch(`http://localhost:8088/collections`)
    .then(res => res.json())
    .then(setCollections)
  }

  const getCollectionFigs = () => {
    return fetch(`http://localhost:8088/collectionFigs`)
    .then(res => res.json())
    .then(setCollectionFigs)
  }

  const removePart = (savedFigId) => {
    return fetch(`http://localhost:8088/savedFigs/${savedFigId}`, {
      method: "DELETE"
    })
      .then(getSavedFigs)
}

const addCollection = collection => {
  return fetch("http://localhost:8088/collections", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(collection)
      })
      .then(response => response.json())
  }


    return (
        <ProfileContext.Provider value ={{
            savedFigs, getSavedFigs, collections, getCollections, 
            collectionFigs, getCollectionFigs, removePart, addCollection
        }}>
            {props.children}
        </ProfileContext.Provider>
  )}


