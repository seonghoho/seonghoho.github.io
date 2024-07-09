import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #00ff4c 0%, #003cff 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1024px;
  height: calc(100vh);
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 800px) {
    margin: 20px auto;
  }
`

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60%;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 70%;
  }
`

// 연락처 전체 div
const Contact = styled.div`
  width: calc(50% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

// 연락처 개별 item div
const ContactItem = styled.div`
  margin: 10px;
  font-size: 20px;

  @media (max-width: 800px) {
    margin: 5px 10px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

// 제목 전체 div
const TitleDiv = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    margin: 20px 0;
  }
`
// 큰 sub 제목
const SubTitle = styled.div`
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 1050px) {
    font-size: 30px;
  }

  /* @media (max-width: 800px) {
    font-size: 20px;
  } */

  @media (max-width: 500px) {
    font-size: 22px;
  }
`
// 큰 제목
const Title = styled.div`
  margin-top: 5px;
  font-size: 60px;
  font-weight: 600;

  @media (max-width: 1050px) {
    font-size: 40px;
  }
  /* @media (max-width: 800px) {
    font-size: 25px;
  } */

  @media (max-width: 500px) {
    font-size: 28px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <TitleDiv>
          <Title>정직함과 열정으로 무장한</Title>
          <SubTitle>FrontEnd 개발자 최성호입니다.</SubTitle>
        </TitleDiv>
        <RowDiv>
          <ProfileImage profileImage={profileImage} />
          <Contact>
            <ContactItem>Call : 010-5512-4339</ContactItem>
            <ContactItem>Email : chltjdgh3@naver.com</ContactItem>
            <ContactItem>Github : https://github.com/seonghoho</ContactItem>
          </Contact>
        </RowDiv>
      </Wrapper>
    </Background>
  )
}

export default Introduction
