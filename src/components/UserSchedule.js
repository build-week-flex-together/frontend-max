import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import './UserSchedule.css' 

const timeSlots = [
    '6:00 am',
    '6:30 am',
    '7:00 am',
    '7:30 am',
    '8:00 am',
    '8:30 am',
    '9:00 am',
    '9:30 am',
    '10:00 am',
    '10:30 am',
    '11:00 am',
    '11:30 am',
    '12:00 pm',
    '12:30 pm',
    '1:00 pm',
    '1:30 pm',
    '2:00 pm',
    '2:30 pm',
    '3:00 pm',
    '3:30 pm',
    '4:00 pm',
    '4:30 pm',
    '5:00 pm',
    '5:30 pm',
    
    ]

const days = [
   {day: 'Monday',
    timeSlots: timeSlots
},
{day: 'Tuesday',
timeSlots: timeSlots
},
{day: 'Wednesday',
timeSlots: timeSlots
},
{day: 'Thursday',
timeSlots: timeSlots
},
{day: 'Friday',
timeSlots: timeSlots
},
{day: 'Saturday',
timeSlots: timeSlots
},
{day: 'Sunday',
timeSlots: timeSlots
}
]





class UserSchedule extends React.Component {

    constructor() {
        super();
        this.state = {
            timezone: '',
            // timeBlocks: [
            //     {
            //       day: 'Wednesday',
            //       slots: ['6:30 AM', '7:00AM', '7:30AM', '8:30AM']
            //     },
            //     {
            //       day: 'Friday',
            //       slots: ['6:30AM', '7:00AM', '7:30AM', '8:30AM', '10:30AM']
            //     },
            //   ],
            
            // availabilityTimes: [],

        }
    }



    componentDidUpdate(){
        localStorage.setItem('timeZone', JSON.stringify(this.state));
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
                    <option>Choose One</option>
                    <option value='America/Los_Angeles'>Los Angeles (PST)</option>
                    <option value='America/Denver'>Denver (MST)</option>
                    <option value='America/Chicago'>Chicago (CST)</option>
                    <option value='America/New_York'>New York (EST)</option>
                    
                </select></p>

               
                <Calendar calendarData={days}/>
               
                <br/>
              

                <Link to='/buddy-input'><button className='calendar-button'>Next</button></Link>
                
        </div>
     );
    }
}
 
export default UserSchedule;