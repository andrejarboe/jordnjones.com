import {
  RedDevices,
  BlueDevices,
  GreenDevices,
  YellowDevices,
  WhiteDevices,
} from '../components/devices'
import blackLogo from '../images/black-logo.svg'
import whiteLogo from '../images/white-logo.svg'

const themeVariations = {
  white: {
    textColour: '#000000',
    primary: '#FFFFFF',
    logo: blackLogo,
    heroImage: WhiteDevices,
  },
  blue: {
    textColour: '#FFFFFF',
    primary: '#4787FF',
    logo: whiteLogo,
    heroImage: BlueDevices,
  },
  green: {
    textColour: '#FFFFFF',
    primary: '#00E495',
    logo: whiteLogo,
    heroImage: GreenDevices,
  },
  red: {
    textColour: '#FFFFFF',
    primary: '#FF4759',
    logo: whiteLogo,
    heroImage: RedDevices,
  },
  yellow: {
    textColour: '#FFFFFF',
    primary: '#FFBF47',
    logo: whiteLogo,
    heroImage: YellowDevices,
  },
}

const initialTheme = {
  fontSize: 18,
  primary: '#FFFFFF',
  background: '#101526',
  textColour: '#000000',
  previousColour: '',
  nextColour: '',
  white: '#FFFFFF',
  blue: '#4787FF',
  green: '#00E495',
  red: '#FF4759',
  yellow: '#FFBF47',
  colours: ['blue', 'green', 'red', 'yellow', 'white'],
}

export { initialTheme, themeVariations }
