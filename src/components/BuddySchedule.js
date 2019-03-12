import React from 'react';
import { Link } from 'react-router-dom'

const BuddySchedule = () => {
    return ( 
        <div>
            <h3>Here are some good times for [User 1], do any of these work for you?</h3>
            <p>To complete the beta we are asking that people commit to one <br/>
             30 minute time block once a week. Please choose what times work well for you.</p>
        
        <Link to='/buddy-completed' ><button>SUBMIT</button></Link>
        <br/>
        <br/>
        
        <Link to='/contact' >none of these times work for me</Link>
        </div>
     );
}
 
export default BuddySchedule;