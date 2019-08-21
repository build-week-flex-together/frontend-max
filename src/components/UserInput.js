import React from 'react';
import { Link } from 'react-router-dom';


class UserInput extends React.Component {
constructor(props) {
    super(props);
    
this.state = {
    
    
    name: '',
    email: '',
    phone_number: '',
    notification_preference: '',
    mobility_level: '',
    clickedLow: false,
    clickedMed: false,
    clickedHigh: false
    
     
}
}



componentDidUpdate(){
    localStorage.setItem('myInfo', JSON.stringify(this.state));
}

handleChange = (event) => {

    this.setState({
        notification_preference: event.target.value
    })
//     if(event.target.value === 'text') {
//    return this.setState({
        
//         notifyPhone: true
//     })
// } else if(event.target.value === 'email') {
//     return this.setState({
        
//         notifyEmail: true
//     })
// } else if(event.target.value === 'text-email') {
//     return this.setState({
//         notifyPhone: true,
//         notifyEmail: true
//     })
// }
  }

  handleMobilityChangeLow = (event) => {
    // let value = event.target.value;
    // if (event.target.value === '1' || '2' || '3') {
    //   value = parseInt(value, 10)
    // }
    this.setState({
        mobility_level: event.target.value,
       clickedLow: true
    
    });

  }

  handleMobilityChangeMed = (event) => {
    // let value = event.target.value;
    // if (event.target.value === '1' || '2' || '3') {
    //   value = parseInt(value, 10)
    // }
    this.setState({
        mobility_level: event.target.value,
       clickedMed: true
    
    });

  }

  handleMobilityChangeHigh = (event) => {
    // let value = event.target.value;
    // if (event.target.value === '1' || '2' || '3') {
    //   value = parseInt(value, 10)
    // }
    this.setState({
        mobility_level: event.target.value,
       clickedHigh: true
    
    });

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
                value={this.state.phone_number}
                name="phone_number"
                /> </li>
            </form>

            <h3>I prefer to receive notifications by {' '}
                <select value={this.state.notify} onChange={this.handleChange}>
                    <option value='Select'>Choose One</option>
                    <option value='Text'>Text Message</option>
                    <option value='Email'>Email</option>
                    <option value='Text & Email'>Text & Email</option>
                    
                </select>
                </h3>
                <h2>Mobility Level (choose one)</h2>
            {/* Need to implement radio button options from material ui but for now 
            there will be meaningless buttons just for sake of viewing */}
         
         
         
                    <div className="buttons-selection-input">
                    <button value='Low' onClick={this.handleMobilityChangeLow} className={this.state.clickedLow === true ? 'low-button' : 'null'}>Low</button>
                    <button value='Medium' onClick={this.handleMobilityChangeMed} className={this.state.clickedMed === true ? 'med-button' : 'null'}>Medium</button>
                    <button value='High' onClick={this.handleMobilityChangeHigh} className={this.state.clickedHigh === true ? 'high-button' : 'null'}>High</button>
                    </div>
               
                
                <br/>
                <br/>
                <br/>
              <Link to='/user-schedule'>  <button>Next</button> </Link>
        </div>
     );
    }
}
 
export default UserInput;