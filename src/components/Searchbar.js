import React from 'react';
import '../styles/Searchbar.scss';
function Searchbar(props) {
  return(
    <div className="searchContainer">
      <input
        type="search"
        value={props.value}
        onChange={props.onSearchChange}
        placeholder="Search verse"
        autoFocus
      />
    </div>
    );
}

export { Searchbar };
