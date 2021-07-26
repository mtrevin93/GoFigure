import React from "react"
import { Route } from "react-router-dom"
import { MinifigSearchForm } from "./search/SearchProvider.js     "

export const ApplicationViews = () => {
    return (
        <>
         <Route path="/home">

         </Route>

         <Route path="/bricks">

         </Route>

         <Route path="/build">

         </Route>

         <Route path="/collection">
             
         </Route>

         <Route path="/search">
             <MinifigSearchForm/>
        </Route>
        </>
    )
}