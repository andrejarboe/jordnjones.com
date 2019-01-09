import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Green = () => (
  <StaticQuery
    query={graphql`
      query {
        greenDevices: file(relativePath: { eq: "green-devices.png" }) {
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
        fluid={data.greenDevices.childImageSharp.fluid}
      />
    )}
  />
)
export default Green
