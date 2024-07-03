import React from 'react'
import "./Profile.css"
import  img7 from '../../assets/post/7.jpeg'

import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
 const PF=`${import.meta.env.REACT_APP_PUBLIC_FOLDER}`
 const username=useParams().username
 
 useEffect(() => {
  const fetchUser = async () => {
    const res = await axios.get(`/users?username=${username}`);
    setUser(res.data);
  };
  fetchUser();
}, [username]);
  
  return (
    
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={user.coverPicture}
              alt=""
            />
            <img
              className="profileUserImg"
              src={img7}
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc"> {user.desc} </span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed username={username}/>
          <Rightbar user={user}/>
        </div>
      </div>
    </div>
  </>
  )
}
