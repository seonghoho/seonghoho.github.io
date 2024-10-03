import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

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
  color: #333333;

  border-bottom: solid 1px #d9d9d9;

  @media (max-width: 800px) {
    /* width: 100%; */
    padding: 30px 20px;
  }
  @media (max-width: 500px) {
    padding: 20px 20px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: auto;
  margin: auto 0;
  font-size: 36px;
  font-weight: 600;

  /* 텍스트가 강제로 줄바꿈되도록 처리 */
  word-break: break-word;
  hyphens: auto;

  /* 최대 너비를 화면에 맞게 설정하여 넘치지 않도록 함 */
  max-width: 100%;
  width: 100%;

  @media (max-width: 800px) {
    font-size: 30px;
    margin: 0 0 30px;
  }

  @media (max-width: 400px) {
    font-size: 25px;
  }
`

const ArticleData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
  font-size: 18px;
  font-weight: 600;
  height: auto;

  @media (max-width: 800px) {
    //flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 500;
  }
`

const ArticleHeadInfo: FunctionComponent<ArticleHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <ArticleHeadInfoWrapper>
      <Title className="title">{title}</Title>
      <ArticleData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </ArticleData>
    </ArticleHeadInfoWrapper>
  )
}

export default ArticleHeadInfo
