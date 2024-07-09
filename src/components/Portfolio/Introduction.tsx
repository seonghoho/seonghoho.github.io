import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1024px;
  height: 300px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 800px) {
    height: 250px;
  }
`

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 400;
  padding: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>정직함과 열정으로 무장한,</SubTitle>
          <Title>FrontEnd 개발자 최성호입니다.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
