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
   const posts = sortedFigs.filter(fig => fig.groupId)  

return(

<div>
    {posts.map(savedFig => {
    return <Post key={savedFig.id} savedFig={savedFig}/>})}

</div>

  


)}