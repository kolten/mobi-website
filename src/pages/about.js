import React from 'react'
import Link from 'gatsby-link'
import '../styles/about.css'



const about = () => (
  <div>

    <div className="container" id="about-intro">
      <h1 className="container-title">What's Mobi?</h1>
      <p>mobi(Student Association for the advancement of Mobile Development) is a student organization at the University of Texas at Arlington</p>
    </div>


    <div className="container" id="about-info">
      <h1 className="container-title">What does Mobi do?</h1>
      
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            Image
          </div>
          <div className="card-title">
            Workshops
          </div>
          <div className="card-about"> 
            learn all about real world development through our Mobi learn...
          </div>
        </div>    
        <div className="card">
          <div className="card-image">
            Image
          </div>
          <div className="card-title">
            Social Coding
          </div>
          <div className="card-about"> 
            learn all about real world development through our Mobi learn...
          </div>
        </div>    
        <div className="card">
          <div className="card-image">
            Image
          </div>
          <div className="card-title">
            Hackathons
          </div>
          <div className="card-about"> 
            learn all about real world development through our Mobi learn...
          </div>
        </div>    
      </div>
    </div>


    <div className="container" id="about-officers">
      <h1 className="container-title">Officers</h1>

      <div className="card-container">

        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">President</div>
        </div>

        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">Vice President</div>
        </div>

        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">Project Director</div>
        </div>
        
        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">President</div>
        </div>

        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">President</div>
        </div>

        <div className="card-sm">
          <div className="card-image"></div>
          <div className="card-title">President</div>
        </div>

      </div>

    </div>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default about