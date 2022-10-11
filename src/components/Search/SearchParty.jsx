import { useEffect, useState } from "react";
import axios from "axios";
import { MDBDataTable } from "mdbreact";
import thumbnail from '../../images/thumnail.png'
import { useNavigate } from "react-router-dom";

function SearchParty(props) {
  const { searchResults } = props;
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(searchResults)
      .then((response) => {
        console.log(response.data);
        setQuery(response.data.query);
        setSearchResults(response.data.searchresults);
      })
      .catch((err) => console.log(err));
  };
  const fetchUsers = async () => {
    const token = localStorage.getItem("authToken");
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/parties/all`,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    setUsers(data);
    console.log(data);
  };
  const handleRowClick = (user) =>{
    navigate('/parties/viewparty', {state: user})
  }
  useEffect(() => {
    try {
      fetchUsers();
     
    } catch (error) {
      console.log(error);
    }
  }, []);
  let tableData = {
    columns: [
      {
        label: "Image",
        field: "imgUrl",
        sort: "disabled",
        width: 300,
      },
      {
        label: "Username",
        field: "username",
        sort: "disabled",
        width: 300,
      },
      {
        label: "City",
        field: "city",
        sort: "disabled",
        width: 300,
      
      },
      // {
      //   label: "First Name",
      //   field: "firstName",
      //   sort: "asc",
      //   width: 300,
      // },
      // {
      //   label: "Last Name",
      //   field: "lastName",
      //   sort: "asc",
      //   width: 300,
      // },
      // {
      //   label: "Email",
      //   field: "email",
      //   sort: "asc",
      //   width: 300,
      //   search: true,
      // },
    ],

    rows: users?.map((user)=>{
      return{
        imgUrl: <img src={user?.imgUrl ? user?.imgUrl :thumbnail} alt="user image" height={50} />,
        username:user?.username,
        city:user?.city,
        clickEvent: () => handleRowClick(user)
      }
    }),
  };
  return (
    <div>
      <div>
      
      </div>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="header-search">
          <span className="search-bar">Search</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search ..."
          name="s"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
      </form> */}
      <div style={{ margin: "20px" }}>
        <MDBDataTable
          striped
          data={tableData}
          responsive
          paging={false}
          // sortRows={[ "title", "bill", "description"]}
        />
      </div>
    </div>
  );
}

/*   function SearchParty() {
    const [city, setCity] = useState('');
    const [theme, setTheme] = useState('');
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    const getSearch = async () => {
      try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/search/searchresults${id}`);
  
        setCity(response.data.city);
        setTheme(response.data.theme);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getSearch();
    }, []);
  
    const handleCity = (e) => setCity(e.target.value);
    const handleTheme = (e) => setTheme(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }  
    return(

  <form onSubmit={handleSubmit}>
         
        <div className="radio-elements-party">
            <label for="city">City</label>
            <input type="radio"  name="city" value={city} onChange={handleCity}/>

            <label for="theme">Theme</label>
            <input type="radio"  name="theme" value={theme} onChange={handleTheme}/>
          </div>
  
      <label htmlFor="header-search">
          <span className="search-bar">Search</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search ..."
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
  )
}; */

export default SearchParty;
