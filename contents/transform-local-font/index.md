---
date: '2024-07-14'
title: '웹 폰트에서 로컬 폰트로 바꿔 적용하기'
categories: ['CSS', 'WebFont', 'LocalFont']
summary: 'URL로 불러왔던 Web Font를 로딩 최적화를 위해 Local Font로 바꾸기 위한 방법을 알아보자.'
thumbnail: 'light-house.png'
---

## 개요

기존 github.io 블로그에는 `@emotion`을 사용해 프로젝트에 style을 적용하고 있다. 

성능 최적화를 위해 많은 SSR 방식의 Gatsby를 사용하고 있다.

F12를 눌러 `개발자도구`에 접근을 하게 되면 크롬 브라우저에서 `LightHouse`를 확장자 설치를 해서 페이지 분석을 할 수 있다.

페이지를 분석해 보았는데, 아래 화면처럼 Font 관련 문제가 발생하는 것을 발견했다.

![light-house](light-house.png)

## 문제점

Font를 Global Style에 적용할 때 웹폰트를 사용해서 적용한 부분에서 불필요한 코드 호출이 발생하는 것으로 파악했다.

이전에 진행한 프로젝트들에서 font 파일을 woff2 파일로 다운받아 프로젝트 로컬 서버에 위치시킨 후 불러오는 방식으로 사용한 경험이 있다.

url로 불러오던 웹 폰트를 local 파일을 불러오는 방식으로 바꾸면 해결이 될 것이라 판단했다.

## 해결방법

### 1. 사용하고자 하는 Font를 설치한다.

보통 눈누, 구글 폰트에서 선택해 사용한다.

[Noto Sans Kr 눈누 바로가기](https://noonnu.cc/font_page/34)

[Noto Sans Kr 구글 폰트 바로가기](https://fonts.google.com/noto/specimen/Noto+Sans+KR)

### 2. Font 파일을 프로젝트에 fonts 라는 디렉토리를 생성해서 추가한다.
![vscode-fonts](vscode-fonts.png)

위 사진처럼 추가하면 된다.

### 3. Font를 적용한 Global Style 위치에 코드를 적용한다.

아래는 기존 글로벌 스타일

```typescript
import React, { FunctionComponent } from 'react'
import { css, Global } from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

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
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
```

아래는 변경한 글로벌 스타일

```typescript
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
```

### 포인트

`@font-face`를 적용하는 부분이 포인트다.

```
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${NotoSansKRBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
```

## 결론

이렇게 진행을 하니, 성능이 개선되었다.