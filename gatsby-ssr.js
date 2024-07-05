/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

const React = require('react')
require('@fontsource-variable/noto-sans-kr') // 폰트 패키지 import

const GlobalStyle = `
  body {
    font-family: 'Noto Sans KR Variable', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })

  setHeadComponents([
    <style
      key="global-style"
      dangerouslySetInnerHTML={{ __html: GlobalStyle }}
    />,
  ])
}
