/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/apple-touch-icon.png"
    />,
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />,
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />,
    // <link rel="manifest" href="./static/site.webmanifest" />,
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color="#5bbad5"
    />,
    <meta name="msapplication-TileColor" content="#00aba9" />,
    <meta name="theme-color" content="#ffffff" />,
  ])

  setHtmlAttributes({ lang: `en` })
}
