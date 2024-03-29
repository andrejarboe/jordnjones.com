import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, ThemeConsumer } from '../theme'
import ThemePicker from '../components/themepicker'
import AnimatedBackground from '../components/animatedbackground'
import Header from './header'
import Hamburger from './hamburger'
import Footer from './footer'
import '../components/layout.css'

const Layout = ({ children }) => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ theme }) => (
        <>
          <Header />
          <Hamburger />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: '960px',
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <AnimatedBackground height={100} />
            <ThemePicker />
            {children}
          </div>
          <Footer />
        </>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
