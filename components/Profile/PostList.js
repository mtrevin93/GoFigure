import React, { useContext, useEffect } from "react"
import { Post } from "./Post"
import { ProfileContext } from "./ProfileProvider"

export const PostList = () => {
    
    const { savedFigs, getSavedFigs } = useContext(ProfileContext)
    
    useEffect(() => {
        getSavedFigs()
    }, [])

   // make a copy of the Figs array for sorting 
   const figs = [...savedFigs ]
   // sort the copied Figs array by timestamp newest post to oldest post
   const sortedFigs = figs.sort((a, b) => b.id - a.id)   

return(
<section class="section">
    <div class="m-2">
        <h2 class="title">
        GoFigure Buzz
        </h2>
    </div>

    <div class="columns is-multiline">
        {sortedFigs.map(savedFig => {
        return <Post key={savedFig.id} savedFig={savedFig}/>})}
    </div>
</section>

)}