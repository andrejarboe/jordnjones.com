import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AnimatedBackground from '../components/animatedbackground'

const PageLink = styled(Link)`
  padding: 20px;
  color: ${props => props.theme.primary};
  background: white;
  text-decoration: none;
  border-radius: 5px;
  border-bottom: 2px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  border-left: 1px solid #e8e8e8;
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <AnimatedBackground height="100px" />
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <ul
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            paddingTop: '50px',
            marginLeft: 0,
          }}
        >
          <li>
            {previous && (
              <PageLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title.substring(0, 15).concat('...')}
              </PageLink>
            )}
          </li>
          <li>
            {next && (
              <PageLink to={next.fields.slug} rel="next">
                {next.frontmatter.title.substring(0, 15).concat('...')} →
              </PageLink>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
