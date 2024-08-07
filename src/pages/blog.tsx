import React, { FC, useMemo } from 'react'
import CategoryList, {
  CategoryListProps,
} from '../components/Main/CategoryList'
import ArticleList from '../components/Main/ArticleList'
import { graphql } from 'gatsby'
import { ArticleListItemType } from '../types/ArticleDetailType'
import queryString, { ParsedQuery } from 'query-string'
import Template from '../components/Common/Template'
import NavBar from 'components/Common/NavBar'

type BlogPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: ArticleListItemType[]
    }
    file: {
      // childImageSharp: {
      //   gatsbyImageData: IGatsbyImageData
      // }
      publicURL: string
    }
  }
}

const BlogPage: FC<BlogPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      // childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: ArticleListItemType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <div>
      <NavBar />
      <Template
        title={title}
        description={description}
        url={siteUrl}
        image={publicURL}
      >
        {/*<Introduction profileImage={gatsbyImageData} />*/}
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <ArticleList selectedCategory={selectedCategory} articles={edges} />
      </Template>
    </div>
  )
}

export default BlogPage

export const getArticleList = graphql`
  query getArticleList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
