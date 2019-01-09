import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AnimatedBackground from '../components/animatedbackground'

const Work = () => (
  <Layout>
    <SEO title="Page two" />
    <AnimatedBackground height="100px" />
    <h1>Work</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work
