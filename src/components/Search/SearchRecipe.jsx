import { useState , useEffect } from 'react'
import axios from 'axios';

 



  function SearchRecipe() {
    const [query, setQuery] = useState('');
    const [recipe, setRecipe] = useState('');
 
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b68fcccf&app_key=1d601ac168e8c116be64a5bfc29149b7`,
      )
      .then((response) => {
        console.log(response.data)
        setRecipe(response.data.hits)
      })
      .catch((err) =>console.log(err) )
   };

/* 
    useEffect(() => {
      
    }, []); */
  
    
     
    return (
<div>

<form onSubmit={handleSubmit}>
         
         {/* <div className="radio-elements-party">
            <label for="cuisine">Cuisine</label>
            <input type="radio"  name="cuisine" value={cuisine} onChange={handleCuisine}/>
 
            <label for="ingredients">Ingredients</label>
            <input type="radio"  name="ingredients" value={ingredients} onChange={handleIngredients}/>
          </div> */}
  
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
  </form>
 

<div>

  <h1>Results</h1>
  {recipe && 
  recipe.map((el) => (<a href={el.recipe.url} key={el.recipe.label}>
            <img
              src={el.recipe.images["THUMBNAIL"].url}
              alt={el.recipe.label}
            />
            <h3>{el.recipe.label}</h3>
          </a>
        ))}
</div>
</div>


  );
};
  
export  default SearchRecipe;






 






 