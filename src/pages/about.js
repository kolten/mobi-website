import React from 'react'
import Link from 'gatsby-link'
import Cards from './../components/Cards'

import '../styles/about.css'
import mac from './images/monitor.svg'
import group from './images/group.svg'
import stopwatch from './images/stopwatch.svg'

const cardData = [
  {
    image: mac ,
    title: "Workshops",
    about: "learn all about real world development through our Mobi Learn Workshops. We'll provide materials for you to learn Mobile and Web development"
  },
  {
    image: group,
    title: "Social Coding",
    about: "learn all about real world development through our Mobi Learn Workshops. We'll provide materials for you to learn Mobile and Web development"
  },
  {
    image: stopwatch,
    title: "workshops",
    about: "learn all about real world development through our Mobi Learn Workshops. We'll provide materials for you to learn Mobile and Web development"
  }
];

const membersData = [
  {
    image: "https://i.imgur.com/zEzLegG.jpg",
    title: "President"
  },
  {
    image: "https://dogs.thefuntimesguide.com/files/educated-dog-wearing-suit-and-tie.jpg",
    title: "Vice President"
  },
  {
    image: "http://img2.thejournal.ie/inline/3605430/original?width=500&version=3605430",
    title: "Project Director"
  },
  {
    image: "https://i.imgur.com/1lMGoLq.jpg",
    title: "Good Doggo"
  },
  {
    image: "https://i.pinimg.com/236x/8e/5f/06/8e5f0658ce0037df128de1fb096d62ef--funny-lizards-animal-pics.jpg",
    title: "Spiky doggo"
  },
  {
    image: "https://thoughtcatalog.files.wordpress.com/2012/10/business-cat.jpg?w=584&h=584",
    title: "HR Manager"
  }
];

const about = () => (
  <div>

    <div className="container" id="about-intro">
      <h2 className="container-title">What's Mobi?</h2>
      <div style={{textAlign: 'center'}}>
      Mobi (Student Association for the advancement of Mobile Development) is a student organization at the University of Texas at Arlington that aims to engage
      its members in an active project based learning environment for mobile development while promoting scholastic excellence. We are an organization for developers, run by developers.
      </div>
    </div>


    <div className="container" id="about-info">
      <h2 className="container-title">What does Mobi do?</h2>

      <Cards data={cardData} />
    
    </div>


    <div className="container" id="about-officers">
      <h2 className="container-title">Officers</h2>

      <Cards data={membersData.slice(0,3)} small />
      <Cards data={membersData.slice(3,6)} small />

    </div>
  </div>
)

export default about