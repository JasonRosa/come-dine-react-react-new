import React from 'react';
import axios from 'axios';
import ViewProfile from './ViewProfile';
import { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';



function Profile() {
  const [profile, setProfile] = useState(null);

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/${id}`,  {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      console.log(response.data)
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="ProfileDetails">
      {profile && (
        <>
          <h1>{profile.imgURL}</h1>
          <div className="welcome"><h3>Hello, {profile.firstName}</h3></div>
          <p>{profile.city}</p>
          <p>{profile.host}</p>
          <p>{profile.description}</p>

         {/*  {profile.partydetailspage.map((partydetailspage) => (
            <li className="Parties card" key={party._id}>
              <h3>{party.title}</h3>
              <p>{party.theme}</p>
              <p>{party.location}</p>
              <p>{party.description}</p>
              <p>{party.requests}</p>
            

            </li>
          ))} */}
        </>
      )}

      <Link to={`/profile/edit/${id}`}>
        <button>Edit Profile</button>
      </Link>

      <Link to={`/parties/addparty/${id}`}>
        <button>Host a party</button>
      </Link>

      <Link to="/profile">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Profile;