import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { ArticleListItemType } from '../types/ArticleDetailType'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  articleList: ArticleListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedCategory: string,
  articles: ArticleListItemType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null)
  const [count, setCount] = useState<number>(1)

  const articleListByCategory = useMemo<ArticleListItemType[]>(
    () =>
      articles.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: ArticleListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory, articles],
  )
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.unobserve(entries[0].target)
    })
  }, [])

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= articleListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    articleList: articleListByCategory.slice(
      0,
      count * NUMBER_OF_ITEMS_PER_PAGE,
    ),
  }
}

export default useInfiniteScroll
