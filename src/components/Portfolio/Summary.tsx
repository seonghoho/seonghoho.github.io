import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  background-color: aliceblue;
  color: #444;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1024px;
  height: calc(100vh);

  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 800px) {
  }
`

const Title = styled.div<{ isVisible: boolean }>`
  margin: 10vh 0;
  font-size: 36px;
  font-weight: 600;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 1050px) {
    font-size: 30px;
    margin: 8vh 0;
  }

  @media (max-width: 730px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    margin: 5vh 0;
  }
`

const Summary: React.FC = () => {
  const [isVisible, setIsVisible] = useState([false, false, false])
  // useRef를 HTMLElement 배열로 타입 지정
  const titleRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers = titleRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newIsVisible = [...prev]
              newIsVisible[index] = true
              return newIsVisible
            })
            observer.unobserve(entry.target)
          }
        },
        {
          root: null,
          threshold: 1, // 화면의 40% 지점에 도달했을 때
        },
      )
      return observer
    })

    titleRefs.current.forEach((ref, index) => {
      if (ref) {
        observers[index].observe(ref)
      }
    })

    return () => {
      titleRefs.current.forEach((ref, index) => {
        if (ref) {
          observers[index].unobserve(ref)
        }
      })
    }
  }, [])

  return (
    <Background>
      <Wrapper>
        <Title ref={el => (titleRefs.current[0] = el)} isVisible={isVisible[0]}>
          남들과 다른 성장 곡선을 그리고 있습니다.
        </Title>
        <Title ref={el => (titleRefs.current[1] = el)} isVisible={isVisible[1]}>
          대세를 따르기만 하는 것이 아닌, 이유에 집중합니다.
        </Title>
        <Title ref={el => (titleRefs.current[2] = el)} isVisible={isVisible[2]}>
          팀 내에서 페이스 메이커 역할을 합니다.
        </Title>
      </Wrapper>
    </Background>
  )
}

export default Summary
