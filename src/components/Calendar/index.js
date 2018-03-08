import React, { Component } from 'react'
import moment from 'moment'
import testData from './testData.json'
import classNames from 'classnames'

import '../../styles/calendar.css'



class Calendar extends Component{
  constructor(props){
    super(props);

    this.state = {
        events: [],
        currentDate: moment(),
        today: new Date(),
        calendarDays: [],
        activityDays: {}
    };
  }
  
  
  componentDidMount(){
    this.renderCalendar(this.getGoogleCalendarEvents());
    this.setState({calendarDays: this.getDayCellDivs()});
  }
  

  /**
   * 
   * 
   * @returns {object} The events return from Google Calendars API
   */
  getGoogleCalendarEvents(){
    // Data from calendar.events.list

    // Get Data from google api here
    let calendarData = testData.items;
    // -----------------------------

    return calendarData;
  }


  /**
   * 
   * 
   * @param {object} gEvents The items obtained from Calendar.getGoogleCalendarEvents()
   * 
   */
  renderCalendar(gEvents){

    // Parse JSON data
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

      //render for calendar


    });
  }

  /**
   * 
   * 
   * @param {integer} day The day in the month (0-31)
   * @memberof Calendar
   */
  doesDayHaveActivity(day){

  }

  dayDiv(day){
    let spanClasses = classNames({
      "today": day+1 === this.state.today.getDate()
    });
    
    return (
      <div className="day-cell">
        <span 
          className={spanClasses}
        >{day+1}</span>
      </div>
    );
  }

  // I have commited great sin with this code... 
  getDayCellDivs(){
    let dayDivs = [];
    let monthDivs = [];
    console.log(`Events: ${this.state.events[0].title}`);

    // Create empty day cells to set first day of the month at the correct day of the week
    let currentMonthIndex = moment().month();
    let firstDayOfMonthIndex = new Date(2018, currentMonthIndex).getDay(); 

    for(let fill = 0; fill < firstDayOfMonthIndex; fill++){
      dayDivs.push(<div className="day-cell"></div>);
    }

    // Creates day cells for month
    for(let day=0; day<moment().daysInMonth(); day++){

      dayDivs.push(this.dayDiv(day));
    }

    // Fills month div with day cells
    for(let monthIndex= 0; monthIndex<=4; monthIndex++){
      
      monthDivs.push(<div className="month-row">
        {dayDivs.slice(monthIndex*7, (monthIndex*7 + 7))}
      </div>);
    }
    return monthDivs;
  }

  render(){

    
    return (
        <div className="calendar-container" >
          <div className="calendar">
            <div className="calendar-header">
              {/*<button className="calendar-prev">&lt;</button> */}
              <div></div>
              <div className="calendar-title">March 2018</div>
              {/*<button className="calendar-next">&gt;</button> */}
              <div></div>              
            </div>
      
            {this.state.calendarDays}
          </div>
          {/*<div className="calendar">
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
              <div className="day-cell ">2</div>
              <div className="day-cell">3</div>
            </div>
            <div className="month-row">
              <div className="day-cell">4</div>
              <div className="day-cell">5</div>
              <div className="day-cell">6</div>
              <div className="day-cell today"><span className="day-cell-underline">7</span></div>
              <div className="day-cell">8</div>
              <div className="day-cell "><span className="day-cell-underline">9</span></div>
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

          </div>*/}
          
          <div className="calendar-list">
            <h4>Upcoming Events</h4>
          </div>
        </div>
    );
  }
}

export default Calendar;