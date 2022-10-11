import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import AddParty from "../../components/AddParty/AddParty";
import Search from "../../components/Search/SearchParty";

function ViewParty() {
  const [party, setParty] = useState([]);
  const { state } = useLocation();
  console.log(state);

  const getParty = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/viewparty`
      );
      setParty(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getParty();
  // }, []);

  return (
    <>
      {/* <CreateParty getParties={getParty} /> */}
      <div className="partyDetailsPage">
        {/* {party.map((el) => {

          return (
            <div className= "PartyCard card" key= {profile._id}>
        <Link to={`/parties/${party._id}`}>
        <h3>{party.imgUrl}asd</h3>
        <p>{party.title}</p>
        <p>{party.theme}</p>
        <p>{party.username}</p>
        <p>{party.city}</p>
        <p>{party.description}</p>
        </Link>

        <h1>Join {this.name}</h1>
        <div className="partyProfile"> 

        <img src={this.imgUrl} alt="Party Picture"></img>
        </div> 

      <Link to={`/request/${request._id}`}></Link>
        </div>
        )
      })} */}

        {state.username &&<h3>Username : {state.username}</h3>}
        {state.firstName &&<p>First Name : {state.firstName}</p>}
        {state.lastName &&<p>Last Name : {state.lastName}</p>}
        {state.email &&<p>Email : {state.email}</p>}
        {state.city &&<p>City : {state.city}</p>}
        {state?.imgUrl && (
        <>
       Image : <img src={state?.imgUrl} height={80}/>
        </>
        )}
      </div>
    </>
  );
}

export default ViewParty;
