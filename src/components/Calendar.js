import React from 'react';
import { withRouter } from 'react-router-dom';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            availability: [
                // {
                // day: '',
                // timeSlots: [

                // ]
                // }
            ],
            
         }
    }

    componentDidUpdate(){
        if(this.props.location.pathname === '/user-schedule') {
        localStorage.setItem('userSchedule', JSON.stringify(this.state));

    } else if(this.props.location.pathname === '/buddy-schedule') {
        localStorage.setItem('buddySchedule', JSON.stringify(this.state));
    }
}

    getClassName = (day, time) => {
        let isSelected = false;
        this.state.availability.forEach(block => {
          if (block.day === day && block.timeSlots.includes(time)) {
            isSelected = true;
          }
        })
        return isSelected ? 'selected' : '';
      }
    
      handleTime = (day, time) => {
        let availability = this.state.availability;
        let dayBlock = availability.find(block => block.day === day);
        if (!dayBlock) {
          dayBlock = { day, timeSlots: [time] };
          availability = [
            ...this.state.availability,
            dayBlock,
          ];
        } else if (dayBlock.timeSlots.includes(time)) {
          const index = dayBlock.timeSlots.indexOf(time);
          dayBlock = {
            ...dayBlock,
            timeSlots: dayBlock.timeSlots.filter(timeInFilter => timeInFilter !== time)
          }; 
          availability = this.state.availability.map(dayFromMap => {
            if (dayFromMap.day === day) {
                if (!dayBlock.timeSlots.length) return null;
              return dayBlock
            }
            return dayFromMap;
        })
        } else {
          dayBlock = {
            ...dayBlock,
            timeSlots: [
              ...dayBlock.timeSlots,
              time,
            ]
          };
          availability = this.state.availability.map(dayFromMap => {
            if (dayFromMap.day === day) {
              return dayBlock
            }
            return dayFromMap;
        })
        }
        availability = availability.filter(block => block)
        this.setState({
            availability
        })
      }


    render() { 
        return ( 
            
 <div className='calendar'>
                {this.props.calendarData.map(day => (
                    <div className='column' key={day.day}>
                        <h4>{day.day}</h4>
                    {/* time slots class */}
                        <div className='time-slots'>
                    {day.timeSlots.map(time => (
                        <div className={`time ${this.getClassName(day.day, time)}`} key={time} onClick={() => this.handleTime(day.day, time)} > 
                        <p>{time}</p>
                        </div>
                    ))}
                    </div>
                    </div>
                ))}
                </div>
           
         );
    }
}
 
export default withRouter(Calendar);