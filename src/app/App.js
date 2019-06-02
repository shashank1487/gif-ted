import React, { Component, Fragment } from "react";
import SearchBar from "./components/search/search-bar";

import "./app.scss";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="page-header mb-3">
          <h2 className="text-center text-white header-text">GIFted</h2>
        </div>
        <div className="container py-3">
          <SearchBar />
        </div>
      </Fragment>
    );
  }
}
