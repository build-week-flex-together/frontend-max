import React from 'react';
import { Link } from 'react-router-dom';

class UserSelection extends React.Component {
    constructor() {
        super();
        this.state = {
            userType: ''
        }
    }

    componentDidUpdate(){
        localStorage.setItem('userType', JSON.stringify(this.state));
    }

handleUser = (event) => {
    this.setState({
        userType: event.target.value
    })
}



    render() {
    return ( 
        <div>
            <h2>Who Are You?</h2>
            <h4>Choose 1:</h4>
        <button value='1' onClick={this.handleUser}>I am interested in low impact exercise</button>
        <button value='2' onClick={this.handleUser}>I want to be a companion to my loved one/friend who needs to do low impact exercise</button>
       <br/>
       <br/>
       <Link to='/user-input'>Next</Link>
        </div>
     );
    }
}
 
export default UserSelection;