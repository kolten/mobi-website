import React from 'react'
import Link from 'gatsby-link'


const quickLinks = [
  {icon: '🕗', name: 'Mobi Calendar', link: '', description: "Mobi's Best Calendar"},
  {icon: '⚚', name: 'Mobi Facebook', link: '', description: "Facebook Group"},
  {icon: '*', name: 'Another Link', link: '', description: "yep definately"},
]

const IndexPage = () => (
  <div style={{textAlign: 'center'}}>
      <div style={{ paddingTop: '4.45rem', marginBottom: '4.45rem', backgroundColor: '#daecf2' }}> 
        <h1>Mobi</h1>
        <h2>Learn Real World Skills for Mobile and Web Development</h2>
        <div>
          <button style={{width: '6.43rem',margin: '1.45rem'}}>
          <Link
              to={'/about'}
              style={{
                color: '#333',
                textDecoration: 'none',
              }}
            >
              About Us
            </Link>
          </button>
          <button style={{width: '6.43rem',margin: '1.45rem'}}>
          <Link
              to={'/'}
              style={{
                color: '#333',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
          </button>
        </div>
        
      </div>
    
      <div>
        <h3>Quick Links</h3>
        <div style={{display: 'flex', justifyContent: "space-around"}}>
          {quickLinks.map((quickLink) => (
            <div>
              <p>{`${quickLink.icon}`}</p>
              <h4>{`${quickLink.name}`}</h4>
              <p>{`${quickLink.description}`}</p>
            </div>
          ))}
        </div>
      </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
