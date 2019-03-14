import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class BuddyInput extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        
        recipient_name: '',
        recipient_email: '',
        recipient_phone_number: '',
        recipient_mobility_level: ''
          
    }
    }
    addUser = () => {
        // console.log(localStorage.is_companion)
        const newUser = {
            
            
                ...JSON.parse(localStorage.getItem('is_companion')),
               
                 ...JSON.parse(localStorage.getItem('myInfo')),
                 ...JSON.parse(localStorage.getItem('timeZone')),
            //    'email': JSON.parse(localStorage.getItem('email')),
            //   'phone_number': JSON.parse(localStorage.getItem('phone_number')),
            //    'mobility_level': JSON.parse(localStorage.getItem('mobility_level')),
                ...JSON.parse(localStorage.getItem('userSchedule')),
            
            
                ...JSON.parse(localStorage.getItem('inviteInfo')),
                
            //    'recipient_email': JSON.parse(localStorage.getItem('recipient_email')),
            //   'recipient_phone_number': JSON.parse(localStorage.getItem('recipient_phone_number')),
            //   'recipient_mobility_level': JSON.parse(localStorage.getItem('recipient_mobility_level'))
            
            
        }
        console.log(newUser)
        Axios.post('https://flextogether.herokuapp.com/api/invite', newUser)
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
        // let value = event.target.value;
        // if (event.target.value === '1' || '2' || '3') {
        //   value = parseInt(value, 10)
        // }
        this.setState({recipient_mobility_level: event.target.value});
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
                    <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Name"
                    value={this.state.recipient_name}
                    name="recipient_name" 
                    /> <br/>
                   <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Email"
                    value={this.state.recipient_email}
                    name="recipient_email"
                    /> <br/>
                    <input 
                    onChange={this.handleInputChange}
                    placeholder="Buddy Phone Number"
                    value={this.state.recipient_phone}
                    name="recipient_phone_number"
                    /> <br/>
                </form>
                <h2>Mobility Level (choose one)</h2>
            {/* Need to implement radio button options from material ui  */}
                    <button value='Low' onClick={this.handleMobilityChange}>Low</button>
                    <button value='Medium' onClick={this.handleMobilityChange}>Medium</button>
                    <button value='High' onClick={this.handleMobilityChange}>High</button>
                <br/>
                <br/>
                <br/>
    
                  <Link to='/user-completed'>  <button onClick={this.addUser} >SUBMIT</button> </Link>
            </div>
         );
        }
    }
     
    export default BuddyInput;