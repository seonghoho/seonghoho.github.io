import React, { FunctionComponent } from 'react'
import NavBar from 'components/Common/NavBar'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import styled from '@emotion/styled'

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

      <Content>메인화면 제작중입니다용가리</Content>
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
