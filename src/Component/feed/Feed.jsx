import React from 'react'
import "./feed.css"
import Tweet from '../tweet/Tweet'
import Posting from '../posting/Posting'

const Feed = () => {
  return (
    <div>
        <div className="feed__header">
            <h2>Home</h2> 
        </div>

        <Tweet/>

        <Posting/>
        
    </div>
  )
}

export default Feed