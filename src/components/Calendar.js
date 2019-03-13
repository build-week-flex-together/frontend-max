import React from 'react';
import { withRouter } from 'react-router-dom';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            timeBlocks: [],
            
         }
    }

    componentDidUpdate(){
        if(this.props.location.pathname === '/user-schedule') {
        localStorage.setItem('userSchedule', JSON.stringify(this.state.timeBlocks));

    } else if(this.props.location.pathname === '/buddy-schedule') {
        localStorage.setItem('buddySchedule', JSON.stringify(this.state.timeBlocks));
    }
}

    getClassName = (day, time) => {
        let isSelected = false;
        this.state.timeBlocks.forEach(block => {
          if (block.day === day && block.slots.includes(time)) {
            isSelected = true;
          }
        })
        return isSelected ? 'selected' : '';
      }
    
      handleTime = (day, time) => {
        let timeBlocks = this.state.timeBlocks;
        let dayBlock = timeBlocks.find(block => block.day === day);
        if (!dayBlock) {
          dayBlock = { day, slots: [time] };
          timeBlocks = [
            ...this.state.timeBlocks,
            dayBlock,
          ];
        } else if (dayBlock.slots.includes(time)) {
          const index = dayBlock.slots.indexOf(time);
          dayBlock = {
            ...dayBlock,
            slots: dayBlock.slots.filter(timeInFilter => timeInFilter !== time)
          }; 
          timeBlocks = this.state.timeBlocks.map(dayFromMap => {
            if (dayFromMap.day === day) {
                if (!dayBlock.slots.length) return null;
              return dayBlock
            }
            return dayFromMap;
        })
        } else {
          dayBlock = {
            ...dayBlock,
            slots: [
              ...dayBlock.slots,
              time,
            ]
          };
          timeBlocks = this.state.timeBlocks.map(dayFromMap => {
            if (dayFromMap.day === day) {
              return dayBlock
            }
            return dayFromMap;
        })
        }
        timeBlocks = timeBlocks.filter(block => block)
        this.setState({
          timeBlocks
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
                    {day.slots.map(time => (
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