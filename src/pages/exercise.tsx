import NavBar from 'components/Common/NavBar'
import Template from 'components/Common/Template'
import CardList from 'components/Portfolio/Exercise/CardList'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'

type ExercisePageProps = {
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

const ExercisePage: FunctionComponent<ExercisePageProps> = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: { publicURL },
  },
}) => {
  return (
    <div>
      <NavBar />
      <Template
        title={title}
        description={description}
        url={siteUrl}
        image={publicURL}
      >
        <CardList />
      </Template>
    </div>
  )
}

export default ExercisePage

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
