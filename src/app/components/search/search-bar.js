import React from "react";

import "./search-bar.scss";
const SearchBar = props => {
  const { searchTerm, changeHandler, searchHandler } = props;

  return (
    <div className="search-header row">
      <div className="col-md-10 col-lg-11 col-8">
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={changeHandler}
        />
      </div>
      <div className="col-md-2 col-lg-1 col-2">
        <button className="btn btn-search" onClick={searchHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
