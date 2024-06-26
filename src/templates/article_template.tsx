import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { ArticlePageItemType } from '../types/ArticleDetailType' // 바로 아래에서 정의할 것입니다
import Template from '../components/Common/Template'
import ArticleHead from '../components/Article/ArticleHead'
import ArticleContent from 'components/Article/ArticleContent'
import CommentWidget from 'components/Article/CommentWidget'

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
      frontmatter: {
        title,
        summary, // 나중에 사용할 예정입니다!
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <ArticleHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <ArticleContent html={html} />
      <CommentWidget />
    </Template>
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
