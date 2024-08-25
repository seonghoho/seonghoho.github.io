import styled from '@emotion/styled'
import ElasticLine from 'components/Portfolio/Exercise/ElasticLine'

const Card = styled.div`
  border: 5px solid #d9d9d9;
  box-shadow: 5px 10px 10px #d9d9d9;
  width: 450px;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  border-radius: 10%;
`

const CardList = () => {
  return (
    <div>
      CardList
      <Card>
        <ElasticLine />
      </Card>
    </div>
  )
}

export default CardList
