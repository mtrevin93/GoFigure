import React from "react"
import { Route } from "react-router-dom"
import { BrickProvider } from "./Search/BrickProvider"
import { CollectionProvider } from "./Bricks/CollectionProvider"
import { MinifigSearchForm } from "./Search/MinifigSearchForm"
import { SearchDetail } from "./Search/SearchDetail"
import { BrickList } from "./Bricks/BrickList"
import { FigBuilder } from "./Build/FigBuilder"

export const ApplicationViews = () => {
    return (
        <>
         <Route exact path="/">

         </Route>

        <CollectionProvider>
            <Route path="/bricks">
                <BrickList/>
            </Route>
        </CollectionProvider>
        
        <CollectionProvider>        
            <Route path="/build">
                <FigBuilder/>
            </Route>
        </CollectionProvider>

         <Route path="/collection">
             
         </Route>

        <CollectionProvider>
        <BrickProvider>
            <Route exact path="/search">
                <MinifigSearchForm/>
            </Route>
            <Route path="/search/detail/">
                <SearchDetail/>
            </Route>
        </BrickProvider>
        </CollectionProvider>
        </>
    )
}