
import React from 'react';
import { db } from '../../firebase';
import './feed.css'
import FeedInputOption from './feedInputOption';
import {  collection, serverTimestamp ,query,addDoc ,onSnapshot , orderBy  } from 'firebase/firestore';
import Post from './Post';
import { selectUser } from '../../features/counter/userSlice';
import { useSelector } from 'react-redux';

export const Feed = ()=>{
   const [posts , setPosts] = React.useState([]);
   const [message, setMessage] = React.useState('')
    const user = useSelector(selectUser)
   async function getPosts() {
       let q = query(collection(db, "posts"),orderBy('timestamp',"desc"))
        onSnapshot(q, (snapshots) => {
        const postList = snapshots.docs.map(doc => ({
            id:doc.id,
            post: doc.data()
        }));
        setPosts(postList)  
    });
  }

   React.useEffect(() => {
       getPosts()
   }, []);

   const sendData = async(e) =>{
       e.preventDefault();
       await addDoc(collection(db, "posts"),  {
                       name:user.displayName,
                       description: user.email,
                       message: message,
                       photoUrl : user.photoURL,
                       timestamp : serverTimestamp()
                   })
                   .then(setMessage(''))
                   .catch(err=>alert(err.message))
   }
return (
    <div className="feed">
        <div className="feed_InputContainer">
            <div className="feed_Input">
            <i className='fa fa-pencil fa-2x'></i>
            <form onSubmit={sendData}>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                {/* <button type="submit" onClick={sendData}>send</button> */}
            </form>
            </div>
            <div className="feed_InputOptions">
                <FeedInputOption Icon="fa fa-image fa-2x" color="#7885f9" title="Photo"/>
                <FeedInputOption Icon="fa fa-video-camera fa-2x" color="#E7A33E" title="Video"/>
                <FeedInputOption Icon="fa fa-calendar-o fa-2x" color="#C0CBC0" title="Event"/>
                <FeedInputOption Icon="fa fa-address-card-o fa-2x" color="#8cd5a5" title="Write article"/>
            </div>
        </div>

        {/* POSTS */}
        {/* <Post name="Aniket Bandal" description="This is description" message="this is message How are you" photoUrl="www.google.com/image" /> */}
        {
           posts && posts.map(({id,post})=>(
                <Post key={id} name={post.name} description={post.description} message={post.message} photoUrl={post.photoUrl} />
            ))
        }
    </div>
)
}