import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main<{ isMain: boolean }>`
  display: flex;
  flex-direction: column;
  height: calc(100% - 65px);
  margin: 0 auto;
  margin-top: ${props => (props.isMain ? '0' : '65px')};
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  const location = useLocation()
  const [main, useMain] = useState<boolean>(true)

  useEffect(() => {
    location.pathname === '/' ? useMain(true) : useMain(false)
  }, [])

  return (
    <Container isMain={main}>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@seonghoho" />
        <meta name="twitter:creator" content="@seonghoho" />
        <meta
          name="google-site-verification"
          content="ahKAZy_ZEdSmV6z6SSPmL5QXxkCGCelAec7GlpKb02g"
        />
        <meta
          name="naver-site-verification"
          content="d787a4a46689e588ab8b43957c9b5679561c0df7"
        />
        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
