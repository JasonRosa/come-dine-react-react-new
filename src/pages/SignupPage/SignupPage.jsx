import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import MainImage from '../../components/MainImage/MainImage';

function SignupPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCity = (e) => setCity(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password, city };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) =>   {    
         console.log(response.data)
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (

    <div>

    <div>
    <MainImage /> 
    </div>
   
    <div className="SignupPage">
    
 

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input className='sign-up-inputs' type="text" name="username" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input className='sign-up-inputs' type="password" name="password" value={password} onChange={handlePassword} />
       
       <label htmlFor="city">City</label>
        <input type="city" className='sign-up-inputs' name="city" value={city} onChange={handleCity} />

      <button onClick={handleSubmit} className='Signup-button'>Sign Up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already a member?</p>
     
      <Link to="/login" className='login-link' style={{ textDecoration: 'none' }}>Login</Link>
    </div>
    </div>
  );
}

export default SignupPage;
