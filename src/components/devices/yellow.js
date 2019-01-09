import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Yellow = () => (
  <StaticQuery
    query={graphql`
      query {
        yellowDevices: file(relativePath: { eq: "yellow-devices.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        key={Math.floor(Math.random() * 6) + 1}
        fluid={data.yellowDevices.childImageSharp.fluid}
      />
    )}
  />
)
export default Yellow
