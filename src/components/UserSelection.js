import React from 'react';
import { Link } from 'react-router-dom';

class UserSelection extends React.Component {
    constructor() {
        super();
        this.state = {
            is_companion: false
        }
    }

    componentDidUpdate(){
        localStorage.setItem('is_companion', JSON.stringify(this.state));
    }

handleUser = (event) => {
    // let value = event.target.value;
    // if (event.target.value === '1' || '2') {
    //   value = parseInt(value, 10)
    // }
    this.setState({
        is_companion: event.target.value
    })
}



    render() {
    return ( 
        <div>
            <h1>Who Are You?</h1>
            <h4 className='choose1'>Choose 1:</h4>
            <div className='choose-button'>
        <button className='selection-button' value={false} onClick={this.handleUser}>I am interested in low impact exercise</button>
       
        <button className='selection-button' value={true} onClick={this.handleUser}>I want to be a companion to my loved one/friend who needs to do low impact exercise</button>
        </div>
       <br/>
       <br/>
       <Link to='/user-input' className='link-button'><button>Next</button></Link>
        </div>
     );
    }
}
 
export default UserSelection;