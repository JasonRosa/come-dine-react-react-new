import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateProfile from './CreateProfile';
import Profile from './Profile';


function ViewProfile() {
  const [profile, setProfile] = useState([]);
  const {user} = useContext(AuthContext);
  const getProfile = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/${user._id}`);
      setProfile(response.data.reverse());
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
    
    <div className='ProfilesListPage'>
        {profile.map((el) => {

          return (
            <div className= "ProfilesCard card" key= {profile._id}>
        <Link to={`/profile/${profile._id}`}>
        <h3>{profile.imgUrl}</h3>
        <p>{profile.username}</p>
        <p>{profile.city}</p>
        <p>{profile.host}</p>
        </Link>

        <h1>Meet {this.name}</h1>
        {/* <div className="profile"> */}
        {/* <div className="main-card"> */}
        {/* <div className="profile-img" style="width: fit-content; height: 12.5vh"> */}
        <img src={this.imgUrl} alt="Profile Picture"></img>
        {/* </div> */}

        {/* <div className="name-box"> */}
        <h3>{this.name}</h3>
        <h3>{this.contact}</h3>
        <h3>{this.location}</h3>
        </div>
        )
      })}
         </div>
    </>
  )
};



export default ViewProfile