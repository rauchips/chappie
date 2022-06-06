import React from 'react'

function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input 
        type="search" 
        placeholder="find your chappie 🤖"
        className="tc pa3 b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox