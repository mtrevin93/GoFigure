import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {

  const [savedFigs, setSavedFigs] = useState([])
  const [ collections, setCollections ] = useState([])
  const [collectionUsers, setCollectionUsers] = useState([])
  const [users, setUsers] = useState([])

  const [collection, setCollection] = useState({

    name: "",
    description: "",

  });

  const addCollectionUser = collectionUser => {
    return fetch("http://localhost:8088/collectionUsers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(collectionUser)
        })
        .then(response => response.json())
    }
  
    const getUsers = () => {
      return fetch(`http://localhost:8088/users`)
      .then(res => res.json())
      .then(setUsers)
    }

    const getCollectionUsers = () => {
      return fetch(`http://localhost:8088/collectionUsers`)
      .then(res => res.json())
      .then(setCollectionUsers)
    }

  const getSavedFigs = () => {
    return fetch(`http://localhost:8088/savedFigs?_expand=collection&_expand=user`)
    .then(res => res.json())
    .then(setSavedFigs)
  }

  const getCollections = () => {
    return fetch(`http://localhost:8088/collections`)
    .then(res => res.json())
    .then(setCollections)
  }

  const removeFig = (savedFigId) => {
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
            removeFig, addCollection,
            addCollectionUser, getCollectionUsers, collectionUsers, users,
            getUsers, collection
        }}>
            {props.children}
        </ProfileContext.Provider>
  )}


