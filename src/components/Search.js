import React from 'react';

const Search = ({handleSearchButtonClick}) => {
  return (
    <div>
      <input type="text" placeholder="Search..."></input>
      <input type="submit" value="Go!" onClick={handleSearchButtonClick}></input>
    </div>
  )
}

export default Search;