import React from 'react'

const Footer = props => (
  <footer
    style={{
      paddingTop: '20px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '960px',
        textAlign: 'center',
        color: 'black',
      }}
    >
      <p>
        Jordan Jones © {new Date().getFullYear()}, Built with ❤️ and
        <a style={{ marginLeft: '3px' }} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </p>
    </div>
  </footer>
)
export default Footer
