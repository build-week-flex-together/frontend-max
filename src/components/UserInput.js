import React from 'react';
import { Link } from 'react-router-dom';

class UserInput extends React.Component {
constructor(props) {
    super(props);
    
this.state = {
    name: '',
    email: '',
    phone: '',
    value: '',
    level: ''
    
}
}

handleChange = (event) => {
    this.setState({value: event.target.value});
  }

handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}



    render() {
    return ( 
        <div>
            <h3>Tell us a bit more...</h3>
            <form>
               <li> <input 
                onChange={this.handleInputChange}
                placeholder="Name"
                value={this.state.name}
                name="name" 
                /> </li>
               <li> <input 
                onChange={this.handleInputChange}
                placeholder="Email"
                value={this.state.email}
                name="email"
                /> </li>
               <li> <input 
                onChange={this.handleInputChange}
                placeholder="Phone Number"
                value={this.state.phone}
                name="phone"
                /> </li>
            </form>

            <h3>I prefer to receive notifications by {' '}
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='textemail'>Text & Email</option>
                    <option value='txt'>Text Message</option>
                    <option value='email'>Email</option>
                    
                </select>
                </h3>
                <h2>Mobility Level (choose one)</h2>
            {/* Need to implement radio button options from material ui but for now 
            there will be meaningless buttons just for sake of viewing */}
            <button>Low</button>
            <button>Medium</button>
            <button>High</button>
                <br/>
                <br/>
                <br/>
              <Link to='/user-schedule'>  <button>Next</button> </Link>
        </div>
     );
    }
}
 
export default UserInput;