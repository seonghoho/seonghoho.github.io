/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // 사이트 메타태그
  siteMetadata: {
    title: `Seongho's Dev Log`,
    description: `Seongho's Developer Blog and Portfolio`,
    author: `ChoiSeongho`,
    siteUrl: `https://seonghoho.github.io/`,
  },
  plugins: [
    {
      // TypeScript를 지원합니다.
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    // Emotion을 사용하여 CSS-in-JS 스타일을 적용합니다.
    `gatsby-plugin-emotion`,

    // React Helmet을 사용하여 HTML head 요소를 관리합니다.
    `gatsby-plugin-react-helmet`,

    // Sitemap 추가
    'gatsby-plugin-sitemap',

    // 표준 페이지를 지정합니다.
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://seonghoho.github.io/`,
        stripQueryString: true,
      },
    },

    // robot.txt 추가하는 플러그인
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    {
      // 파일 시스템에서 컨텐츠를 소스합니다.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },

    {
      // 파일 시스템에서 이미지를 소스합니다.
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },

    {
      // 이미지 처리 플러그인으로 이미지를 최적화합니다.
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },

    // 이미지 변환 플러그인으로 이미지 처리 기능을 제공합니다.
    `gatsby-transformer-sharp`,

    // Gatsby 이미지 플러그인으로 최적화된 이미지 로딩을 제공합니다.
    `gatsby-plugin-image`,
    {
      // Markdown 파일을 HTML로 변환합니다.
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // Markdown 텍스트를 더 스마트하게 처리합니다.
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            // 코드 블록에 구문 강조를 적용합니다.
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            // Markdown 이미지 태그를 최적화된 이미지로 변환합니다.
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            // 링크된 파일을 복사합니다.
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            // 외부 링크를 새로운 탭에서 열리도록 설정합니다.
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            // 캐노니컬 URL을 설정합니다.
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://seonghoho.github.io/',
              stripQueryString: true,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Noto+Sans+KR\:100,200,300,400,500,600,700,800,900`],
    //     display: 'swap',
    //   },
    // },

    // {
    //   // 폰트 적용
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     /* Font loading mode */
    //     mode: 'async',

    //     enableListener: true,
    //     preconnect: [
    //       `https://fonts.googleapis.com`,
    //       `https://fonts.gstatic.com`,
    //     ],
    //     web: [
    //       {
    //         name: `Noto Sans Korean`,
    //         file: `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap`,
    //       },
    //     ],
    //   },
    // },
  ],
}
