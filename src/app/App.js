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

  search = () => {
    let { url, searchTerm, limit, offset, get, results } = this.state;
    let updatedUrl = `${url}&q=${searchTerm}&limit=${limit}&offset=${offset}`;
    get(updatedUrl)
      .then(res => {
        const currentResultsLength = results.length + res.data.pagination.count;
        const total = res.data.pagination.total_count;
        this.setState({
          results: [...results, ...res.data.data],
          offset: offset + limit,
          isLoadLocked: currentResultsLength >= total
        });
      })
      .catch(error => {
        console.log(error);
      });
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
    const { searchTerm } = this.state;

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
          <div className="row">
            <div className="header">
              <h3>
                <span className="p-2">
                  <i className="fa fa-search" />
                </span>
                <span>Search Results</span>
              </h3>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
