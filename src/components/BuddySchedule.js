import React from 'react';
import { Link } from 'react-router-dom'
import Calendar from './Calendar';


class BuddySchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            timeSlots: [],
            userSchedule: JSON.parse(localStorage.getItem('userSchedule'))
        }
    }

    

    render() {
    return ( 
        <div>
            <h3>Here are some good times for USER1, do any of these work for you?</h3>
            <p>To complete the beta we are asking that people commit to one <br/>
             30 minute time block once a week. Please choose what times work well for you.`</p>

        <Calendar calendarData={this.state.userSchedule.availability}/>

        
        <Link to='/buddy-completed' ><button>SUBMIT</button></Link>
        <br/>
        <br/>
        
        <Link to='/contact' >none of these times work for me</Link>
        </div>
     );
    }
}
 
export default BuddySchedule;