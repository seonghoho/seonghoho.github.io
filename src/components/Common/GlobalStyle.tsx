import React, { FunctionComponent } from 'react'
import { css, Global } from '@emotion/react'

// 폰트 파일 import
import PretendardThin from '../../fonts/Pretendard-Thin.woff2'
import PretendardExtraLight from '../../fonts/Pretendard-ExtraLight.woff2'
import PretendardLight from '../../fonts/Pretendard-Light.woff2'
import PretendardRegular from '../../fonts/Pretendard-Regular.woff2'
import PretendardMedium from '../../fonts/Pretendard-Medium.woff2'
import PretendardSemiBold from '../../fonts/Pretendard-SemiBold.woff2'
import PretendardBold from '../../fonts/Pretendard-Bold.woff2'
import PretendardExtraBold from '../../fonts/Pretendard-ExtraBold.woff2'
import PretendardBlack from '../../fonts/Pretendard-Black.woff2'

const defaultStyle = css`
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraLight}) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family:
      'Pretendard',
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
