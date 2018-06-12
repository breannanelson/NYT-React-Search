import React from 'react';
import './search.css';
// import friendLogo from './friendslogo2.jpg'

const Search = props => (
    <div className="row">
        <div className="col-md-2"></div>
        <div id="search-container" className="col-md-8 rounded">
            <div className="row">
                <div className="col-md-12">
                    <h1>Search</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label for="topic-input">Topic</label>
                    <input id="topic-input" className="form-control" type="text" placeholder="Trump" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label for="start-year-input">Start Year</label>
                    <input id="start-year-input" className="form-control" type="text" placeholder="2015" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label for="end-year-input">End Year</label>
                    <input id="end-year-input" className="form-control" type="text" placeholder="2018" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button id="submit-btn" className="btn">Submit</button>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
    </div>
);

export default Search;