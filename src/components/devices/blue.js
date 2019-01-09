import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Blue = () => (
  <StaticQuery
    query={graphql`
      query {
        blueDevices: file(relativePath: { eq: "blue-devices.png" }) {
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
        fluid={data.blueDevices.childImageSharp.fluid}
      />
    )}
  />
)
export default Blue
