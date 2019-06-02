import React, { Component, Fragment } from "react";
import SearchBar from "./components/search/search-bar";

import "./app.scss";

export default class App extends Component {
  state = {
    searchTerm: "",
    url: "",
    offset: 0,
    limit: "",
    get: null,
    isLoadLocked: false,
    results: []
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({
      searchTerm: value
    });
  };

  searchHandler = () => {
    this.setState(
      {
        results: [],
        offset: 0,
        isLoadLocked: false
      },
      () => {
        this.configureSearch();
      }
    );
  };

  configureSearch = () => {
    let { url, limit, get } = this.state;

    if (url && get && limit) {
      this.search();
    } else {
      this.loadAPI()
        .then(
          ({
            axios: { get },
            endpoints: {
              default: { GetSearchResults }
            },
            config: {
              default: {
                search: { limit }
              }
            }
          }) => {
            this.setState(
              {
                url: GetSearchResults,
                limit,
                get
              },
              () => this.search()
            );
          }
        )
        .catch(err => console.log(err));
    }
  };

  loadAPI = () => {
    return Promise.all([
      import("axios"),
      import("./utils/endpoints"),
      import("./utils/config")
    ]).then(([axios, endpoints, config]) => {
      return {
        axios,
        endpoints,
        config
      };
    });
  };

  

  render() {
    const { searchTerm, results, isLoadLocked } = this.state;

    return (
      <Fragment>
        <div className="page-header mb-3">
          <h2 className="text-center text-white header-text">GIFted</h2>
        </div>
        <div className="container py-3">
          <SearchBar
            searchTerm={searchTerm}
            changeHandler={this.changeHandler}
            searchHandler={this.searchHandler}
          />
        </div>
      </Fragment>
    );
  }
}
