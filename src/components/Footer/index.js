import React from 'react'
import Link from 'gatsby-link'


const Footer = () => (
  <div
    style={{
      background: '#5a7287',
    }}
  >
    <div
      style={{
        margin: ' 0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '5px'
      }}
    > 
      <div style={{display: 'flex', flexDirection: 'column'}}>
			  500 UTA Blvd Arlington, TX 76019
        <br></br>
        Office: ERB #437
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
			<button style={{}}>
					<a href='uta.mobi@gmail.com'> UTA.Mobi@gmail.com</a>
			</button>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}> 
			Copyright © 2018, Mobi
      </div>
    </div>
  </div>
)

export default Footer