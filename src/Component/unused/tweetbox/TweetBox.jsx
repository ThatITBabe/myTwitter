// import { React, useState } from 'react'
// import "./tweetbox.css"
// import { Avatar, Button } from '@mui/material';
// import db from '../../firebase';
// // import { ImImage } from "react-icons/im";
// // import { AiOutlineFileGif } from "react-icons/ai";
// // import { VscSmiley } from "react-icons/vsc";
// // import { GoLocation } from "react-icons/go";

// const TweetBox = () => {
//   const [tweetMessage, setTweetMessage] = useState("");
//   const [tweetImage, setTweetImage] = useState("");

//   const sendTweet = (e) => {
//     e.preventDefault();


    
//     db.collection("posts").add({
//       displayName: "Isreal Kolade",
//       // timestamp: firebase.firestore.Fieldvalue.serverTimestamp(), 
//       userName: "israelcode",
//       verified: true,
//       text: tweetMessage,
//       image: tweetImage,
//       avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
//     });

//     setTweetMessage("");
//     setTweetImage("");
//   };
  

//   return (
//     <div className='tweetBox'>
//       <form>
//           <div className='tweetbox_input'>
//             <Avatar src='https://static.vecteezy.com/system/resources/previews/006/735/770/non_2x/beautiful-woman-avatar-profile-icon-vector.jpg' width={"80px"}/>
//             <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} type='text' placeholder="What's happening?"/>
//           </div>
//             {/* <div className="iconssss">
//               <ImImage/>
//               <AiOutlineFileGif/>
//               <VscSmiley/>
//               <GoLocation/>
//             </div> */}
//           <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} type='text' className='tweetBox__imageInput' placeholder='Optional: Enter image URL'/>

//         <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
          
          
//           {/* <Button>Tweet</Button> */}
//           {/* <button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</button> */}
//       </form>
//     </div>
//   )
// }

// export default TweetBox