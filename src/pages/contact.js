import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ThemeConsumer } from '../theme/index'
import AnimatedBackground from '../components/animatedbackground'
import { EmailLogo, TwitterLogo, GithubLogo } from '../components/logos'

//If White theme is selected, we want black text
const invertWhite = color => (color === '#FFFFFF' ? 'black' : color)

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <AnimatedBackground height="100px" />
    <ThemeConsumer>
      {({ theme }) => (
        <>
          <h1 style={{ color: invertWhite(theme.primary) }}>Contact</h1>
          <p>
            Have a query? Reach out, my <b>DMs/Inbox</b> are open lol.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
            }}
          >
            <div>
              <h3>
                <a href="mailto:proxima.aust@gmail.com">
                  <EmailLogo fill={invertWhite(theme.primary)} />
                  proxima.aust@gmail.com
                </a>
              </h3>
            </div>
            <div>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/jord_njones"
                >
                  <TwitterLogo fill={invertWhite(theme.primary)} />
                  @jord_njones
                </a>
              </h3>
            </div>
            <div>
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Pr0x1m4"
                >
                  <GithubLogo fill={invertWhite(theme.primary)} />
                  @Pr0x1m4
                </a>
              </h3>
            </div>
          </div>
        </>
      )}
    </ThemeConsumer>
  </Layout>
)

export default Contact
