import React, { FunctionComponent } from 'react'
import { css, Global } from '@emotion/react'
// 폰트 파일 import
import NotoSansKRThin from '../../fonts/NotoSansKR-Thin.ttf'
import NotoSansKRExtraLight from '../../fonts/NotoSansKR-ExtraLight.ttf'
import NotoSansKRLight from '../../fonts/NotoSansKR-Light.ttf'
import NotoSansKRRegular from '../../fonts/NotoSansKR-Regular.ttf'
import NotoSansKRMedium from '../../fonts/NotoSansKR-Medium.ttf'
import NotoSansKRSemiBold from '../../fonts/NotoSansKR-SemiBold.ttf'
import NotoSansKRBold from '../../fonts/NotoSansKR-Bold.ttf'
import NotoSansKRExtraBold from '../../fonts/NotoSansKR-ExtraBold.ttf'
import NotoSansKRBlack from '../../fonts/NotoSansKR-Black.ttf'

const defaultStyle = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    font-family:
      'Noto Sans KR',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
