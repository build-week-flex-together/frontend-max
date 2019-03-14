import React from 'react';

import Axios from 'axios';


class EmailVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


verifyUser = (user) => {
Axios.post('https://flextogether.herokuapp.com/api/invite/:token/verify', user)
.then(response => {
console.log(response)
})
.catch(err => {
    console.log(err)
})
}


    render() { 
        return ( 
            <div>
            <button>Click Here To Verify Your Account</button>
</div>
         );
    }
}
 
export default EmailVerify;