import React from 'react';
import { Link } from 'react-router-dom';

class UserSchedule extends React.Component {
    constructor() {
        super();
        this.state = {
            timezone: '',
            availabilityTimes: []
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

                <h1>CALENDAR GOES HERE</h1>

                <Link to='/buddy-input'><button>Next</button></Link>
        </div>
     );
    }
}
 
export default UserSchedule;