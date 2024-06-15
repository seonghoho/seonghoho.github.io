import React, { FunctionComponent } from 'react'
import NavBar from 'components/Common/NavBar'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    file: {
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: { publicURL },
  },
}) {
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <NavBar />
    </Template>
  )
}

export default IndexPage

export const getInformation = graphql`
  query getArticleList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
