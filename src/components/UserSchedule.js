import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
import './UserSchedule.css' 

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

const days = [
   {day: 'Monday',
    slots: timeSlots
},
{day: 'Tuesday',
slots: timeSlots
},
{day: 'Wednesday',
slots: timeSlots
},
{day: 'Thursday',
slots: timeSlots
},
{day: 'Friday',
slots: timeSlots
},
{day: 'Saturday',
slots: timeSlots
},
{day: 'Sunday',
slots: timeSlots
}
]





class UserSchedule extends React.Component {

    constructor() {
        super();
        this.state = {
            timezone: '',
            timeBlocks: [
                {
                  day: 'Wednesday',
                  slots: ['6:30AM', '7:00AM', '7:30AM', '8:30AM']
                },
                {
                  day: 'Friday',
                  slots: ['6:30AM', '7:00AM', '7:30AM', '8:30AM', '10:30AM']
                },
              ],
            
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

               
                <Calendar calendarData={days}/>
               
                <br/>
              

                <Link to='/buddy-input'><button>Next</button></Link>
        </div>
     );
    }
}
 
export default UserSchedule;