import React, { Component } from 'react'
import moment from 'moment'
import testData from './testData.json'

import '../../styles/calendar.css'



class Calendar extends Component{
  constructor(props){
    super(props);

    this.state = {
        events: [],
        currentDate: moment()
    };
    
  }
  
  
  componentDidMount(){
    this.renderCalendar(this.getGoogleCalendarEvents());
  }
  

  /**
   * 
   * 
   * @returns {object} The events return from Google Calendar API
   */
  getGoogleCalendarEvents(){
    // Data from calendar.events.list

    // Get Data from google api here
    let calendarData = testData.items;
    // -----------------------------

    return calendarData;
  }

  renderCalendar(gEvents){
    


    gEvents.forEach((element, i) => {
      let start = element.start.dateTime;
      let end = element.end.dateTime; 
      let title = element.summary
      
      // Non all-day events only
      if(start && end){
        let stateEventArray = this.state.events;
        stateEventArray.push({
            id: i,
            start: start,
            title: title,
            end: end
        });
        this.setState({events: stateEventArray});
      }
  });

  }

  render(){
    return (
        <div className="calendar-container" >

          <div className="calendar">
            <div className="calendar-header">
              <button className="calendar-prev">&lt;</button> 
              <div className="calendar-title">March 2018</div>
              <button className="calendar-next">&gt;</button> 
            </div>
            
            <div className="month-row">
              <div className="day-cell"></div>
              <div className="day-cell"></div>
              <div className="day-cell"></div>
              <div className="day-cell"></div>
              <div className="day-cell">1</div>
              <div className="day-cell today">2</div>
              <div className="day-cell">3</div>
            </div>
            <div className="month-row">
              <div className="day-cell">4</div>
              <div className="day-cell">5</div>
              <div className="day-cell">6</div>
              <div className="day-cell">7</div>
              <div className="day-cell">8</div>
              <div className="day-cell">9</div>
              <div className="day-cell">10</div>
            </div>
            <div className="month-row">
              <div className="day-cell">11</div>
              <div className="day-cell">12</div>
              <div className="day-cell">13</div>
              <div className="day-cell">14</div>
              <div className="day-cell">15</div>
              <div className="day-cell">16</div>
              <div className="day-cell">17</div>
            </div>
            <div className="month-row">
              <div className="day-cell">18</div>
              <div className="day-cell">19</div>
              <div className="day-cell">20</div>
              <div className="day-cell">21</div>
              <div className="day-cell">22</div>
              <div className="day-cell">23</div>
              <div className="day-cell">24</div>
            </div>
            <div className="month-row">
              <div className="day-cell">25</div>
              <div className="day-cell">26</div>
              <div className="day-cell">27</div>
              <div className="day-cell">28</div>
              <div className="day-cell">29</div>
              <div className="day-cell">30</div>
              <div className="day-cell">31</div>
            </div>

          </div>

        </div>
    );
  }
}

export default Calendar;