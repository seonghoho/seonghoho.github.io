import React, { FunctionComponent } from 'react'
import NavBar from 'components/Common/NavBar'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Introduction from 'components/Portfolio/Introduction'
import Summary from 'components/Portfolio/Summary'

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
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bolder;
  font-size: 20px;
  margin: 100px 0;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  return (
    <div>
      <NavBar />
      <Template
        title={title}
        description={description}
        url={siteUrl}
        image={publicURL}
      >
        <Introduction profileImage={gatsbyImageData} />
        <Summary />
        <Content>메인화면 제작중...</Content>
      </Template>
    </div>
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
      childImageSharp {
        gatsbyImageData(width: 800, height: 800)
      }
      publicURL
    }
  }
`
