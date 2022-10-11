/* import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


function PartyDetailsPage() {
  const [partyDetails, setPartyDetails] = useState(null);

  const { id } = useParams();

  const getPartyDetails = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/partydetailspage/${id}`);
      setPartyDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPartyDetails();
  }, []);

  return (
    <div className="PartyDetails">
      {partyDetails && (
        <>
          <h1>{partyDetails.imgURL}</h1>
          <p>{partyDetails.city}</p>
          <p>{partyDetails.host}</p>
          <p>{partyDetails.description}</p>

          {partyDetails.parties.map((parties) => (
            <li className="PartyDetails card" key={partyDetails._id}>
              <h3>{partyDetails.title}</h3>
              <p>{partyDetails.theme}</p>
              <p>{partyDetails.location}</p>
              <p>{partyDetails.description}</p>
              <p>{partyDetails.requests}</p>
            

            </li>
          ))}
        </>
      )}

      <Link to={`/partydetailspage/edit/${id}`}>
        <button>Edit Party</button>
      </Link>

      <Link to="/profile">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default PartyDetailsPage; */

import React from 'react';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import { Link } from 'react-router-dom';

function PartyDetailsPage() {

  const { party } = useContext(AuthContext)
  const [partyDetails, setPartyDetails]= useState(null);
  const { user } = useContext(AuthContext)


  const getPartyDetails = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${party._id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });


      setPartyDetails(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPartyDetails();
  }, []);
  return (
   <div className='PartyDetails'>
      {partyDetails && (
        <>
          <h1>{partyDetails.imgURL}</h1>
          <p>{partyDetails.city}</p>
          <p>{partyDetails.host}</p>
          <p>{partyDetails.description}</p>

          {partyDetails.parties.map((parties) => (
            <li className="PartyDetails card" key={partyDetails._id}>
              <h3>{partyDetails.title}</h3>
              <p>{partyDetails.theme}</p>
              <p>{partyDetails.location}</p>
              <p>{partyDetails.description}</p>
              <p>{partyDetails.requests}</p>
            </li>
          ))}
        </>
      )
      }
      </div>
      )


}

export default PartyDetailsPage