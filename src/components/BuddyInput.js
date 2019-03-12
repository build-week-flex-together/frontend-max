import React from 'react';
import { Link } from 'react-router-dom';


class BuddyInput extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        name: '',
        email: '',
        phone: '',
        mobility: ''
        
    }
    }

    componentDidUpdate(){
        localStorage.setItem('buddyInput', JSON.stringify(this.state));
    }
    
    

      handleMobilityChange = (event) => {
        this.setState({mobility: event.target.value});
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
            {/* Need to implement radio button options from material ui but for now 
            there will be meaningless buttons just for sake of viewing */}
                    <button value='1' onClick={this.handleMobilityChange}>Low</button>
                    <button value='2' onClick={this.handleMobilityChange}>Medium</button>
                    <button value='3' onClick={this.handleMobilityChange}>High</button>
                <br/>
                <br/>
                <br/>
    
                  <Link to='/user-completed'>  <button /*onSubmit here will pass everything to db */ >SUBMIT</button> </Link>
            </div>
         );
        }
    }
     
    export default BuddyInput;