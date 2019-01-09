import styled from 'styled-components'

const ColorButton = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px;
  border-radius: 50%;
  -webkit-box-shadow: 3px 3px 18px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 18px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 18px -3px rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
  background: ${props => props.primary};
  &:hover {
    width: 35px;
    height: 35px;
  }
`
export default ColorButton
