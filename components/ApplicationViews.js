import React from "react"
import { Route } from "react-router-dom"
import { BrickProvider } from "./Search/BrickProvider"
import { CollectionProvider } from "./Bricks/CollectionProvider"
import { MinifigSearchForm } from "./Search/MinifigSearchForm"

export const ApplicationViews = () => {
    return (
        <>
         <Route exact path="/">

         </Route>

         <Route path="/bricks">

         </Route>

         <Route path="/build">

         </Route>

         <Route path="/collection">
             
         </Route>

        <CollectionProvider>
        <BrickProvider>
            <Route exact path="/search">
                <MinifigSearchForm/>
            </Route>
        </BrickProvider>
        </CollectionProvider>
        </>
    )
}