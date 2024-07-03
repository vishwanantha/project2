import React, { useEffect } from 'react';

import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
/*import { AuthContext } from "../../context/AuthContext";*/
import { MoreVert } from '@material-ui/icons'

import heart from '../../assets/heart.png'
import Like from '../../assets/like.png'
import {  useState } from "react";

export default function Post({post}) {
  
  const [like,setLike] = useState(post.like.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] = useState({});
const { user: currentUser } = useContext(AuthContext);
  const PF = `${import.meta.env.REACT_APP_PUBLIC_FOLDER}`
  
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <Link to={`profile/${user.username}`}>
          <img
            className="postProfileImg"
            src={user.profilePicture || PF+"person/1.png"}
            alt=""
          />
          </Link>
          <span className="postUsername">
            {user.username}
          </span>
          <span className="postDate">{format(post.createdAt)}</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        <img className="postImg" src={PF+post.photo} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src={heart} onClick={likeHandler} alt="" />
          <img className="likeIcon" src={Like} onClick={likeHandler} alt="" />
          <span className="postLikeCounter">{like} people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  </div>
  )
}
