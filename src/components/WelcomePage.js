import React from 'react';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
    return ( 
        <div>
            {/* <Link to='/login'>Login</Link> */}
            <h2>Welcome To FlexTogether</h2>
          <Link to='/selection'> <button >Start</button> </Link>
        </div>
     );
}
 
export default WelcomePage;