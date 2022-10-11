import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import MainImage from '../../components/MainImage/MainImage';

function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate(`/profile/create/${response.data.userId}`);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="LoginPage">
     

<div>
<MainImage /> 
</div>


      <form onSubmit={handleSubmit} className='login-form'>

      <div className='labels-login'>
        <label htmlFor="username">Username</label>
        <input className='login-inputs' type="text" name="username" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input className='login-inputs' type="password" name="password" value={password} onChange={handlePassword} />
      <button className='login-button-main' type="submit">Login</button>
      </div>
      <div className='sign-up-login'>
      <p>Don't have an account?</p>
      <Link to="/signup" style={{ textDecoration: 'none' }} >Sign up</Link>
      </div>
      </form>

    </div>
  );
}

export default LoginPage;
