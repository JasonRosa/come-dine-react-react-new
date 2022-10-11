import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import CreateProfile from './pages/Profile/CreateProfile';
import ViewProfile from './pages/Profile/ViewProfile';
import ViewParty from './pages/Parties/ViewParty';
import PartyDetailsPage from './pages/Parties/PartyDetailsPage';
import AddParty from './components/AddParty/AddParty';
import Request from './components/Request/Request';
import SearchParty from './components/Search/SearchParty';
import SearchRecipe from './components/Search/SearchRecipe';
/*import SearchBar from './components/Search/Search'*/
import SearchResults from './components/Search/SearchResults';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Anon from './components/Anon/Anon';
import Private from './components/Private/Private';
import About from './pages/About/About';
import MainImage from './components/MainImage/MainImage';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    const token = localStorage.getItem('authToken')
    if(!token) <Navigate to="/" />
  })
  return (
    <div className="App">
      <Navbar />
      
      {/* <Search /> */}
   


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  
          path="/signup"
          element={
            <Anon>
              <SignupPage />
              </Anon>
          }
        />
        <Route
          path="/login"
          element={
            <Anon>
              <LoginPage />
              </Anon>
          }
        />
        
        <Route path="/profile/viewprofile/:userId" element={<ViewProfile />} />
        <Route path="/profile/create/:id" element={<CreateProfile />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route
          path="/profile/:id"
          element={
            <Private>
              <Profile />
              </Private>
            
          }
        />
        <Route path="/parties/viewparty" element={<ViewParty />} />
        <Route path="/parties/partydetailspage/:id" element={<PartyDetailsPage />} />
        <Route path="/parties/addparty/:id" element={<AddParty />} />
        <Route path="/request/request/:id" element={<Request/>} />
        <Route path="/search/searchparty" element={<SearchParty />} />
        <Route path="/search/searchrecipe" element={<SearchRecipe />} />
        <Route path="/search/searchresuts/:id" element={<SearchResults />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about/about" element={<About />} />
       
      </Routes>
    </div>
  );
}

export default App;

