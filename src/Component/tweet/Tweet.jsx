import React from 'react'
import "./tweet.css"
import { Avatar, Button } from '@mui/material'

const Tweet = () => {
  return (
    <div className='tweetBox'>
        <form action="#">
            <div className="tweetbox_input">
                <Avatar src='https://static.vecteezy.com/system/resources/previews/006/735/770/non_2x/beautiful-woman-avatar-profile-icon-vector.jpg'/>
                <input type="text" placeholder= "What's happening?" />
            </div>
            <input className='tweetBox__imageInput' type="text" placeholder= "Enter image URL" />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
        
    </div>
  )
}

export default Tweet