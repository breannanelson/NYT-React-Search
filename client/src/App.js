import React, { Component, Fragment } from "react";
import Jumbotron from './components/jumbotronComponent/jumbotron.js'
import Search from './components/searchComponent/search.js'
import Results from './components/resultsComponent/results.js';
import SavedArticles from './components/savedArticlesComponent/savedArticles.js'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron/>
        <Search/>
        <Results/>
        <SavedArticles/>
      </Fragment>
    );
  }
}

export default App;
