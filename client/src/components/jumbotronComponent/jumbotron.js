import React from 'react';
import './jumbotron.css';
// import friendLogo from './friendslogo2.jpg'

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid" id="jumbo">
        <div className="container">
            <h1 class="display-3">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            {/* <img id="logo" className="center" src={friendLogo} alt="Friends Logo"/> */}
        </div>
    </div>
);

export default Jumbotron;