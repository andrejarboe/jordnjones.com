import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.textColour};
`
export default HeaderLink
