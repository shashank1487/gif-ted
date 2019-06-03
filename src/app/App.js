import React, { Component, Fragment, lazy, Suspense } from "react";
import SearchBar from "./components/search/search-bar";
import { SEARCH_RESULTS, NO_RECORDS_MESSAGE } from "./utils/constants";

import "./app.scss";
import spinnerImg from "./assets/images/spinner.gif";

const InfiniteScroll = lazy(() => import("react-infinite-scroller"));
const ResultItem = lazy(() =>
  import("./components/results/result-item/result-item")
);

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

  renderItems = () => {
    const { results, isLoadLocked } = this.state;

    const loader = (
      <div className="text-center">
        <img src={spinnerImg} alt="spinner" className="spinner" />
      </div>
    );

    return (
      <Suspense fallback={loader}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.search}
          hasMore={!isLoadLocked}
          loader={loader}
        >
          {results.map((result, idx) => (
            <ResultItem {...result} key={idx} />
          ))}
        </InfiniteScroll>
      </Suspense>
    );
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
          <div className="row results">
            <div className="header">
              <h3>
                <span className="p-2">
                  <i className="fa fa-search" />
                </span>
                <span>{SEARCH_RESULTS}</span>
              </h3>
            </div>
            {results.length > 0 && this.renderItems()}
            {isLoadLocked ? (
              <div className="no_records">
                <span>{NO_RECORDS_MESSAGE}</span>
              </div>
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}
