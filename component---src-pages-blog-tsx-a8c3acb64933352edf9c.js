"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[663],{454:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(i){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var o=i(a[0]);o!==a[0]&&(r[a[0]]=o)}a=n.exec(e)}r["%C2"]="�";for(var A=Object.keys(r),s=0;s<A.length;s++){var c=A[s];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},3055:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),i=0;i<n.length;i++){var o=n[i],A=e[o];(a?-1!==t.indexOf(o):t(o,A,e))&&(r[o]=A)}return r}},9894:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(6540),a=r(644),i=r(4794),o=r(7437);const A=(0,a.A)("div",{target:"e1kn8q5k5"})({name:"1dohuya",styles:"margin:20px auto;width:1024px;@media (max-width: 1050px){width:100%;padding:0 20px;}"}),s=(0,a.A)("div",{target:"e1kn8q5k4"})({name:"14cs221",styles:"display:flex;flex-wrap:wrap;width:100%;@media (max-width: 800px){}"}),c=(0,a.A)((e=>{let{active:t,...r}=e;return(0,o.Y)(i.Link,r)}),{target:"e1kn8q5k3"})("margin:5px 5px;padding:5px 10px;border-radius:10px;font-size:",(e=>{let{active:t}=e;return t?"20px":"18px"}),";font-weight:",(e=>{let{active:t}=e;return t?"600":"400"}),";cursor:pointer;background-color:",(e=>{let{active:t}=e;return t?"#8c99ff":"#e2e8f0"}),";color:",(e=>{let{active:t}=e;return t?"#fff":"#333"}),";&:last-of-type{margin-right:0;}&:hover,active{background-color:#8c99ff;color:#fff;transition:3ms;}@media (max-width: 800px){font-size:15px;}"),l=(0,a.A)("div",{target:"e1kn8q5k2"})({name:"pp5evk",styles:"display:flex;flex-direction:row;justify-content:left;align-items:center"}),d=(0,a.A)("div",{target:"e1kn8q5k1"})({name:"yblj23",styles:"display:flex;margin:20px 0;font-size:36px;font-weight:600;@media (max-width: 800px){}"}),p=(0,a.A)("div",{target:"e1kn8q5k0"})({name:"1v478zz",styles:"color:#246bff;font-size:20px;margin:10px;font-weight:500;align-items:center"});var u=function(e){let{selectedCategory:t,categoryList:r}=e;const n=r[t]||0;return(0,o.Y)(A,null,(0,o.Y)(s,null,Object.entries(r).map((e=>{let[r]=e;return(0,o.Y)(c,{to:`/blog/?category=${r}`,active:r===t,key:r},r)}))),(0,o.Y)(l,null,(0,o.Y)(d,null,t),(0,o.Y)(p,null,n,"posts")))},f=r(8168),g=r(2532);const m=(0,a.A)("div",{target:"e1pdualn8"})({name:"d7xq4r",styles:"flex:1;display:flex;flex-direction:column;padding:20px 15px 30px"}),x=(0,a.A)(i.Link,{target:"e1pdualn7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),y=(0,a.A)("div",{target:"e1pdualn6"})({name:"1nt2gbz",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:1;-webkit-box-orient:vertical;font-size:20px;font-weight:600"}),E=(0,a.A)("div",{target:"e1pdualn5"})({name:"pp5evk",styles:"display:flex;flex-direction:row;justify-content:left;align-items:center"}),b=(0,a.A)("div",{target:"e1pdualn4"})({name:"tdn89k",styles:"font-size:14px;font-weight:400;margin-right:10px;@media (max-width: 500px){font-size:12px;}"}),h=(0,a.A)("div",{target:"e1pdualn3"})({name:"1sll9v6",styles:"display:flex;flex-wrap:wrap;margin:10px -5px"}),w=(0,a.A)("div",{target:"e1pdualn2"})({name:"1dpa3f0",styles:"margin:0 4px;padding:3px 6px;border-radius:3px;background:#555;font-size:12px;font-weight:600;color:white;@media (max-width: 500px){font-size:10px;}"}),B=(0,a.A)("div",{target:"e1pdualn1"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),Q=(0,a.A)(g.G,{target:"e1pdualn0"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"});var v=function(e){let{title:t,date:n,categories:a,summary:i,thumbnail:A,link:s}=e;const c=null!=A&&A.childImageSharp?(0,g.c)(A.childImageSharp.gatsbyImageData):null;return(0,o.Y)(x,{to:s},c?(0,o.Y)(Q,{image:c,alt:"Post Item Image"}):(0,o.Y)(g.S,{src:"../../../contents/SampleImg.jpg",alt:"Sample Image",height:200,__imageData:r(6583)}),(0,o.Y)(m,null,(0,o.Y)(y,null,t),(0,o.Y)(E,null,(0,o.Y)(b,null,n," | "),(0,o.Y)(h,null,a.map((e=>(0,o.Y)(w,{key:e},e))))),(0,o.Y)(B,null,i)))};var k=function(e,t){const r=(0,n.useRef)(null),a=(0,n.useRef)(null),{0:i,1:o}=(0,n.useState)(1),A=(0,n.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e,t]);return(0,n.useEffect)((()=>{a.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(o((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((()=>o(1)),[e]),(0,n.useEffect)((()=>{10*i>=A.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,articleList:A.slice(0,10*i)}};const I=(0,a.A)("div",{target:"e184huww0"})({name:"myg93w",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:25px;width:1024px;margin:0 auto;padding:auto 0;@media (max-width: 1050px){width:100%;padding:0 20px;}@media (max-width: 700px){grid-template-columns:1fr;}"});var j=function(e){let{selectedCategory:t,articles:r}=e;const a=(0,n.useMemo)((()=>r.filter((e=>{let{node:{frontmatter:{categories:r}}}=e;return"All"===t||r.includes(t)}))),[t]),{containerRef:i,articleList:A}=k(t,a);return(0,o.Y)(I,{ref:i},A.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,o.Y)(v,(0,f.A)({},n,{link:r,key:t}))})))},C=r(6663),R=r(8060),S=r(1924);var Y=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:a,siteUrl:i}},allMarkdownRemark:{edges:A},file:{publicURL:s}}}=e;const c=C.parse(t),l="string"==typeof c.category&&c.category?c.category:"All",d=(0,n.useMemo)((()=>A.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,o.Y)("div",null,(0,o.Y)(S.A,null),(0,o.Y)(R.A,{title:r,description:a,url:i,image:s},(0,o.Y)(u,{selectedCategory:l,categoryList:d}),(0,o.Y)(j,{selectedCategory:l,articles:A})))}},6663:function(e,t,r){const n=r(4280),a=r(454),i=r(528),o=r(3055);function A(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function c(e,t){return t.decode?a(e):e}function l(e){return Array.isArray(e)?e.sort():"object"==typeof e?l(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){A((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!a&&c(r,e).includes(e.arrayFormatSeparator);r=i?c(r,e):r;const o=a||i?r.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===r?r:c(r,e);n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,o]=i(t.decode?a.replace(/\+/g," "):a,"=");o=void 0===o?null:["comma","separator"].includes(t.arrayFormat)?o:c(o,t),r(c(e,t),o,n)}for(const a of Object.keys(n)){const e=n[a];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=u(e[r],t);else n[a]=u(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=l(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";A((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[",a,"]"].join("")]:[...r,[s(t,e),"[",s(a,e),"]=",s(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[s(t,e),"=",s(n,e)].join("")]:[[r,s(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,s(t,e)]:[...r,[s(t,e),"=",s(n,e)].join("")]}}(t),a={};for(const o of Object.keys(e))r(o)||(a[o]=e[o]);const i=Object.keys(a);return!1!==t.sort&&i.sort(t.sort),i.map((r=>{const a=e[r];return void 0===a?"":null===a?s(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):s(r,t)+"="+s(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=i(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:c(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=d(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),o=Object.assign(i,e.query);let A=t.stringify(o,r);A&&(A=`?${A}`);let c=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${s(e.fragmentIdentifier,r)}`),`${n}${A}${c}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:i,fragmentIdentifier:A}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:o(i,r),fragmentIdentifier:A},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},528:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},4280:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},6583:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAcIBf/EABcBAAMBAAAAAAAAAAAAAAAAAAMFBgT/2gAMAwEAAhADEAAAAcIznTsnBa5ycU2h6dwgD2ZjRO//xAAbEAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//aAAgBAQABBQJbAMEx1zUGrmuyl3Fv5relku+yxL089A6UTd0Yse//xAAeEQACAQQDAQAAAAAAAAAAAAABAgMEBREhABITMv/aAAgBAwEBPwE2u2QW5pZqOd0qaKkaCri7DzuHnM0ymZxJH5AeLTQrh8spQr8k9cnB1nhmmdSjSysuPlpGK62NE40Tw8//xAAgEQACAgIABwAAAAAAAAAAAAABAhESAwQAEBMUIzM0/9oACAECAQE/AV2NnuKXT25vGafNOIY2qCrhrdUIxmYNgQLATxA5f//EACgQAAICAQIEBQUAAAAAAAAAAAIDAQQREiEABRMxBiIjMlEQFBZhcf/aAAgBAQAGPwL83DmCCp12IC5QJTRthD7Cq0MrtjWhsanD5WdIhjMxrnEcLxJvqtrDYSYCGhtRvpg8oFjNLfuAYrRqzIQLdteInbGJxMT3j9Tnhvg9Yla5hza3ChIcgqnAWq1pcPsN0VoaYJNiU9WWEEeyO8Xa/RaldWAFRsys3V6YpRy9QCRaekAgbPLmJabTmZKRiGbx7p+Z/u+e+c8OTKqKwsFqf0KSa0sL5Iq8LKZntO+8bduAA6nLZ9CcFFJYMHRMrjDF6DzgY80zJTO+fp//xAAdEAEBAAIBBQAAAAAAAAAAAAABEQBBMRAhUWHR/9oACAEBAAE/IXIGCoatCMJRgyLawRRsqyyCGxTSmIaANifXpZ7CWDZJPg9LDEbhKgDL+auCGg7lUKpDCqrOcYZYJWBO4BPJ6YF438xWlRrltc5qqqqq+8//2gAMAwEAAgADAAAAEOQPPf/EAB0RAQABBAMBAAAAAAAAAAAAAAERACExQXGRobH/2gAIAQMBAT8QQEEYGFHTBkhtERWSBRxIG3T50stxWYSC1CEIsql1rJ5ftf/EAB4RAQEAAQMFAAAAAAAAAAAAAAERIQAQYTFRcZHR/9oACAECAQE/EMmSZVKujUNAGl2kFMoXPj6+udIIgCAiBRQqPML3m3//xAAYEAEBAQEBAAAAAAAAAAAAAAABESEAMf/aAAgBAQABPxAWg+9uVVHdUQ0K+rwqplIPbuq8XwvDgJQxK56cSvNhjDN3GE5admMeIo+7G5EtxMdg2h0eFUTm0mC9B6LbDVrGaxERySjFjSRqQDAqqVW1V9VVdVd7/9k="},"images":{"fallback":{"src":"/static/8636413fdc0f52d86bccd64be9d4e0d9/839ae/SampleImg.jpg","srcSet":"/static/8636413fdc0f52d86bccd64be9d4e0d9/2fed4/SampleImg.jpg 50w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/93e3f/SampleImg.jpg 100w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/839ae/SampleImg.jpg 200w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/10998/SampleImg.jpg 400w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/8636413fdc0f52d86bccd64be9d4e0d9/9afd2/SampleImg.webp 50w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/e64f1/SampleImg.webp 100w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/8b00d/SampleImg.webp 200w,\\n/static/8636413fdc0f52d86bccd64be9d4e0d9/9c0a1/SampleImg.webp 400w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-a8c3acb64933352edf9c.js.map