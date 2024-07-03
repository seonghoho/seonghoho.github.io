import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 768px;
`

const SelectedCategoryCount = styled.div`
  margin: 10px;
  font-weight: 500;
`

const SelectedCategory = styled.div`
  display: flex;
  margin: 20px 0;
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 40px auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  const selectedCategoryCount = categoryList[selectedCategory] || 0

  return (
    <CategoryListWrapper>
      {/* 카테고리 목록 */}
      {Object.entries(categoryList).map(([name]) => (
        <CategoryItem
          to={`/blog/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name}
        </CategoryItem>
      ))}

      {/* 현재 카테고리 */}
      <RowDiv>
        <SelectedCategory>{selectedCategory}</SelectedCategory>
        <SelectedCategoryCount>
          {selectedCategoryCount}posts
        </SelectedCategoryCount>
      </RowDiv>
    </CategoryListWrapper>
  )
}

export default CategoryList
