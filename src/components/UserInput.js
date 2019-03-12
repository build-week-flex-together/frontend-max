import React from 'react';
import { Link } from 'react-router-dom';


class UserInput extends React.Component {
constructor(props) {
    super(props);
    
this.state = {
    myInfo: {
    
    name: '',
    email: '',
    phone: '',
    notifyEmail: false,
    notifyPhone: false,
    mobility: ''
    
    }  
}
}



componentDidUpdate(){
    localStorage.setItem('myInfo', JSON.stringify(this.state));
}

handleChange = (event) => {
    if(event.target.value === 'text') {
   return this.setState({
        
        notifyPhone: true
    })
} else if(event.target.value === 'email') {
    return this.setState({
        
        notifyEmail: true
    })
} else if(event.target.value === 'text-email') {
    return this.setState({
        notifyPhone: true,
        notifyEmail: true
    })
}
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
                <select value={this.state.notify} onChange={this.handleChange}>
                    <option value='Select'>Choose One</option>
                    <option value='text'>Text Message</option>
                    <option value='email'>Email</option>
                    <option value='text-email'>Text & Email</option>
                    
                </select>
                </h3>
                <h2>Mobility Level (choose one)</h2>
            {/* Need to implement radio button options from material ui but for now 
            there will be meaningless buttons just for sake of viewing */}
         
         
         
                    
                    <button value='1' onClick={this.handleMobilityChange}>Low</button>
                    <button value='2' onClick={this.handleMobilityChange}>Medium</button>
                    <button value='3' onClick={this.handleMobilityChange}>High</button>
                    
               
                
                <br/>
                <br/>
                <br/>
              <Link to='/user-schedule'>  <button>Next</button> </Link>
        </div>
     );
    }
}
 
export default UserInput;