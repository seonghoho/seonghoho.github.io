import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { ArticlePageItemType } from '../types/ArticleDetailType'
import Template from '../components/Common/Template'
import ArticleHead from '../components/Article/ArticleHead'
import ArticleContent from 'components/Article/ArticleContent'
import CommentWidget from 'components/Article/CommentWidget'
import NavBar from 'components/Common/NavBar'
import styled from '@emotion/styled'
// import styled from '@emotion/styled'

// const ArticleBody = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   /* align-items: center; */
//   width: 1024px;
//   margin: 0 auto;

//   @media (max-width: 1050px) {
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: 768px) {
//   }
// `

// const Category = styled.div`
//   width: 100%;
//   margin-top: 65px;
//   border: 1px solid #333;

//   @media (max-width: 1050px) {
//     display: none;
//   }
// `

const BGDiv = styled.div`
  background-color: #ffffff;
  color: #333333;
  border-radius: 20px;
  width: 820px;
  height: 100%;
  margin: 40px auto;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
  }
`

type ArticleTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: ArticlePageItemType[] // 존재하지 않는 타입이므로 에러가 발생하지만 일단 작성해주세요
    }
  }
  location: {
    href: string
  }
}

const ArticleTemplate: FunctionComponent<ArticleTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, categories, thumbnail },
    },
  } = edges[0]

  const gatsbyImageData = thumbnail?.childImageSharp?.gatsbyImageData
  const publicURL = thumbnail?.publicURL

  return (
    <div>
      <NavBar />
      {/* <ArticleBody>
        <Category>sadfsafs</Category> */}
      <Template
        title={title}
        description={summary}
        url={href}
        image={publicURL}
      >
        <BGDiv>
          <ArticleHead
            title={title}
            date={date}
            categories={categories}
            thumbnail={gatsbyImageData}
          />
          <ArticleContent html={html} />
          <CommentWidget />
        </BGDiv>
      </Template>
      {/* </ArticleBody> */}
    </div>
  )
}

export default ArticleTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
