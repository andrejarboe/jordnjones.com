import React from 'react'
import styled from 'styled-components'
import ColorButton from './colourbutton'
import { ThemeConsumer } from '../theme'

const Container = styled.div`
  position: absolute;
  right: -25px;
  transition: right ease-in 0.2s;
  &:hover {
    right: 0;
  }
  @media screen and (max-width: 1102px) {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 300px;
    left: 0;
    right: 0;
    bottom: -25px;
    transition: bottom ease-in 0.2s;
    &:hover {
      bottom: 0;
    }
  }
`

class ThemePicker extends React.Component {
  render() {
    return (
      <Container>
        <ThemeConsumer>
          {({ theme, handleThemeChange }) => (
            <>
              {theme.colours.map(colour => (
                <ColorButton
                  key={colour}
                  onClick={() => handleThemeChange(colour)}
                  primary={theme[colour]}
                />
              ))}
            </>
          )}
        </ThemeConsumer>
      </Container>
    )
  }
}

export default ThemePicker
