import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import SeonghoLogo from '../../images/SlimLogo.svg'
import { useLocation } from '@reach/router'

const NavDiv = styled.nav<{
  isScrolled: boolean
  isMain: boolean
}>`
  width: 100vw;
  height: 65px;
  position: fixed;
  background-color: ${props => (props.isScrolled ? '#fff' : 'transparent')};
  border-bottom: ${props => (props.isMain ? '0' : 'solid 1px #d9d9d9')};
  display: flex;
  top: 0;
  flex-direction: row;
  z-index: 100;
  transition:
    background-color 0.3s,
    border-bottom 0.3s;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin-top: -65px;
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

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 메인페이지 인지 확인하기 위한 로직
  const location = useLocation()
  const [main, useMain] = useState<boolean>(false)

  useEffect(() => {
    location.pathname === '/' ? useMain(true) : useMain(false)
  }, [])

  return (
    <NavDiv isScrolled={isScrolled} isMain={main}>
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
