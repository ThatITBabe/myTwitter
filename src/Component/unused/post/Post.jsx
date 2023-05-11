// import React, { forwardRef } from 'react'
// import "./post.css"
// import { MdVerified, MdFavoriteBorder } from "react-icons/md";
// import { RiChat1Line } from "react-icons/ri";
// import { FaRetweet } from "react-icons/fa";
// import { TbBrandGoogleAnalytics } from "react-icons/tb";
// import { FiShare } from "react-icons/fi";
// import { Avatar } from '@mui/material';

// const Post = forwardRef(
//     ({
//     displayName, 
//     userName, 
//     verified, 
//     // timeStamp, 
//     text, 
//     image, 
//     avatar, 
// }, ref) => {
     
//   return (
//     <div className='post' ref={ref}>
//         <div className="post__avatar">
//             <Avatar src={avatar}  width={"50px"}/>
//         </div>
//         <div className="post__body">
//             <div className="post__header">
//                 <div className="post__headerText">
//                     <h3>
//                         {displayName} {""} 
//                         <span className="post__headerSpecial">
//                             {verified && <MdVerified className='post__badge'/>} @ {userName}
//                         </span>
//                     </h3>
//                 </div>
//                 <div className="post__headerDescription">
//                     <p>
//                         {text}
//                     </p>
//                 </div>
//             </div>
//             <img src={image} width={"200px"}/>
//             <div className="post__footer">
//                 <RiChat1Line fontSize={"small"}/>
//                 <FaRetweet fontSize={"small"}/>
//                 <MdFavoriteBorder fontSize={"small"}/>
//                 <TbBrandGoogleAnalytics fontSize={"small"}/>
//                 <FiShare fontSize={"small"}/>
//             </div>
//         </div>
//     </div>
//   )
// }
// );

// export default Post
