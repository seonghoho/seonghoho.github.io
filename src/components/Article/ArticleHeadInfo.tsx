import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export type ArticleHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const ArticleHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 0;
  color: rgb(51, 51, 51);

  border-bottom: solid 1px #d9d9d9;

  @media (max-width: 800px) {
    width: 100%;
    padding: 40px 35px;
  }
`

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 2px 2px 10px #333;
  }

  @media (max-width: 800px) {
    width: 25px;
    height: 25px;
    font-size: 18px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: auto;
  margin: 20px 0;
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 30px;
    margin: 10px 0;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`

const ArticleData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  height: auto;

  @media (max-width: 800px) {
    //flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`

const ArticleHeadInfo: FunctionComponent<ArticleHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  const goBackPage = () => {
    window.location.href = 'https://seonghoho.github.io/blog/'
  }

  return (
    <ArticleHeadInfoWrapper>
      <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon>
      <Title>{title}</Title>
      <ArticleData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </ArticleData>
    </ArticleHeadInfoWrapper>
  )
}

export default ArticleHeadInfo
