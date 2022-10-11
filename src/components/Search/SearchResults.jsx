import React from 'react';
// import Searchbar from '../Searchbar/Searchbar';

 
function SearchResults() {
  const { searchResults } = props;
  const [query, setQuery] = useState('');

  let filteredThemes = query.filter((query) => query.theme.toLowerCase)
  return (
    <div>Party Results</div>
  ) 
}

export default SearchResults