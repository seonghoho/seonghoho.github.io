import React from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import StrokeLogo from '../../images/StrokeLogo.svg'
// import SeonghoLogo from '../../images/SlimLogo.svg'
// import { useLocation } from '@reach/router'

const NavDiv = styled.nav`
  width: 100vw;
  height: 65px;
  position: fixed;
  background-color: #fff;
  color: #333;
  border-bottom: solid 1px #d9d9d9;
  /* box-shadow: 2px 2px 6px #d9d9d9; */
  display: flex;
  top: 0;
  flex-direction: row;
  z-index: 10;
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
  margin-right: -1vw;
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
const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const NavItem = styled.div`
  padding: 20px 15px;
  font-weight: 600;

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
  // const [widthCategory, setWidthCategory] = useState<string>('')

  // 스크롤이 맨 위인지 확인하는 값
  // const [isScrolled, setIsScrolled] = useState<boolean>(false)
  // const handleScroll = () => {
  //   const scrollTop = window.scrollY
  //   const windowHeight = window.innerHeight
  //   if (scrollTop > windowHeight) {
  //     setIsScrolled(true)
  //   } else {
  //     setIsScrolled(false)
  //   }
  // }

  // 메인페이지 인지 확인하기 위한 로직
  // const location = useLocation()
  // const [main, useMain] = useState<boolean>(false)

  // useEffect(() => {
  //   location.pathname === '/' ? useMain(true) : useMain(false)
  // }, [location.pathname])

  // const handleResize = () => {
  //   const width = window.innerWidth
  //   if (width <= 500) {
  //     setWidthCategory('small')
  //   }
  //   else if (width <= 800) {
  //     setWidthCategory('medium')
  //   }
  //   else {
  //     setWidthCategory('large')
  //   }
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   window.addEventListener('resize', handleResize)
  //   handleResize()
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  return (
    <NavDiv>
      {/* <NavDiv isScrolled={isScrolled} isMain={main}> */}
      <Container>
        <LogoDiv onClick={() => navigate('/')}>
          <Logo src={StrokeLogo} alt="logo" />
          {/* {widthCategory !== 'large' ? (
            <Logo src={StrokeLogo} alt="logo" />
          ) : (
            <Logo src={SeonghoLogo} alt="logo" />
          )} */}
        </LogoDiv>
        <NavList>
          <NavItem onClick={() => navigate('/')}>About me</NavItem>
          <NavItem onClick={() => navigate('/blog')}>Blog</NavItem>
          <NavItem onClick={() => navigate('/exercise')}>Exercise</NavItem>

          {/* 
          {widthCategory !== 'small' ? (
            <RowDiv>
              <NavItem onClick={() => navigate('/blog/?category=JavaScript')}>
                JavaScript
              </NavItem>
              <NavItem onClick={() => navigate('/blog/?category=TypeScript')}>
                TypeScript
              </NavItem>
            </RowDiv>
          ) : (
            ''
          )}
{widthCategory === 'large' ? (
            <RowDiv>
              <NavItem onClick={() => navigate('/blog/?category=Vue')}>
                Vue
              </NavItem>
              <NavItem onClick={() => navigate('/blog/?category=React')}>
                React
              </NavItem>
              <NavItem onClick={() => navigate('/blog/?category=FrontEnd')}>
                FrontEnd
              </NavItem>
            </RowDiv>
          ) : (
            ''
          )} */}
        </NavList>
      </Container>
    </NavDiv>
  )
}

export default NavBar
