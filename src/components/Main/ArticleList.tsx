import React, {FunctionComponent, useMemo} from 'react'
import styled from '@emotion/styled'
import ArticleDetail from './ArticleDetail'
import {ArticleListItemType} from '../../types/ArticleDetailType'
import useInfiniteScroll, {useInfiniteScrollType,} from '../../hooks/useInfiniteScroll'

type ArticleListProps = {
    selectedCategory: string
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
`

const ArticleList: FunctionComponent<ArticleListProps> = function ({
                                                                       selectedCategory,
                                                                       articles,
                                                                   }) {
    const articleListData = useMemo(
        () =>
            articles.filter(
                ({
                     node: {
                         frontmatter: {categories},
                     },
                 }: ArticleListItemType) =>
                    selectedCategory !== 'All'
                        ? categories.includes(selectedCategory)
                        : true,
            ),
        [selectedCategory],
    )

    const {containerRef, articleList}: useInfiniteScrollType =
        useInfiniteScroll(selectedCategory, articleListData)
    return (
        <ArticleListWrapper ref={containerRef}>
            {articleList.map(
                ({
                     node: {
                         id,
                         fields: {slug},
                         frontmatter,
                     },
                 }: ArticleListItemType) => (
                    <ArticleDetail {...frontmatter} link={slug} key={id}/>
                ),
            )}
        </ArticleListWrapper>
    )
}

export default ArticleList
