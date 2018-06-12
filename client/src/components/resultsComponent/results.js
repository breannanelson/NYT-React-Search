import React from 'react';
import './results.css';
// import friendLogo from './friendslogo2.jpg'

const Results = props => (
    <div id="results" className="row">
        <div className="col-md-2"></div>
        <div id="results-container" className="col-md-8 rounded">
            <div className="row">
                <div className="col-md-12">
                    <h1>Results</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Articles</p>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
    </div>
);

export default Results;