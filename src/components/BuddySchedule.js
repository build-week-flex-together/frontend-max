import React from 'react';
import { Link } from 'react-router-dom'
import Calendar from './Calendar';
import axios from 'axios';

class BuddySchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            timeSlots: [],
            userSchedule: JSON.parse(localStorage.getItem('userSchedule'))
        }
    }

    // componentDidMount() {
    //     axios.get('https://flextogether.herokuapp.com/api/invite/:token').then(response => {
    //       console.log(response);
    //       this.setState({timeSlots: response.data})
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   }

    render() {
    return ( 
        <div>
            <h3>Here are some good times for USER1, do any of these work for you?</h3>
            <p>To complete the beta we are asking that people commit to one <br/>
             30 minute time block once a week. Please choose what times work well for you.`</p>

        <Calendar calendarData={this.state.userSchedule}/>

        
        <Link to='/buddy-completed' ><button>SUBMIT</button></Link>
        <br/>
        <br/>
        
        <Link to='/contact' >none of these times work for me</Link>
        </div>
     );
    }
}
 
export default BuddySchedule;