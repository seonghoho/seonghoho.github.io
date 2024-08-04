import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { ArticleFrontmatterType } from '../../types/ArticleDetailType'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

type ArticleDetailProps = ArticleFrontmatterType & {
  link: string
}

const ArticleDetailContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 15px 30px;
`

const ArticleDetailWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 600;
`

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 0 4px;
  padding: 3px 6px;
  border-radius: 3px;
  background: #555;
  font-size: 12px;
  font-weight: 600;
  color: white;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`

const ArticleDetail: FunctionComponent<ArticleDetailProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) {
  const image = thumbnail?.childImageSharp
    ? getImage(thumbnail.childImageSharp.gatsbyImageData)
    : null

  return (
    <ArticleDetailWrapper to={link}>
      {image ? (
        <ThumbnailImage image={image} alt="Post Item Image" />
      ) : (
        //   썸네일 첨부 안할 시 넣는 이미지
        <StaticImage
          src="../../../contents/SampleImg.jpg"
          alt="Sample Image"
          height={200}
        />
      )}
      <ArticleDetailContent>
        <Title>{title}</Title>
        <RowDiv>
          <Date>{date} | </Date>
          <Category>
            {categories.map(item => (
              <CategoryItem key={item}>{item}</CategoryItem>
            ))}
          </Category>
        </RowDiv>
        <Summary>{summary}</Summary>
      </ArticleDetailContent>
    </ArticleDetailWrapper>
  )
}

export default ArticleDetail
