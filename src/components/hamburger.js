import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { ThemeConsumer } from '../theme'

const MenuContainer = styled.div`
  display: grid;
  padding-top: 20px;
  justify-content: center;
  align-content: center;
  color: red;
  background: white;
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 100px;
  z-index: 9;
`

const HeaderLink = styled(Link)`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 30px;
  text-decoration: none;
  color: ${props => props.theme.primary};
  text-transform: uppercase;
`
const Bar = styled.span`
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  background: white;
  border-radius: 3px;
  display: block;
`

const Hamburger = () => (
  <div>
    <Bar />
    <Bar />
    <Bar />
  </div>
)

const Menu = ({ toggle }) => (
  <MenuContainer
    css={`
      display: ${toggle ? 'grid' : 'none'};
    `}
  >
    <HeaderLink to="/">home</HeaderLink>
    <HeaderLink to="/about">about</HeaderLink>
  </MenuContainer>
)

export default () => {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <header
      css={`
        display: none;
        @media screen and (max-width: 641px) {
          display: grid;
          grid-template-columns: 100px 1fr 100px;
          color: white;
          align-items: center;
          justify-items: center;
          padding: 20px 10px 40px 10px;
        }
      `}
    >
      <ThemeConsumer>
        {({ theme }) => (
          <>
            <HeaderLink to="/">
              <img
                alt="logo"
                height="60px"
                src={theme.logo}
                css={`
                  margin: 0;
                `}
              />
            </HeaderLink>
          </>
        )}
      </ThemeConsumer>
      <div />

      <div
        css={`
          z-index: 999;
        `}
        onClick={() => setToggle(!toggle)}
      >
        <Hamburger />
      </div>
      <div
        css={`
          position: absolute;
        `}
        onClick={() => setToggle(!toggle)}
      >
        <Menu toggle={toggle} />
      </div>
    </header>
  )
}
