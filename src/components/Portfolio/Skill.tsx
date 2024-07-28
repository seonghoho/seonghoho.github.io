import React from 'react'
import styled from '@emotion/styled'

const Background = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(320deg, #fff 0%, #91ffff67 100%);
  color: #444;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1024px;
  height: calc(100%);
  /* border: 1px solid #333; */
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
  }
`

const Title = styled.div`
  margin: 5vh 0;
  font-size: 40px;
  font-weight: 600;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 1050px) {
    margin: 5vh 0;
    font-size: 35px;
  }

  @media (max-width: 768px) {
    margin: 5vh 0;
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  width: calc(1024px - 40px);
  margin: 0 auto 20px;
  padding: 0; // auto를 제거

  @media (max-width: 1050px) {
    width: 100%;
    padding: 0 20px; // auto를 제거

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0;
  }
`

const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
`

const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 20px;
    padding: 15px 20px;
  }
`
const Box = styled.div`
  /* border: 1px solid #555; */
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 3px 6px 5px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  padding: 50px 20px;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 3px 10px 15px #d9d9d9; /* 호버 시 그림자도 함께 변화 */
  }

  &:hover ${BoxTitle} {
    color: #555; /* BoxTitle의 색상을 호버 시 변경 */
    font-weight: 800;
  }
  &:hover ${BoxContent} {
    background-color: #eeeeee;
    font-weight: 600;
  }

  @media (max-width: 1050px) {
    width: 100%;
    padding: 50px 20px;
  }
  @media (max-width: 800px) {
    padding: 40px 20px;
  }
`

const Summary: React.FC = () => {
  return (
    <Background>
      <Wrapper>
        <Title>Skills</Title>
        <BoxGrid>
          <Box>
            <BoxTitle>Language</BoxTitle>
            <BoxContent>HTML5</BoxContent>
            <BoxContent>JavaScript</BoxContent>
            <BoxContent>TypeScript</BoxContent>
          </Box>
          <Box>
            <BoxTitle>FrameWork</BoxTitle>
            <BoxContent>React</BoxContent>
            <BoxContent>Vue</BoxContent>
            <BoxContent>Gatsby</BoxContent>
          </Box>
          <Box>
            <BoxTitle>State Management</BoxTitle>
            <BoxContent>React-Query</BoxContent>
            <BoxContent>Zustand</BoxContent>
            <BoxContent>Jotai</BoxContent>
          </Box>
          <Box>
            <BoxTitle>CSS</BoxTitle>
            <BoxContent>TailWind</BoxContent>
            <BoxContent>Styled-Components</BoxContent>
            <BoxContent>Emotion</BoxContent>
          </Box>
          <Box>
            <BoxTitle>Tools</BoxTitle>
            <BoxContent>Notion</BoxContent>
            <BoxContent>Figma</BoxContent>
            <BoxContent>Jira</BoxContent>
          </Box>
          <Box>
            <BoxTitle>ETC</BoxTitle>
            <BoxContent>Python</BoxContent>
            <BoxContent>Django</BoxContent>
            <BoxContent>Git</BoxContent>
          </Box>
        </BoxGrid>
      </Wrapper>
    </Background>
  )
}

export default Summary
