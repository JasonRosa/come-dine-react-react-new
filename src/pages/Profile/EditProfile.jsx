import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');
  const [host, setHost] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/${userId}`);

      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setUsername(response.data.username)
      setCity(response.data.city)
      setHost(response.data.host)
      setEmail(response.data.email)
      setPassword(response.data.password)
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleHost = (e) => setHost(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value); 
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { firstName, lastName, username, contact, host, email, password, description };

    axios
      .put(`${process.env.REACT_APP_API_URL}/api/profile/edit/${userId}`, body)
      .then(() => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setCity('');
        setHost('');
        setEmail('');
        setPassword('');
        setDescription('');
        navigate(`/profile/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteProfile = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/profile/delete/${userId}`)
      .then(() => {
        navigate('/profile');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProfile">
      <h3>Edit Profile</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
       
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
        
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} />
        
        <label htmlFor="city">City</label>
        <input type="text" name="city" value={city} onChange={handleCity} />
        
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={password} onChange={handlePassword} />
       
        <label htmlFor="host">Host</label>
        <input type="radio" name="host" value={host} onChange={handleHost} />
        
        <label htmlFor="description"> Description</label>
        <input type="textarea" name="description" value={description} onChange={handleDescription} />

        <Link to='/profile'>
        <button type="submit">Edit Profile</button>
        </Link>
      </form>

      <button onClick={deleteProfile}>Delete Profile</button>
    </div>
  );
}

export default EditProfile;
