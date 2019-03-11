import React from 'react';
import { Link } from 'react-router-dom';

const UserSelection = () => {
    return ( 
        <div>
            <h2>Who Are You?</h2>
            <h4>Choose 1:</h4>
        <Link to='/user-input'><button>I am interested in low impact exercise</button></Link>
        <Link to='/buddy-input'><button>I want to be a companion to my loved one/friend who needs to do low impact exercise</button></Link>
       
        </div>
     );
}
 
export default UserSelection;