import React from "react"
import { Route } from "react-router-dom"
import { BrickProvider } from "./Search/BrickProvider.js"
import { CollectionProvider } from "./Bricks/CollectionProvider.js"
import { MinifigSearchForm } from "./Search/MinifigSearchForm.js"

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
        <BrickProvider>
            <Route path="/search">
                <MinifigSearchForm/>
            </Route>
        </BrickProvider>
        </>
    )
}