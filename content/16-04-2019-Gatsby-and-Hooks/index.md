---
path: '/building-a-slideshow-with-gatsby-and-gatsby-image'
date: '2019-04-17T06:45:12.832Z'
title: 'Slideshow with Gatsby-Image and React Hooks?'
---

GatsbyJS is one of my favourite technologies lately, It has made frontend development enjoyable again, but I've encountered some limitations (Not specific to Gatsby)
recently and it seems [others](https://spectrum.chat/gatsby-js/general/slideshow-with-gatsby-image~690e3aee-3f2a-4bb6-9acb-2dc2b903b243) have encountered similar issues. Namely, building a slideshow/carousel/multiple images with
`gastbyjs` and `gatsby-image`.

> TLDR; I built a "slideshow" of lazy loaded images, demo over at [gatsby-slides](https://gatsby-slides-cv2pxyejg.now.sh/)

Disclaimer: This is pretty experimental and hacky and I'm fairly certain it can be improved, critiques are welcome.

## Set up Gatsby and Gatsby-Image

Because `gatsby` docs are **so** well done, it's fairly easy to get started and set up with a basic project. From your terminal, type

```bash
$ gatsby new gatsby-slide
$ cd gatsby-slide
```

This creates a new gatsby project (with `gatsby-image` already installed) from a starter template and changes directory after gatsby is done setting up files.

Now if we run `npm start` and navigate to [localhost:8000](http://localhost:8000) we should see our gatsby site up and running.

We're all set to continue!

## Querying Multiple Images

So thankfully, the template includes code to already query an image as shown below

```js
//src/image.js

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholder: file(relativePath: { eq: "gatsby-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholder.childImageSharp.fluid} />}
  />
)
```

This finds the image `gatsby-logo.png` and lazy loads it with the
fragment `GatsbyImageSharp`, read more about fragments and `gatsby-image` [here](https://www.gatsbyjs.org/packages/gatsby-image/). But how do we
use this to query multiple images? I came across this lil gem while reading the other day, thanks to [Kent C. Dodds](https://github.com/kentcdodds/kentcdodds.com/blob/master/src/components/testing-cta.js#L75) for writing it.

```js
graphql`
  query {
    allFile(
      sort: { fields: name, order: DESC }
      filter: { relativeDirectory: { eq: "slides" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
```

Now that we have this query for getting multiple files, let's go ahead and wire this up with good ol hooks.

```js
import { useStaticQuery, graphql } from 'gatsby'

function SlideShow() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  )
}
```

Some additional logic for handling next and previous slide but overall still a simple example.

## Conclusion

Through the mystical powers of [React Hooks](https://reactjs.org/docs/hooks-intro.html) and graphql, we can `useStaticQuery` hook as well
as specifying a filter on our `allFiles` to query to get all images in the `slides` folder (where all the images for the slideshow are, duh Jordan). The result is pretty niffy, check out the demo [gatsby-slides](https://gatsby-slides-cv2pxyejg.now.sh/).
