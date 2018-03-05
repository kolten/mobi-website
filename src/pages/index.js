import React from 'react'
import Link from 'gatsby-link'

const quickLinks = [
  {icon: '🕗', name: 'Mobi Calendar', link: '', description: "Mobi's Best Calendar"},
  {icon: '⚚', name: 'Mobi Facebook', link: '', description: "Facebook Group"},
  {icon: '*', name: 'Another Link', link: '', description: "yep definately"},
]

const IndexPage = () => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', textAlign: 'center'}}>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#daecf2' }}> 
        <h1>Mobi</h1>
        <h2>Learn Real World Skills for Mobile and Web Development</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '30px'}}>
          <button style={{width: '6.43rem'}}>
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
          <button>
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
    
      <div style={{display: 'flex', flexDirection: 'column', marginTop: '60px'}}>
        <h3>Quick Links</h3>
        <div style={{display: 'flex', justifyContent: "space-around", alignItems: 'center'}}>
          {quickLinks.map((quickLink) => (
            <div>
              <p>{`${quickLink.icon}`}</p>
              <h4>{`${quickLink.name}`}</h4>
              <p>{`${quickLink.description}`}</p>
            </div>
          ))}
        </div>
      </div>
  </div>
)

export default IndexPage
