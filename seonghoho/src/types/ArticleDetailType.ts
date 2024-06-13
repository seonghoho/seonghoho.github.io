import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ArticleFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export type ArticleListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ArticleFrontmatterType
  }
}
