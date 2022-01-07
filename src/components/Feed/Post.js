import React from 'react'
import FeedInputOption from './feedInputOption'
import './Post.css'
// import Avatar from '@material-ui/core/Avatar';
export default function Post({name,description,message , photoUrl}) {
    return (
        <div className="post">
            {/* <Avatar>N</Avatar> */}
            <div className="post_header">
                <img className="avatar_Img" src={photoUrl} alt="N"/>

                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_button">
            <FeedInputOption Icon="fa fa-thumbs-o-up" color="gray" title="Like"/>
            <FeedInputOption Icon="fa fa-commenting-o" color="gray" title="Comment"/>
            <FeedInputOption Icon="fa fa-share-alt" color="gray" title="Share"/>
            <FeedInputOption Icon="fa fa-paper-plane-o" color="gray" title="Send"/>
            </div>
        </div>
    )
}
