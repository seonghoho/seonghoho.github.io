import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ArticleDetail from 'components/Main/ArticleDetail';
import { ArticleListItemType } from 'types/ArticleDetailType';

type ArticleListProps = {
  articles: ArticleListItemType[]
}

const ArticleListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768px;
    margin: 0 auto;
    padding: 50px 0 100px;
  
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 50px 20px;
    }
`;

const ArticleList: FunctionComponent<ArticleListProps> = function({ articles }) {
  return <ArticleListWrapper>
    {articles.map(
      ({
         node: { id, frontmatter },
       }: ArticleListItemType) => (
        <ArticleDetail
          {...frontmatter}
          link="https://www.google.co.kr/"
          key={id}
        />
      ),
    )}
  </ArticleListWrapper>;
};

export default ArticleList;