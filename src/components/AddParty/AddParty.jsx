import { useState  } from 'react';
import axios from 'axios';

function AddParty({ getParty }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState('');
  const [requests, setRequests] = useState('');

  const handleTitle = (e) => setTitle(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTheme = (e) => setTheme(e.target.value);
  const handleRequests = (e) => setRequests(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { title, location, description, theme, requests };


    axios
      .post(`${process.env.REACT_APP_API_URL}/api/AddParty`, body)
      .then(() => {
        getParty();
      })
      .catch((err) => console.log(err));

    setTitle('');
    setLocation('');
    setDescription('');
    setTheme('');
    setRequests('');
  };

  return (
    <div className="AddParty">
      <h3>Add Party</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="location">Location</label>
        <input type="text" name="location" value={location} onChange={handleLocation} />

        <label htmlFor="description"> Description</label>
        <input type="text" name="description" value={description} onChange={handleDescription} />

        <label htmlFor="theme"> Theme</label>
        <input type="text" name="theme" value={theme} onChange={handleTheme} />
       
        <label htmlFor="requests"> Requests</label>
        <input type="text" name="requests" value={requests} onChange={handleRequests} />

        <Link to='/parties/viewparty'><button type="submit">Add Party</button></Link>
      </form>
    </div>
  );
}

export default AddParty;
