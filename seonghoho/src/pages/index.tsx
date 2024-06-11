import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Footer from 'components/Common/Footer';
import CategoryList from 'components/Main/CategoryList';
import Introduction from 'components/Main/Introduction';
import ArticleList from 'components/Main/ArticleList';
import { graphql } from 'gatsby';
import { ArticleListItemType } from '../types/ArticleDetailType';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: ArticleListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const IndexPage: FunctionComponent<IndexPageProps> = function({
                                                                data: {
                                                                  allMarkdownRemark: { edges },
                                                                  file: {
                                                                    childImageSharp: { gatsbyImageData },
                                                                  },
                                                                },
                                                              }) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <ArticleList articles={edges} />
      <Footer />
    </Container>
  );
};

export default IndexPage;

export const getArticleList = graphql`
  query getArticleList {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      edges {
        node {
          id
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
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
