import React from 'react'
import { ThemeConsumer } from '../theme'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'

const Footer = props => (
  <ThemeConsumer>
    {({ theme }) => (
      <footer
        css={`
          padding-top: 40px;
          padding-bottom: 10px;
          background: ${theme.primary};
          @media screen and (max-width: 600px) {
            padding: 30px;
          }
        `}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '800px',

            textAlign: 'center',
            color: 'white',
          }}
        >
          <div
            css={`
              display: grid;
              grid-template-columns: 200px 1fr;
              @media screen and (max-width: 800px) {
                grid-template-columns: 1fr;
                justify-items: center;
              }
            `}
          >
            <img alt="logo" height="60px" src={theme.logo} />
            <div
              css={`
                display: grid;
                grid-template-columns: repeat(3, 50px);
                text-align: right;
                justify-self: flex-end;
                @media screen and (max-width: 800px) {
                  text-align: center;
                  justify-self: center;
                }
              `}
            >
              <a href="http://github.com/Pr0x1m4">
                <img height={20} src={github} alt="Github" />
              </a>
              <a href="https://twitter.com/jord_njones">
                <img height={20} src={twitter} alt="Twitter" />
              </a>
              <a href="https://linkedin.com/in/jordan-jones-b44722114/">
                <img height={20} src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <p>
            Jordan Jones © {new Date().getFullYear()}, Built with ❤️ and
            <a style={{ marginLeft: '3px' }} href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </p>
        </div>
      </footer>
    )}
  </ThemeConsumer>
)
export default Footer
