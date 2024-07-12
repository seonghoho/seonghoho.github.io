import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from '../Main/ProfileImage'
import Phone from '../../images/Phone.svg'
import Message from '../../images/Message.svg'
import Github from '../../images/Github.svg'

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
  padding-top: 65px;

  @media (max-width: 1050px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 800px) {
    margin: 20px auto;
    padding-top: 0px;
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

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-size: 20px;

  @media (max-width: 800px) {
    margin: 5px 10px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const TitleDiv = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    margin: 20px 0;
  }
`

const SubTitle = styled.div`
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 1050px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 60px;
  font-weight: 600;

  @media (max-width: 1050px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`

const Logo = styled.img`
  scale: 1.2;
`

const ContactContent = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const ContactLink = styled.a`
  color: inherit; // 부모 요소의 색상 상속
  text-decoration: none; // 링크 밑줄 제거
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('클립보드에 복사되었습니다: ')
      })
      .catch(err => {
        alert('복사에 실패했습니다: ' + err)
      })
  }

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
            <ContactItem>
              <Logo src={Phone} alt="call" />
              <ContactContent onClick={() => copyToClipboard('010-5512-4339')}>
                010-5512-4339
              </ContactContent>
            </ContactItem>
            <ContactItem>
              <Logo src={Message} alt="email" />
              <ContactContent
                onClick={() => copyToClipboard('chltjdgh3@naver.com')}
              >
                chltjdgh3@naver.com
              </ContactContent>
            </ContactItem>
            <ContactItem>
              <Logo src={Github} alt="github_link" />
              <ContactContent>
                <ContactLink
                  href="https://github.com/seonghoho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/seonghoho
                </ContactLink>
              </ContactContent>
            </ContactItem>
          </Contact>
        </RowDiv>
      </Wrapper>
    </Background>
  )
}

export default Introduction
