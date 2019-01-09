import styled from 'styled-components'

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 100px auto 300px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100px auto 100px;
  }
`
export default Navbar
