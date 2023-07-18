// src/components/Search.js

import React from 'react'

function Search() {
  function handleChange(event) {
    // synthetic event
    console.log(event);
    // value of target (input element)
    console.log(event.target.value)
  }
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  )
}

export default Search
