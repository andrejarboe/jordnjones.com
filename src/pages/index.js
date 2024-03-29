import React from 'react'
import { Link, graphql } from 'gatsby'
import { Transition } from 'react-spring'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ThemeConsumer } from '../theme/'
import AnimatedBackground from '../components/animatedbackground'

const animatedElements = [
  { key: 0, text: 'Welcome!' },
  { key: 1, text: "I'm Jordan," },
  { key: 2, text: 'Frontend Developer' },
]

const HeroText = styled.h1`
  color: ${props => props.theme.textColour};
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`
const HeroTextContainer = styled.div`
  display: grid;
  @media screen and (max-width: 600px) {
    text-align: center;
    max-width: 300px;
    grid-template-columns: 1fr;
    grid-row: 2;
  }
`
/**
 * Interesting point about -webkit-center, it does not center elements otherwise, needs more investigation
 */
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 300px;
  padding-bottom: 50px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: -webkit-center;
    text-align: -moz-center;
    text-align: -o-center;
  }
`
const BlogContainer = styled.div`
  margin: 0 auto;
  padding: 40px 80px 40px 80px;
  background: white;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    padding-top: 50px;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
  }
`

const invertWhite = color => (color === '#FFFFFF' ? 'black' : color)

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO
        title="Home"
        description="Jordan Jones, Fullstack Javascript Developer based in Kingston, Jamaica"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <AnimatedBackground height="500px" force />
      <ThemeConsumer>
        {({ theme }) => (
          <>
            <HeroContainer>
              <HeroTextContainer>
                <Transition
                  items={animatedElements}
                  keys={item => item.key}
                  from={{ transform: 'translate3d(-40px,0,0)' }}
                  enter={{ transform: 'translate3d(0,0px,0)' }}
                  leave={{ transform: 'translate3d(0,-40px,0)' }}
                >
                  {item => props => (
                    <HeroText style={props}>{item.text}</HeroText>
                  )}
                </Transition>
              </HeroTextContainer>
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                {theme.heroImage()}
              </div>
            </HeroContainer>
            <BlogContainer>
              <h2>Blog</h2>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: '10px',
                      }}
                    >
                      <Link
                        style={{
                          boxShadow: `none`,
                          color: invertWhite(theme.primary),
                          textDecoration: 'none',
                        }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>{node.frontmatter.date}</p>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                )
              })}
            </BlogContainer>
          </>
        )}
      </ThemeConsumer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
