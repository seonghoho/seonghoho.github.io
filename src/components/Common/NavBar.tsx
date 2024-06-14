import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import SeonghoLogo from '../../images/SeonghoDevLogo.svg'

const Container = styled.nav`
  // 가로 정렬
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const NavList = styled.div`
  // 가로 정렬
  display: flex;
  flex-direction: row;
  justify-content: end;
`

const Logo = styled.img`
  padding: 0 1vw;
`

const NavItem = styled.div`
  padding: 1vw;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`
const NavBar: FunctionComponent = () => {
  return (
    <Container>
      <Logo src={SeonghoLogo} />
      <NavList>
        <NavItem onClick={() => navigate('/')}>HOME</NavItem>
        <NavItem onClick={() => navigate('/blog')}>BLOG</NavItem>
      </NavList>
    </Container>
  )
}

export default NavBar
