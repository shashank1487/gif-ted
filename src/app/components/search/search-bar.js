import React, { Component } from "react";

import "./search-bar.scss";
export default class SearchBar extends Component {
  state = {
    searchTerm: "",
    previousSearchTerm: "",
    url: "",
    offset: 0,
    limit: "",
    get: null,
    isLoadLocked: false
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({
      searchTerm: value
    });
  };

  searchHandler = () => {}

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-header row">
        <div className="col-md-10 col-lg-11 col-8">
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={this.changeHandler}
          />
        </div>
        <div className="col-md-2 col-lg-1 col-2">
          <button className="btn btn-search" onClick={this.searchHandler}>
            Search
          </button>
        </div>
      </div>
    );
  }
}
