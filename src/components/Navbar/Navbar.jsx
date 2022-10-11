import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import {useContext} from 'react';
import Anon from '../Anon/Anon'; 

function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);

    return (
        <nav className ="Navbar">
        <div className = "Nav-logo">
        <Link to="/"  style={{ textDecoration: 'none' }}>
            <h1 className="Nav-logo">COME DINE</h1>
        </Link>
        </div>

        {loggedIn && (
            <> <div className='nav-links' >
                <Link to="/about/about" style={{ textDecoration: 'none' }} className='nav-links-indv'>
                    ABOUT
                </Link>
      
         
                <Link to="/search/searchparty" style={{ textDecoration: 'none' }} className='nav-links-indv'>
                    FIND A PARTY
                </Link>

                <Link to="/parties/addparty" style={{ textDecoration: 'none' }} className='nav-links-indv'>
                    Host
                </Link>

                <Link to="/search/searchrecipe" style={{ textDecoration: 'none' }} className='nav-links-indv'>
                    Menus
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none' }} className='nav-links-indv' onClick={()=>{logout()}
            }>
                    Logout
                </Link>

                </div>
            </>
        )}


      {/*  {!loggedIn && (

            <>
                <Link to="/signup">
                    <Anon>
                    <button>Signup</button>
                    </Anon>
                </Link>

                <Link to="/login">
                <Anon>
                    <button>login</button>
                </Anon>
                </Link>
            </>
        )} */}
 
        </nav>
    );
}

export default Navbar;