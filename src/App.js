import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import UserSelection from './components/UserSelection';
import UserInput from './components/UserInput';
import BuddyInput from './components/BuddyInput';
import UserSchedule from './components/UserSchedule';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path='/' component={WelcomePage} />
        <Route path='/selection' component={UserSelection}/>
        <Route path='/user-input' component={UserInput} />
        <Route path='/buddy-input' component={BuddyInput} />
        <Route path='/user-schedule' component={UserSchedule} />


      </div>
    );
  }
}

export default App;
