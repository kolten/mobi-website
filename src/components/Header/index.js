import React from 'react'
import Link from 'gatsby-link'

// Add more pages here
const pages = [
  {pageTitle: 'Home', link: ''},
  {pageTitle: 'About', link: 'about'},
  {pageTitle: 'Workshops', link: 'workshops'},
  {pageTitle: 'Social Coding', link: 'social'},
]

const Header = () => (
  <div
    style={{
      background: 'white',
    }}
  >
    <div
      style={{
        margin: ' 0 auto',
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{display: 'flex',  alignItems: 'center'}}>
        <h4 style={{ margin: 0, color: '#333' }}>Mobi</h4>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      {pages.map((page) => (
        <h4 style={{ paddingLeft: 20, margin: 0 }}>
          <Link
            to={`/${page.link}`}
            style={{
              color: '#333',
              textDecoration: 'none',
            }}
          >
            {`${page.pageTitle}`}
          </Link>
        </h4>
        ))}
      </div>
    </div>
  </div>
)

export default Header
