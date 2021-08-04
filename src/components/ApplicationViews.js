import React from "react"
import { Route } from "react-router-dom"
import { BrickProvider } from "./Search/BrickProvider"
import { CollectionProvider } from "./Bricks/CollectionProvider"
import { ProfileProvider } from "./Profile/ProfileProvider"
import { MinifigSearchForm } from "./Search/MinifigSearchForm"
import { BrickList } from "./Bricks/BrickList"
import { ProfileList } from "./Profile/ProfileList"
import { PartPicker } from "./Build/PartPicker"
import { FigProvider } from "./Build/FigProvider"
import { FigBuilder } from "./Build/FigBuilder"
import { CollectionForm } from "./Profile/CollectionForm"
import { PostList } from "./Profile/PostList"

export const ApplicationViews = () => {
    return (
        <>
        <ProfileProvider>
        <CollectionProvider>
            <Route exact path="/">
                <PostList/>
            </Route>
        </CollectionProvider>
        </ProfileProvider>

        <CollectionProvider>
            <Route path="/bricks">
                <BrickList/>
            </Route>
        </CollectionProvider>
        
        <FigProvider>
        <CollectionProvider>        
            <Route path="/sketch">
                <PartPicker/>
            </Route>
            <Route path="/build">
                <FigBuilder/>
            </Route>
        
        <ProfileProvider>
            <Route path="/profile">
               <ProfileList/> 
            </Route>
            <Route path="/collection">
                <CollectionForm/>
            </Route>

        </ProfileProvider>
        </CollectionProvider>
        </FigProvider>

        <ProfileProvider>
        <CollectionProvider>
        <BrickProvider>
            <Route exact path="/search">
                <MinifigSearchForm/>
            </Route>
        </BrickProvider>
        </CollectionProvider>
        </ProfileProvider>
        </>
    )
}