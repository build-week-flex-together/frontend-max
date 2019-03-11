import React from 'react';
import { Link } from 'react-router-dom';

class UserSchedule extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     value: ''
        // }
    }

    // handleChange = (event) => {
    //     this.setState({value: event.target.value});
    //   }


    render() {
    return ( 
        <div>
            <h3>What's a good time to complete the program?</h3>
            <p>To complete the beta, we are asking that people commit to one <br/>
            30 minute time block once a week. Please choose what times work well for you.
            </p>
            {/* <p>TimeZone: {' '}
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='PST'>Los Angeles (Pacific Standard Time)</option>
                    <option value='MST'>Denver (Mountain Standard Time)</option>
                    <option value='CST'>Dallas (Central Standard Time)</option>
                    <option value='EST'>New York (Eastern Standard Time)</option>
                    
                </select></p> */}

                <Link to='/buddy-input'><button>Next</button></Link>
        </div>
     );
    }
}
 
export default UserSchedule;