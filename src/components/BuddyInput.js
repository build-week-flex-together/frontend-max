import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class BuddyInput extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        inviteInfo: {
        name: '',
        email: '',
        phone: '',
        mobility: ''
        }  
    }
    }
    addUser = () => {
        
        const newUser = {
            myInfo: {
                ...JSON.parse(localStorage.userType),
                ...JSON.parse(localStorage.name),
                ...JSON.parse(localStorage.email),
                ...JSON.parse(localStorage.phone),
                ...JSON.parse(localStorage.mobility),
                // ...JSON.parse(localStorage.availabilityTimes)
            },
            inviteInfo: {
                ...JSON.parse(localStorage.name),
                ...JSON.parse(localStorage.email),
                ...JSON.parse(localStorage.phone),
                ...JSON.parse(localStorage.mobility)
            }
            
        }
        Axios.post('https://test-ft-api.herokuapp.com/api/auth/onboard', newUser)
        .then(response => {
          console.log(response)
          this.setState({
            newUser: response.data,
            
          })
        })
        .catch(err => console.log(err))
      }

 

    componentDidUpdate(){
        localStorage.setItem('inviteInfo', JSON.stringify(this.state));
    }
    
    

    handleMobilityChange = (event) => {
        let value = event.target.value;
        if (event.target.value === '1' || '2' || '3') {
          value = parseInt(value, 10)
        }
        this.setState({mobility: value});
      }
    
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    
        render() {
        return ( 
            <div>
                 <h2>Fitness is always more fun with friends!</h2>
            <p>Invite a friend or loved one to complete the program with you. We'll show them <br/>
            your available times and find a time that works for both of you.
            </p>
                <form>
                   <li> <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Name"
                    value={this.state.name}
                    name="name" 
                    /> </li>
                   <li> <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Email"
                    value={this.state.email}
                    name="email"
                    /> </li>
                   <li> <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Phone Number"
                    value={this.state.phone}
                    name="phone"
                    /> </li>
                </form>
                <h2>Mobility Level (choose one)</h2>
            {/* Need to implement radio button options from material ui  */}
                    <button value='1' onClick={this.handleMobilityChange}>Low</button>
                    <button value='2' onClick={this.handleMobilityChange}>Medium</button>
                    <button value='3' onClick={this.handleMobilityChange}>High</button>
                <br/>
                <br/>
                <br/>
    
                  <Link to='/user-completed'>  <button onClick={this.addUser} >SUBMIT</button> </Link>
            </div>
         );
        }
    }
     
    export default BuddyInput;