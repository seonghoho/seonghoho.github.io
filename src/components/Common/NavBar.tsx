import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import SeonghoLogo from '../../images/SlimLogo.svg'

const Container = styled.nav`
  // 가로 정렬
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  height: 65px;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`
const NavList = styled.div`
  // 가로 정렬
  display: flex;
  flex-direction: row;
  justify-content: end;
`
const LogoDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const Logo = styled.img`
  //padding: 0 1vw;
`

const NavItem = styled.div`
  padding: 1vw;
  font-weight: 900;

  &:hover {
    cursor: pointer;
  }
`
const NavBar: FunctionComponent = () => {
  return (
    <Container>
      <LogoDiv onClick={() => navigate('/')}>
        <Logo src={SeonghoLogo} />
      </LogoDiv>
      <NavList>
        <NavItem onClick={() => navigate('/')}>About</NavItem>
        <NavItem onClick={() => navigate('/blog')}>BLOG</NavItem>
      </NavList>
    </Container>
  )
}

export default NavBar
