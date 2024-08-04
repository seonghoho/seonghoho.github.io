import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface ArticleContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0;
  word-break: break-all;
  color: #555555;

  // Markdown Style
  line-height: 2;
  font-size: 16px;
  font-weight: 500;

  // Apply Padding Attribute to All Elements

  p {
    padding: 5px 0;
  }

  // Adjust Heading Element Style

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    margin-bottom: 15px;
    color: #555555;
  }

  * + h1,
  * + h2 {
    margin-top: 20px;
  }

  * + h3 {
    margin-top: 10px;
  }

  * + h4 {
    margin-top: 20px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style

  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style

  ol,
  ul {
    margin-left: 20px;
    padding: 15px 0;
  }

  // Adjust Horizontal Rule style

  hr {
    border: 1px solid #d9d9d9;
    margin: 100px 0;
  }

  // Adjust Link Element Style

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // 이미지 스타일
  figure {
    margin: 0; /* 기본 마진 제거 */
    padding: 0; /* 기본 패딩 제거 */
    text-align: center; /* 이미지 및 캡션 중앙 정렬 */
  }

  img {
    width: 80%;
  }

  figcaption {
    margin-top: 5px; /* 이미지와 캡션 사이의 여백 */
    font-size: 14px; /* 캡션 폰트 크기 */
    color: #888888; /* 캡션 텍스트 색상 */
  }

  // 코드 블럭 스타일
  pre[class*='language-'] {
    margin: 5px 0 10px;
    padding: 30px;
    tab-size: 4;
    font-family: 'Pretendard', 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 16px;
    color: #333;
    background-color: #f5f5f5;

    border-radius: 5px; /* 코드 블럭 모서리 둥글게 */
    overflow-x: auto; /* 코드 블럭 가로 스크롤 */

    ::-webkit-scrollbar {
      height: 8px; /* 스크롤바 높이 */
    }

    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2); /* 스크롤바 색상 */
      border-radius: 4px; /* 스크롤바 모서리 둥글게 */
    }
  }

  // 백틱으로 인라인 코드 스타일
  code[class*='language-'] {
    tab-size: 4;
    font-family: 'Pretendard', 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 16px;
    padding: 0.2rem 0.4rem 0.3rem;
    margin: 0 0.2rem;
    color: #333;
    background-color: #f5f5f5;
  }

  // Markdown Responsive Design
  @media (max-width: 800px) {
    width: 100%;
    padding: 30px 25px;
    line-height: 1.8;
    font-size: 15px;

    * + h1,
    * + h2 {
      margin-top: 10px;
    }

    * + h3 {
      margin-top: 10px;
    }

    * + h4 {
      margin-top: 5px;
    }

    hr + h1,
    hr + h2,
    hr + h3 {
      margin-top: 0;
    }

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 15px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 40px 0;
    }

    ol,
    ul {
      margin-left: 15px;
      padding: 10px 0;
    }

    // 코드 블럭 스타일
    pre[class*='language-'] {
      margin: 5px 0 10px;
      padding: 30px;
      font-size: 14px;
    }

    // 백틱으로 인라인 코드 스타일
    code[class*='language-'] {
      font-size: 14px;
      padding: 0.2rem 0.4rem 0.3rem;
      margin: 0 0.2rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px 20px;
    line-height: 1.7;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 15px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 40px 0;
    }

    ol,
    ul {
      margin-left: 15px;
      padding: 5px 0;
    }

    // 코드 블럭 스타일
    pre[class*='language-'] {
      margin: 5px 0 10px;
      padding: 30px;
      font-size: 14px;
    }

    // 백틱으로 인라인 코드 스타일
    code[class*='language-'] {
      font-size: 14px;
      padding: 0.2rem 0.4rem 0.3rem;
      margin: 0 0.2rem;
    }
  }
`

const ArticleContent: FunctionComponent<ArticleContentProps> = function ({
  html,
}) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default ArticleContent
