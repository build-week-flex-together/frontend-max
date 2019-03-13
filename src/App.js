import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import UserSelection from './components/UserSelection';
import UserInput from './components/UserInput';
import BuddyInput from './components/BuddyInput';
import UserSchedule from './components/UserSchedule';
import UserCompleted from './components/UserCompleted';
import BuddySchedule from './components/BuddySchedule';
import BuddyCompleted from './components/BuddyCompleted';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {

  }
}



  
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={WelcomePage} />
        <Route path='/selection' component={UserSelection}/>
        <Route path='/user-input' component={UserInput} />
        <Route path='/buddy-input' component={BuddyInput} />
        <Route path='/user-schedule' component={UserSchedule} />
        <Route path='/user-completed' component={UserCompleted} />
        <Route path='/buddy-schedule' component={BuddySchedule} />
        <Route path='/buddy-completed' component={BuddyCompleted} />
        <Route path='/contact' component={Contact}/>

      </div>
    );
  }
}

export default App;
