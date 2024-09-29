import styled from '@emotion/styled'
import Clock from 'components/Portfolio/Exercise/Clock/Clock'
import ElasticLine from 'components/Portfolio/Exercise/ElasticLine/ElasticLine'

const Card = styled.div`
  border: 5px solid #d9d9d9;
  box-shadow: 5px 10px 10px #d9d9d9;
  width: 450px;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 10%;
  scale: 80%;
`

const Container = styled.div`
  margin: 20px auto;
  width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const CardList = () => {
  return (
    <Container>
      <Card>
        <ElasticLine />
      </Card>
      <Card>
        <Clock />
      </Card>
    </Container>
  )
}

export default CardList
