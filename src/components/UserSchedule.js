import React from 'react';
import { Link } from 'react-router-dom';
import './UserSchedule.css' 

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const timeSlots = [
'6:00AM',
'6:30AM',
'7:00AM',
'7:30AM',
'8:00AM',
'8:30AM',
'9:00AM',
'9:30AM',
'10:00AM',
'10:30AM',
'11:00AM',
'11:30AM',
]



class UserSchedule extends React.Component {

    constructor() {
        super();
        this.state = {
            timezone: '',
            availabilityTimes: [],

        }
    }



    componentDidUpdate(){
        localStorage.setItem('userSchedule', JSON.stringify(this.state));
    }


    handleChange = (event) => {
        this.setState({timezone: event.target.value});
      }

      


    render() {
    return ( 
        <div>
            <h3>What's a good time to complete the program?</h3>
            <p>To complete the beta, we are asking that people commit to one <br/>
            30 minute time block once a week. Please choose what times work well for you.
            </p>
            <p>TimeZone: {' '}
                <select value={this.state.timezone} onChange={this.handleChange}>
                    <option value='Pacific Time'>Los Angeles (Pacific Standard Time)</option>
                    <option value='Mountain Time'>Denver (Mountain Standard Time)</option>
                    <option value='Central Time'>Dallas (Central Standard Time)</option>
                    <option value='Eastern Time'>New York (Eastern Standard Time)</option>
                    
                </select></p>

               
                {/* Set to flexbox for calendar class for rows */}
                <div className='calendar'>
                {days.map(day => (
                    <div className='column' key={day}>
                    <h4>{day}</h4>
                    {/* time slots class */}
                    <div className='time-slots'>
                    {timeSlots.map(time => (
                        <div className='time' key={time} > 
                        <p>{time}</p>
                        </div>
                    ))}
                    </div>
                    </div>
                ))}
                </div>
                <br/>
              

                <Link to='/buddy-input'><button>Next</button></Link>
        </div>
     );
    }
}
 
export default UserSchedule;