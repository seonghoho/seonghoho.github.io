import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import SeonghoLogo from '../../images/SlimLogo.svg'
import StrokeLogo from '../../images/StrokeLogo.svg'
import { useLocation } from '@reach/router'

const NavDiv = styled.nav<{
  isScrolled: boolean
  isMain: boolean
}>`
  width: 100vw;
  height: 65px;
  position: fixed;
  background-color: ${props =>
    !props.isScrolled && props.isMain ? 'transparent' : '#fff'};
  color: ${props => (!props.isScrolled && props.isMain ? '#fff' : '#333')};
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
  margin-right: -2vw;
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

const NavItem = styled.div<{ isHidden: boolean }>`
  padding: 20px 15px;
  font-weight: 600;
  display: ${props => (props.isHidden ? 'none' : 'block')};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding: 20px 10px;
  }
  @media (max-width: 500px) {
    padding: 20px 5px;
  }
`

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [widthCategory, setWidthCategory] = useState<string>('large')

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    if (scrollTop > windowHeight) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const handleResize = () => {
    const width = window.innerWidth
    if (width <= 500) {
      setWidthCategory('small')
    } else if (width <= 800) {
      setWidthCategory('medium')
    } else {
      setWidthCategory('large')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 메인페이지 인지 확인하기 위한 로직
  const location = useLocation()
  const [main, useMain] = useState<boolean>(false)

  useEffect(() => {
    location.pathname === '/' ? useMain(true) : useMain(false)
  }, [location.pathname])

  return (
    <NavDiv isScrolled={isScrolled} isMain={main}>
      <Container>
        <LogoDiv onClick={() => navigate('/')}>
          {widthCategory !== 'large' ? (
            <Logo src={StrokeLogo} alt="logo" />
          ) : (
            <Logo src={SeonghoLogo} alt="logo" />
          )}
        </LogoDiv>
        <NavList>
          <NavItem onClick={() => navigate('/')} isHidden={false}>
            About me
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog')}
            isHidden={!(widthCategory === 'small')}
          >
            Blog
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog/?category=JavaScript')}
            isHidden={widthCategory === 'small'}
          >
            JavaScript
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog/?category=TypeScript')}
            isHidden={widthCategory === 'small'}
          >
            TypeScript
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog/?category=Vue')}
            isHidden={widthCategory !== 'large'}
          >
            Vue
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog/?category=Error')}
            isHidden={widthCategory !== 'large'}
          >
            Error
          </NavItem>
          <NavItem
            onClick={() => navigate('/blog/?category=FrontEnd')}
            isHidden={widthCategory !== 'large'}
          >
            FrontEnd
          </NavItem>
        </NavList>
      </Container>
    </NavDiv>
  )
}

export default NavBar
