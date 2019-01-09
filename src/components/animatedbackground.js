import React from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

import { ThemeConsumer } from '../theme'

const AnimatedDiv = styled.div`
  @media screen and (max-width: 600px) {
    height: 600px !important;
  }
`
const AnimatedBackground = ({ height }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <>
        <Spring
          from={{
            height: '0px',
            background: theme.previousColour || theme.primary,
          }}
          to={{
            height: height,
            background: theme.nextColour || theme.primary,
          }}
        >
          {interop => (
            <AnimatedDiv
              style={{
                background: interop.background,
                position: 'absolute',
                left: '0',
                top: '0',
                height: interop.height,
                width: '100%',
                zIndex: '-1',
              }}
            />
          )}
        </Spring>
      </>
    )}
  </ThemeConsumer>
)
export default AnimatedBackground
