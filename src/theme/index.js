import React from 'react'
import { ThemeProvider } from 'styled-components'

import { initialTheme, themeVariations } from './initialTheme'
/**
 * Experimental,
 * Here, I have to call the query on images only ONCE, and then pass around that reference within the context,
 * otherwise I'll have blurred images constantly as a result of calling query multiple times.
 * Needs a work around as it's quite unsightly.
 *
 * Previously I had:
 *  const red = RedDevices()
 *
 * Update
 * The actual problem was that react was NOT re-rendering images, so the blurring would not stop, however if I forced
 * a React to re-render the images everytime, then the blurring would stop, a negligable performance pain point. I did
 * this with a random number generator as the key in each image
 */

const { Provider, Consumer } = React.createContext({
  theme: initialTheme,
  handleThemeChange: () => {},
})

//Pick a random theme each new revisit
const themeColours = ['red', 'blue', 'green', 'yellow']
const randomColour = () => themeColours[`${Math.floor(Math.random() * 4)}`]

class ColourProvider extends React.Component {
  state = {
    theme: initialTheme,
  }
  componentDidMount() {
    /**Another interesting find, the window and repective objects arent available during gatsby build, this
     * is as a result of https://github.com/gatsbyjs/gatsby/issues/309, therefore they must be accessed within
     * react lifecycle methods which are evaluated in the browser
     */
    if (window) {
      let colour = localStorage.getItem('colour') || randomColour()
      this.setState({
        theme: {
          ...initialTheme,
          ...themeVariations[colour],
        },
      })
    }
  }
  setTransition = (previousColour, nextColour) =>
    this.setState({
      previousColour,
      nextColour,
    })
  handleThemeChange = colour => {
    let { blue, green, red, yellow, white } = themeVariations

    //Sets up transition pairs for animation
    this.setTransition(this.state.primary, themeVariations[colour].primary)

    switch (colour) {
      case 'blue':
        this.setState({ theme: { ...initialTheme, ...blue } })
        break
      case 'green':
        this.setState({ theme: { ...initialTheme, ...green } })
        break
      case 'red':
        this.setState({ theme: { ...initialTheme, ...red } })
        break
      case 'yellow':
        this.setState({ theme: { ...initialTheme, ...yellow } })
        break
      default:
        this.setState({ theme: { ...initialTheme, ...white } })
        break
    }
    //Saves users colour choice
    localStorage.setItem('colour', colour)
  }
  getTheme = () => {
    let { theme, previousColour, nextColour } = this.state
    return {
      ...theme,
      previousColour,
      nextColour,
    }
  }
  render() {
    /*Why use two Context based APIs (Provider and ThemeProvider (fr Styled-components))
    I wanted access to the handleThemeChange method to control switching but I also did not 
    want to pass themes to styled components manually, so I opted to wrap styled-componet's context 
    with my own context to solve the issue. Anti-pattern maybe? 
    */
    let dynamicTheme = this.getTheme()
    return (
      <Provider
        value={{
          theme: dynamicTheme,
          handleThemeChange: this.handleThemeChange,
        }}
      >
        <ThemeProvider theme={dynamicTheme}>
          {this.props.children}
        </ThemeProvider>
      </Provider>
    )
  }
}
export { ColourProvider as ThemeProvider, Consumer as ThemeConsumer }
