import React, { Component } from 'react'
import Link from 'gatsby-link'
import Cards from '../components/Cards'
import Calendar from '../components/Calendar'


const instructorData = [
  {
    image: "",
    title: "Mary Huerta",
    about:"IOS, Web"
  },
  {
    image: "",
    title: "Kolten",
    about: "Koltin"
  },
  {
    image: "",
    title: "Khahn",
    about: "Redux"
  }
];



const workshops = () => (
  <div>
    <div className="container" id="workshop-intro">
      <h2 className="container-title">Mobi Learn Workshops</h2>

      <p>Mobi Learn is open to anyone. We'll give you the tools and tips to get started making web and mobile development. </p>
    </div>
      
    <div className="container" id="workshop-upcoming">
      <h2 className="container-title">Upcoming Workshops</h2>
      
      <Calendar />
    </div>
    
    <div className="container" id="workshop-instructors">
      <h2 className="container-title">Instructors</h2>

      <Cards data={ instructorData } small /> 
    </div>
  </div>
);

export default workshops