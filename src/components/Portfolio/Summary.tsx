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

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`

const Summary = () => {
  return (
    <Background>
      <Wrapper>
        <Title>남들과 다른 성장곡선을 그리는 프론트엔드 개발자</Title>
      </Wrapper>
    </Background>
  )
}

export default Summary
