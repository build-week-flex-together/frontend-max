import React from 'react';
import { Link } from 'react-router-dom';
import flexImage from '../Extras/FlexIMG.png';

import './WelcomePage.css'


const WelcomePage = () => {
    return ( 
        <div className="welcome-container">
        
            <img
            className="flex-main"
            src={flexImage}
            alt="Man Working Out"
          />
          <h1 className="flex-logo">FlexTogether </h1>
            <h2 className="welcome-h2">Welcome To FlexTogether</h2>
          <Link to='/selection'> <button className="welcome-button">Start</button> </Link>
        </div>
     );
}
 
export default WelcomePage;