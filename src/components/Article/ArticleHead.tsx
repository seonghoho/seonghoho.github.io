import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ArticleHeadInfo from './ArticleHeadInfo'

// type GatsbyImgProps = {
//   image: IGatsbyImageData
//   alt: string
//   className?: string
// }

type ArticleHeadProps = {
  title: string
  date: string
  categories: string[]
  thumbnail: IGatsbyImageData
}

const ArticleHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: auto;
    margin-top: 0;
  }
`

// const BackgroundImage = styled((props: GatsbyImgProps) => (
//   <GatsbyImage {...props} style={{ position: 'absolute' }} />
// ))`
//   z-index: -1;
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   filter: brightness(0.25);
//
//   @media (max-width: 800px) {
//     height: 300px;
//   }
// `

const ArticleHead: FunctionComponent<ArticleHeadProps> = function ({
  title,
  date,
  categories,
  // thumbnail,
}) {
  return (
    <ArticleHeadWrapper>
      {/*<BackgroundImage image={thumbnail} alt="thumbnail" />*/}
      <ArticleHeadInfo title={title} date={date} categories={categories} />
    </ArticleHeadWrapper>
  )
}

export default ArticleHead
