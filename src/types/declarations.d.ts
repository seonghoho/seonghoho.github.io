declare module '*.svg' {
  const content: string
  export default content
}

// 폰트 파일을 선언하고 읽도록 만드는 코드

declare module '*.ttf' {
  const content: string
  export default content
}
