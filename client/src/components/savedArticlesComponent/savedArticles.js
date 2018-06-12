import React from 'react';
import './savedArticles.css';
// import friendLogo from './friendslogo2.jpg'

const SavedArticles = props => (
    <div id="savedArticles" className="row">
        <div className="col-md-2"></div>
        <div id="savedArticles-container" className="col-md-8 rounded">
            <div className="row">
                <div className="col-md-12">
                    <h1>Saved Articles</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Saved Articles</p>
                </div>
            </div>
        </div>
        <div className="col-md-2"></div>
    </div>
);

export default SavedArticles;