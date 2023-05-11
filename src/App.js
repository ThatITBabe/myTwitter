import React from 'react'
import Sidebar from './Component/sidebar/Sidebar'
import "./App.css"
import Widgets from './Component/widgets/Widgets'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import Explore from './Pages/explore/Explore'
// import Notifications from './Pages/Notifications'
// import Messages from './Pages/Messages'
// import Bookmarks from './Pages/Bookmarks'
// import TwitterBlue from './Pages/TwitterBlue'
// import Profile from './Pages/Profile'
// import More from './Pages/More'
import Feed from './Component/feed/Feed'


const App = () => {
  return (
    <div className='app '>
      <Sidebar/>

      {/* <BrowserRouter>
        <Routes>
          <Route 
            path='/' element= {<Home/>}
          />
          <Route path='/explore' element= {<Explore/>}/>
          <Route path='/notifications' element= {<Notifications/>}/>
          <Route path='/messages' element= {<Messages/>}/>
          <Route path='/bookmarks' element= {<Bookmarks/>}/>
          <Route path='/verification' element= {<TwitterBlue/>}/>
          <Route path='/profile' element= {<Profile/>}/>
          <Route path='/more' element= {<More/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <FeedSection/> */}
      <Feed/>
      
      <Widgets/>

    </div>
  )
}

export default App