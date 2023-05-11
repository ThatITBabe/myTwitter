// import React, { useState, useEffect } from 'react'
// import "./feesSection.css"
// import TweetBox from '../tweetbox/TweetBox'
// import Post from '../post/Post'
// import FlipMove from "react-flip-move";
// import db from '../../firebase';


// const FeedSection = () => {
//   const [posts, setPosts] = useState ([]);

//   useEffect(() =>{
//     db.collection('posts').onSnapshot(snapshot => (
//       setPosts(snapshot.docs.map(doc => doc.data()))
//     ))
//   }, [])
  
//   return (
//     <div className='feed'>
//       <div className="feed__header">
//         <h2>Home</h2>
//       </div>
//       <TweetBox/>


//       <FlipMove>
//         {posts.map((post, i) => (
//           <Post
//             key={i}
//             displayName={post.displayName}
//             userName={post.userName}
//             verified={post.verified}
//             text={post.text}
//             avatar={post.avatar}
//             image={post.image}
//           />
//         ))}
//       </FlipMove>
//     </div>
//   );
// }

// export default FeedSection