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

  // Markdown Style
  line-height: 2;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements

  p {
    padding: 5px 0;
  }

  // Adjust Heading Element Style

  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 20px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 40px;
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
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style

  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style

  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style

  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;
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

  code[class*='language-'],

  // 백틱으로  설정한 코드 블럭
  pre[class*='language-'] {
    tab-size: 2;
    font-family: 'Noto Sans KR', 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    margin: 0 0.2rem;
    color: #fff;
  }

  // Markdown Responsive Design
  @media (max-width: 800px) {
    width: 100%;
    padding: 60px 35px;
    line-height: 1.8;
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
  }
`

const ArticleContent: FunctionComponent<ArticleContentProps> = function ({
  html,
}) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default ArticleContent
