import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { ArticleListItemType } from 'types/ArticleDetailType'

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

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0].isIntersecting) return

          setCount(value => value + 1)
          observer.disconnect()
        },
      )

      if (
        NUMBER_OF_ITEMS_PER_PAGE * count >= articleListByCategory.length ||
        containerRef.current === null ||
        containerRef.current.children.length === 0
      ) {
        return () => {} // 빈 정리 함수 반환
      }

      observer.observe(
        containerRef.current.children[containerRef.current.children.length - 1],
      )

      return () => {
        if (
          containerRef.current !== null &&
          containerRef.current.children.length > 0
        ) {
          observer.unobserve(
            containerRef.current.children[
              containerRef.current.children.length - 1
            ],
          )
        }
      }
    } else {
      return () => {} // 빈 정리 함수 반환
    }
  }, [count, selectedCategory, articleListByCategory.length])

  return {
    containerRef,
    articleList: articleListByCategory.slice(
      0,
      count * NUMBER_OF_ITEMS_PER_PAGE,
    ),
  }
}

export default useInfiniteScroll
