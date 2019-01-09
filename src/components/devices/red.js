import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Red = () => (
  <StaticQuery
    query={graphql`
      query {
        redDevices: file(relativePath: { eq: "red-devices.png" }) {
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
        fluid={data.redDevices.childImageSharp.fluid}
      />
    )}
  />
)
export default Red
