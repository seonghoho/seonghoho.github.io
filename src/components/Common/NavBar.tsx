import { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import SeonghoLogo from '../../images/SlimLogo.svg'

// nav 태그 div
const NavDiv = styled.nav`
  width: 100vw;
  height: 65px;
  position: fixed;
  background-color: #fff;
  border-bottom: #d9d9d9 solid 1px;
  // 가로 정렬
  display: flex;
  top: 0;
  flex-direction: row;
  z-index: 100;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`
const NavList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`
const LogoDiv = styled.div`
  margin-bottom: -10px;
  &:hover {
    cursor: pointer;
  }
`

const Logo = styled.img`
  //padding: 0 1vw;
`

const NavItem = styled.div`
  padding: 1vw;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`
const NavBar: FunctionComponent = () => {
  return (
    <NavDiv>
      <Container>
        <LogoDiv onClick={() => navigate('/')}>
          <Logo src={SeonghoLogo} />
        </LogoDiv>
        <NavList>
          <NavItem onClick={() => navigate('/')}>About me</NavItem>
          <NavItem onClick={() => navigate('/blog')}>Blog</NavItem>
        </NavList>
      </Container>
    </NavDiv>
  )
}

export default NavBar
