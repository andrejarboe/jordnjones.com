import React from 'react'
import styled from 'styled-components'

import { ThemeConsumer } from '../theme'
import Navbar from './navbar'
import HeaderLink from './headerlink'

const HeaderLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  padding-top: 20px;
`
const Header = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <>
        <Navbar
          css={`
            @media screen and (max-width: 600px) {
              display: none;
            }
          `}
        >
          <HeaderLink to="/">
            <img alt="logo" height="60px" src={theme.logo} />
          </HeaderLink>
          <div />
          <HeaderLinksContainer>
            <HeaderLink to="/">home</HeaderLink>
            <HeaderLink to="/about">about</HeaderLink>
          </HeaderLinksContainer>
        </Navbar>
      </>
    )}
  </ThemeConsumer>
)
export default Header
