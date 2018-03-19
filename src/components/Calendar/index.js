import React, { Component } from 'react'
import moment from 'moment'
import testData from './testData.json'
import classNames from 'classnames'

import '../../styles/calendar.css'



class Calendar extends Component{
  constructor(props){
    super(props);

    this.state = {
        currentDate: moment(),
        today: new Date(),
        calendarDays: [],
        googleEvents: [],
        activityDays: {}
    };
  }
  

  componentWillMount(){
    
    //fill activityDays from this.state.activityDays
    //ex: activityDays = {0: false, 1: true, 2: false.....}
    for(let i=0; i<32; i++){
      let activityDays = this.state.activityDays;


      if(this.isActivityOnThisDay(i)){
        activityDays[i] = true;
      } else{
        activityDays[i] = false;
      } 

      this.setState({
        activityDays
      });
    }

    // Get google calendar events and save them to the state 
    this.setState({ googleEvents: this.getGoogleCalendarEvents() });
  }

  
  componentDidMount(){

    // Render cells inside calendar
    this.setState({
      calendarDays: this.getDayCellDivs()     
    }); 

  }
  

  /**
   * 
   * GOOGLE API GETTER and object format
   * 
   * @returns {object} The event items returned from Google Calendars API
   * @TODO Sort dates by day in resultCalendarData
   * @TODO Fetch data from google.mail API
   * @TODO 'maybe' save resultCalendarData as a cookie to lower calls to Google's mail API
   */
  getGoogleCalendarEvents(){

    // Get Data from google api here..later...
    let googleCalendarData = testData.items;

    // Create an array filled with the calendar data we want
    // console.log("-----getGoogleCalendarEvents()-----");
    let resultCalendarData = googleCalendarData
      .filter(elem =>{
        // Only get events that are not full days
        return elem.start.dateTime
      })
      .map((elem, i) => {
        let eventStartDate = new Date(elem.start.dateTime).getDate() - 1;

        //Set this.state.activity[day](0-32) to true for current start date
        this.setActivity(eventStartDate);

        let obj = {
          start: new Date(elem.start.dateTime), // note: does not work with full day events
          end: new Date(elem.end.dateTime),  // note: does not work with full day events
          id: elem.id,
          htmlLink: elem.htmlLink,
          summary: elem.summary
        };

        // console.log(`Calendar().getGoogleCalendarEvents() resultCalendarData.start=> ${obj.start}`);        
        return obj;
      });

    //sort google calendar items data by start date
    // calendarData.sort((a, b) => {return (moment(a.start.dateTime).date() > moment(b.start.dateTime).date()) ? -1 : 0; });

    return resultCalendarData;
  }

  
  /**
   * 
   * Sets day(0-32) to true in obejct this.state.activityDays[day], if day has an activity
   * 
   * @param {int} day The day of the month 0-32 
   * @returns {void} this.setState({ activityDays });
   */
  setActivity(day){

    let activityDays = this.state.activityDays;
    activityDays[day] = true;
        
    this.setState({activityDays});

    // console.log(`calendar().setActivity(${day}) activityDays=${activityDays[day]}`);    
  }

  /**
   * Checks object this.state.activityDays[day] for active day.
   * 
   * @param {integer} day The day in the month (0-31)
   * @returns {true|false} 
   */
  isActivityOnThisDay(day){
    return this.state.activityDays[day];
  }


  /**
   * Creates a <div> day cell and returns 
   * 
   * @param {integer} day Day of the current month (0-31)
   * @returns {jsx}
   *          <div className="day-cell"> 
   *            <span className="today active">1</span> 
   *           </div>
   * 
   *          !optional classNames for <span>
   *            -today: if day === todays date
   *            -day-cell-underline: if google event lands on day
   *
   */
  dayDiv(day){
    let isActive = this.isActivityOnThisDay(day);
    let isToday  = day+1 === this.state.today.getDate();

    console.log(`Calendar.dayDiv(${day}) isActive=${isActive}`);
    let spanClasses = classNames({
      "today": isToday,
      "day-cell-underline": isActive
    });

    return (
      <div className="day-cell" key={day}>
        <span 
          className={spanClasses}
        >
          {day + 1}
        </span>
      </div>
    );
  }


  /** 
   * Content containing calendar dates. 
   * 
   * @returns {jsx} Five month-row divs containing 7 days each <div className="month-row"></div>
   */
  getDayCellDivs(){
    let dayDivs = [];
    let monthDivs = [];


    // Create empty day cells to set first day of the month at the correct day of the week
    let currentMonthIndex = moment().month();
    let firstDayOfMonthIndex = new Date(2018, currentMonthIndex).getDay(); 

    for(let fill = 0; fill < firstDayOfMonthIndex; fill++){
      dayDivs.push(<div className="day-cell" key={fill+100}></div>);
    }

    // Creates day cells for month
    for(let day=0; day<moment().daysInMonth(); day++){
      dayDivs.push(this.dayDiv(day));
    }

    // Fills month div with day cells
    for(let monthIndex= 0; monthIndex<5; monthIndex++){
      
      monthDivs.push(<div className="month-row" key={monthIndex}>
        {dayDivs.slice(monthIndex*7, (monthIndex*7 + 7))}
      </div>);
    }
    return monthDivs;
  }


  /**
   * 
   * Converts a Date() object to a formatted string using Moment.js
   * 
   * @param {new Date()} date The date object to be converted into a string
   * @returns {string} Ex: "March 8th, 1:00pm"
   */
  formatDateToString(date){
    return moment(date).format('MMMM Do, h:mm a');
  }


  /**
   * ----- Convertions for new Date() -----
   * 
   * @param {new Date()} date 
   * @returns {integer} month|day|hour|min
   */
  dateToMonth(date){
    return date.getMonth();
  }
  
  dateToDay(date){
    return date.getDate()
  }

  dateToHour(date){
    return date.getHours();
  }
  dateToMin(date){
    return date.getMinutes();
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
            <div style={{display: "flex", justifyContent: "space-between", padding:"0px 25px 0px"}}>
              <small>S</small> <small>M</small> <small>T</small> <small>W</small> <small>TH</small> <small>F</small> <small>S</small>
            </div>
            {this.state.calendarDays}
            {/*this.getDayCellDivs()*/}
          </div>

          
          <div className="calendar-list">
            <h4>Upcoming Events</h4>

            <div className="calendar-list-items">
              {this.state.googleEvents.map((elem, i) =>  
                <div className="calendar-list-item" key={"list" + i}>
                  <div className="list-date">{this.formatDateToString(elem.start)}</div>
                  <div className="list-summary"> {elem.summary}</div> 
                </div>
              )}
            </div>


          </div>
        </div>
    );
  }
}





export default Calendar;