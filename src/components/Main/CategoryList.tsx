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

// 카테고리 컨테이너 div
const CategoryContainer = styled.div`
  margin: 20px auto;
  width: 1024px;

  @media (max-width: 1050px) {
    width: 100%;
    padding: 0 20px;
  }
`

// 카테고리 목록 감싼 div
const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 800px) {
  }
`

// 단일 카테고리 div
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin: 5px 5px;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: ${({ active }) => (active ? '20px' : '18px')};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#8c99ff' : '#e2e8f0')};
  color: ${({ active }) => (active ? '#fff' : '#333')};

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  active {
    background-color: #8c99ff;
    color: #fff;
    transition: 3ms;
  }

  @media (max-width: 800px) {
    font-size: 15px;
  }
`

// 현재 선택된 카테고리 div
const CurrentCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`

// 선택된 카테고리 이름 div
const SelectedCategory = styled.div`
  display: flex;
  margin: 20px 0;
  font-size: 36px;
  font-weight: 600;

  @media (max-width: 800px) {
  }
`

// 선택된 카테고리 갯수 div
const SelectedCategoryCount = styled.div`
  color: #246bff;
  font-size: 20px;
  margin: 10px;
  font-weight: 500;
  align-items: center;
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  const selectedCategoryCount = categoryList[selectedCategory] || 0

  return (
    <CategoryContainer>
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
      </CategoryListWrapper>
      {/* 현재 카테고리 */}
      <CurrentCategory>
        <SelectedCategory>{selectedCategory}</SelectedCategory>
        <SelectedCategoryCount>
          {selectedCategoryCount}posts
        </SelectedCategoryCount>
      </CurrentCategory>
    </CategoryContainer>
  )
}

export default CategoryList
