"use strict";(self.webpackChunkseonghoho=self.webpackChunkseonghoho||[]).push([[657],{5594:function(C,L,t){t.r(L),t.d(L,{default:function(){return M}});var a=t(2328),i=t(8060),l=t(644),d=t(6540),e=t(7437);const o=(0,l.A)("div",{target:"e1wrmfgi0"})({name:"f7ay7b",styles:"justify-content:center"});var n=()=>{const{0:C,1:L}=(0,d.useState)(0),{0:t,1:a}=(0,d.useState)(0),{0:i,1:l}=(0,d.useState)(0),n=[[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1],[1,0,1,1,0,1,1],[1,0,1,1,1,1,1],[1,1,1,0,0,0,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]],s=(C,L)=>{const t=n[parseInt(C)],a=document.querySelectorAll(`.digital-clock [data-position="${L}"] path`);console.log(a),a.forEach(((C,L)=>{const a=t[L];C.setAttribute("fill",a?"#463737":"#F1E5E5")}))};(0,d.useEffect)((()=>{s(C.toString().padStart(2,"0")[0],"hours-tens"),s(C.toString().padStart(2,"0")[1],"hours-ones"),s(t.toString().padStart(2,"0")[0],"minutes-tens"),s(t.toString().padStart(2,"0")[1],"minutes-ones"),s(i.toString().padStart(2,"0")[0],"seconds-tens"),s(i.toString().padStart(2,"0")[1],"seconds-ones")}),[C,t,i]),(0,d.useEffect)((()=>{const C=()=>{const C=new Date;L(C.getHours()),a(C.getMinutes()),l(C.getSeconds())};C();const t=setInterval(C,1e3);return()=>clearInterval(t)}),[]);const r=30*(C%12+t/60),f=6*t,M=6*i;return(0,e.Y)(o,null,(0,e.Y)("svg",{width:"450",height:"450",viewBox:"-20 0 400 400",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.Y)("g",{className:"live-clock",transform:"translate(0,0)",cursor:"pointer"},(0,e.Y)("circle",{cx:"180",cy:"180",r:"180",fill:"#FF7374"}),(0,e.Y)("circle",{cx:"180",cy:"180",r:"179",fill:"none",stroke:"black",strokeOpacity:"0.05",strokeWidth:"2"}),(0,e.Y)("circle",{cx:"180",cy:"180",r:"165",fill:"#FFFAFA",stroke:"#EA797A",strokeWidth:"2"}),(0,e.Y)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M133.715 36.5588C134.241 36.3894 134.531 35.8262 134.361 35.3011L131.857 27.5963C131.687 27.0711 131.122 26.7836 130.597 26.9543C130.072 27.125 129.784 27.6891 129.955 28.2144L132.459 35.9191C132.629 36.4425 133.191 36.7277 133.715 36.5588ZM147.682 31.7701C147.797 32.3084 148.326 32.6508 148.865 32.5377C149.405 32.4242 149.754 31.8944 149.639 31.3543L147.947 23.395C147.832 22.8548 147.301 22.5099 146.761 22.6247C146.221 22.7396 145.876 23.2706 145.991 23.8108L147.682 31.7701ZM163.253 29.2336C163.311 29.781 163.802 30.177 164.35 30.1205C164.899 30.0639 165.3 29.5735 165.242 29.0245L164.388 20.8965C164.33 20.3473 163.838 19.9488 163.289 20.0065C162.74 20.0643 162.341 20.5563 162.399 21.1056L163.253 29.2336ZM194.752 29.0239C194.694 29.5729 195.096 30.0633 195.645 30.1199C196.193 30.1764 196.684 29.7804 196.741 29.233L197.595 21.1073C197.653 20.5581 197.254 20.066 196.705 20.0083C196.156 19.9506 195.664 20.349 195.606 20.8983L194.752 29.0239ZM210.356 31.3531C210.241 31.8932 210.589 32.423 211.129 32.5365C211.668 32.6496 212.198 32.3072 212.312 31.7689L214.003 23.8116C214.118 23.2714 213.773 22.7404 213.233 22.6256C212.693 22.5108 212.162 22.8556 212.047 23.3958L210.356 31.3531ZM225.635 35.2995C225.464 35.8246 225.755 36.3879 226.28 36.5573C226.804 36.7261 227.367 36.4409 227.537 35.9176L230.039 28.2172C230.209 27.692 229.922 27.1278 229.397 26.9571C228.871 26.7865 228.307 27.0739 228.137 27.5992L225.635 35.2995ZM240.42 40.825C240.196 41.3293 240.426 41.9198 240.931 42.1432C241.434 42.366 242.023 42.1412 242.247 41.6385L245.526 34.275C245.75 33.7705 245.523 33.1794 245.019 32.9548C244.514 32.7301 243.923 32.957 243.699 33.4616L240.42 40.825ZM267.874 56.3422C267.55 56.7891 267.652 57.4149 268.1 57.7382C268.546 58.0601 269.169 57.9627 269.492 57.5177L274.184 51.0598C274.509 50.613 274.41 49.9876 273.963 49.663C273.516 49.3383 272.891 49.4374 272.566 49.8842L267.874 56.3422ZM280.253 66.1575C279.883 66.5683 279.92 67.2019 280.332 67.5701C280.742 67.9362 281.372 67.9042 281.739 67.4957L287.042 61.6066C287.411 61.1962 287.378 60.5639 286.968 60.1943C286.557 59.8248 285.925 59.8579 285.556 60.2683L280.253 66.1575ZM291.554 77.205C291.143 77.5753 291.114 78.2098 291.486 78.619C291.856 79.0252 292.485 79.0588 292.893 78.6913L298.726 73.4387C299.137 73.0691 299.17 72.4368 298.8 72.0264C298.431 71.616 297.799 71.5828 297.388 71.9524L291.554 77.205ZM301.659 89.3707C301.211 89.6961 301.116 90.3247 301.444 90.7705C301.769 91.2125 302.39 91.3113 302.834 90.9887L309.11 86.4289C309.557 86.1042 309.656 85.4789 309.332 85.0321C309.007 84.5853 308.382 84.4862 307.935 84.8108L301.659 89.3707ZM317.827 116.537C317.321 116.762 317.097 117.357 317.326 117.862C317.553 118.361 318.14 118.587 318.641 118.364L325.536 115.294C326.04 115.069 326.267 114.478 326.042 113.974C325.818 113.469 325.227 113.242 324.722 113.467L317.827 116.537ZM323.7 131.254C323.173 131.425 322.888 131.993 323.063 132.519C323.235 133.04 323.796 133.326 324.318 133.156L331.398 130.856C331.923 130.685 332.21 130.121 332.04 129.596C331.869 129.071 331.305 128.783 330.78 128.954L323.7 131.254ZM327.995 146.517C327.454 146.633 327.111 147.167 327.229 147.708C327.346 148.244 327.874 148.588 328.411 148.474L335.601 146.945C336.141 146.831 336.486 146.3 336.371 145.759C336.256 145.219 335.725 144.874 335.185 144.989L327.995 146.517ZM330.666 162.157C330.116 162.215 329.719 162.71 329.78 163.26C329.84 163.806 330.329 164.203 330.875 164.146L338.099 163.386C338.648 163.329 339.047 162.837 338.989 162.287C338.931 161.738 338.439 161.34 337.89 161.397L330.666 162.157ZM331.085 193.873C330.533 193.815 330.042 194.221 329.988 194.772C329.935 195.318 330.33 195.805 330.876 195.862L337.891 196.6C338.44 196.657 338.932 196.259 338.99 195.71C339.048 195.16 338.649 194.668 338.1 194.611L331.085 193.873ZM328.824 209.609C328.282 209.494 327.751 209.845 327.64 210.388C327.53 210.925 327.872 211.451 328.408 211.565L335.186 213.006C335.726 213.121 336.257 212.776 336.372 212.236C336.487 211.696 336.142 211.165 335.602 211.05L328.824 209.609ZM324.917 225.034C324.391 224.863 323.826 225.156 323.658 225.684C323.492 226.207 323.777 226.767 324.299 226.936L330.781 229.042C331.307 229.213 331.871 228.926 332.042 228.4C332.212 227.875 331.925 227.311 331.4 227.14L324.917 225.034ZM319.4 239.969C318.895 239.744 318.303 239.976 318.081 240.483C317.86 240.986 318.085 241.573 318.587 241.796L324.725 244.529C325.229 244.754 325.82 244.527 326.045 244.022C326.27 243.518 326.043 242.927 325.538 242.702L319.4 239.969ZM303.806 267.714C303.358 267.389 302.732 267.492 302.409 267.941C302.088 268.387 302.185 269.009 302.63 269.332L307.938 273.188C308.385 273.513 309.01 273.414 309.335 272.967C309.659 272.52 309.56 271.895 309.113 271.57L303.806 267.714ZM293.909 280.218C293.498 279.848 292.864 279.885 292.496 280.298C292.13 280.708 292.162 281.337 292.57 281.705L297.392 286.046C297.802 286.415 298.435 286.382 298.804 285.972C299.174 285.561 299.141 284.929 298.73 284.559L293.909 280.218ZM282.755 291.627C282.385 291.216 281.75 291.186 281.341 291.558C280.935 291.928 280.901 292.557 281.268 292.965L285.56 297.731C285.929 298.141 286.561 298.174 286.972 297.805C287.382 297.435 287.415 296.803 287.046 296.392L282.755 291.627ZM270.464 301.813C270.139 301.365 269.511 301.27 269.065 301.597C268.622 301.922 268.523 302.544 268.846 302.988L272.571 308.115C272.895 308.562 273.521 308.661 273.967 308.336C274.414 308.011 274.513 307.386 274.189 306.939L270.464 301.813ZM243.007 318.06C242.782 317.555 242.189 317.331 241.685 317.557C241.184 317.783 240.956 318.371 241.18 318.873L243.704 324.541C243.928 325.046 244.519 325.273 245.024 325.048C245.528 324.824 245.755 324.232 245.531 323.728L243.007 318.06ZM228.14 323.924C227.969 323.399 227.404 323.114 226.879 323.285C226.356 323.456 226.068 324.018 226.238 324.542L228.142 330.402C228.312 330.927 228.877 331.215 229.402 331.044C229.927 330.873 230.215 330.309 230.044 329.784L228.14 323.924ZM212.731 328.18C212.616 327.64 212.085 327.298 211.546 327.413C211.007 327.527 210.66 328.056 210.775 328.595L212.052 334.606C212.167 335.146 212.698 335.491 213.238 335.376C213.779 335.262 214.123 334.731 214.009 334.19L212.731 328.18ZM196.958 330.782C196.901 330.234 196.409 329.837 195.861 329.895C195.312 329.952 194.912 330.442 194.969 330.991L195.612 337.104C195.67 337.653 196.162 338.051 196.711 337.994C197.26 337.936 197.659 337.444 197.601 336.895L196.958 330.782ZM165.025 330.99C165.083 330.442 164.682 329.952 164.134 329.894C163.586 329.837 163.094 330.233 163.036 330.781L162.393 336.897C162.336 337.446 162.734 337.938 163.283 337.996C163.833 338.053 164.325 337.655 164.382 337.106L165.025 330.99ZM149.22 328.594C149.334 328.055 148.988 327.526 148.449 327.411C147.91 327.296 147.378 327.639 147.264 328.178L145.985 334.191C145.871 334.732 146.215 335.263 146.756 335.377C147.296 335.492 147.827 335.147 147.942 334.607L149.22 328.594ZM133.758 324.54C133.928 324.017 133.639 323.455 133.116 323.284C132.591 323.112 132.026 323.397 131.855 323.922L129.95 329.787C129.779 330.312 130.067 330.876 130.592 331.047C131.117 331.217 131.681 330.93 131.852 330.405L133.758 324.54ZM118.815 318.871C119.039 318.369 118.812 317.781 118.31 317.555C117.806 317.329 117.213 317.553 116.988 318.058L114.463 323.73C114.238 324.235 114.465 324.826 114.969 325.051C115.474 325.275 116.065 325.048 116.29 324.544L118.815 318.871ZM91.1501 302.985C91.473 302.54 91.3736 301.918 90.9307 301.593C90.4848 301.266 89.8572 301.362 89.5321 301.809L85.8042 306.94C85.4795 307.387 85.5786 308.012 86.0254 308.337C86.4722 308.662 87.0976 308.563 87.4222 308.116L91.1501 302.985ZM78.7287 292.962C79.0962 292.554 79.0625 291.925 78.656 291.555C78.2468 291.183 77.6125 291.213 77.2424 291.624L72.9468 296.394C72.5773 296.805 72.6104 297.437 73.0209 297.807C73.4313 298.176 74.0636 298.143 74.4331 297.733L78.7287 292.962ZM67.4271 281.701C67.8354 281.334 67.8675 280.705 67.5019 280.295C67.1337 279.882 66.4999 279.845 66.0889 280.215L61.2622 284.561C60.8518 284.931 60.8186 285.563 61.1882 285.973C61.5577 286.384 62.19 286.417 62.6004 286.047L67.4271 281.701ZM57.3688 269.33C57.8133 269.007 57.911 268.385 57.5901 267.939C57.2672 267.49 56.6406 267.387 56.1932 267.712L50.8786 271.573C50.4318 271.898 50.3328 272.523 50.6574 272.97C50.982 273.417 51.6074 273.516 52.0542 273.191L57.3688 269.33ZM41.4122 241.794C41.9138 241.571 42.1388 240.983 41.9184 240.48C41.6961 239.974 41.1043 239.742 40.5987 239.967L34.4533 242.703C33.9488 242.928 33.7219 243.519 33.9465 244.023C34.1712 244.528 34.7623 244.755 35.2668 244.53L41.4122 241.794ZM35.7003 226.934C36.2221 226.764 36.5074 226.204 36.3413 225.682C36.1737 225.154 35.609 224.861 35.0823 225.032L28.5922 227.14C28.0669 227.311 27.7795 227.875 27.9502 228.401C28.1208 228.926 28.685 229.213 29.2102 229.043L35.7003 226.934ZM31.5917 211.565C32.128 211.451 32.4703 210.924 32.3604 210.387C32.2493 209.844 31.718 209.493 31.1759 209.608L24.3896 211.051C23.8494 211.166 23.5045 211.697 23.6194 212.237C23.7342 212.777 24.2652 213.122 24.8054 213.007L31.5917 211.565ZM29.1245 195.861C29.6697 195.804 30.0651 195.316 30.0121 194.771C29.9585 194.219 29.4668 193.814 28.9155 193.872L21.8919 194.61C21.3426 194.668 20.9442 195.16 21.0019 195.709C21.0596 196.258 21.5517 196.657 22.1009 196.599L29.1245 195.861ZM29.1251 164.147C29.6712 164.205 30.16 163.807 30.2204 163.262C30.2812 162.712 29.8845 162.216 29.3342 162.158L22.1017 161.398C21.5524 161.34 21.0604 161.739 21.0026 162.288C20.9449 162.837 21.3434 163.329 21.8926 163.387L29.1251 164.147ZM31.5893 148.474C32.1263 148.589 32.6538 148.245 32.771 147.709C32.8891 147.168 32.5464 146.633 32.0051 146.518L24.8067 144.988C24.2665 144.873 23.7354 145.218 23.6206 145.758C23.5058 146.299 23.8506 146.83 24.3908 146.944L31.5893 148.474ZM35.6819 133.159C36.2038 133.328 36.7641 133.042 36.9369 132.521C37.1113 131.996 36.8265 131.428 36.2999 131.257L29.212 128.954C28.6867 128.783 28.1226 129.07 27.9519 129.596C27.7812 130.121 28.0687 130.685 28.5939 130.856L35.6819 133.159ZM41.3584 118.366C41.8596 118.589 42.4465 118.364 42.673 117.864C42.9017 117.36 42.6779 116.765 42.1719 116.539L35.2693 113.466C34.7648 113.241 34.1737 113.468 33.949 113.973C33.7244 114.477 33.9513 115.068 34.4558 115.293L41.3584 118.366ZM57.1645 90.9907C57.6085 91.3133 58.2297 91.2145 58.555 90.7725C58.8833 90.3267 58.788 89.6981 58.3401 89.3727L52.0574 84.8081C51.6106 84.4835 50.9853 84.5825 50.6606 85.0293C50.336 85.4761 50.4351 86.1015 50.8819 86.4261L57.1645 90.9907ZM67.1048 78.6943C67.5129 79.0618 68.1415 79.0282 68.5111 78.622C68.8834 78.2128 68.8542 77.5783 68.443 77.208L62.6042 71.9507C62.1938 71.5812 61.5615 71.6143 61.1919 72.0247C60.8224 72.4352 60.8555 73.0675 61.2659 73.437L67.1048 78.6943ZM78.2577 67.4987C78.6254 67.9071 79.2547 67.9391 79.6646 67.5731C80.077 67.2048 80.1139 66.5713 79.7439 66.1604L74.4371 60.2666C74.0676 59.8562 73.4353 59.823 73.0248 60.1926C72.6144 60.5621 72.5813 61.1944 72.9508 61.6048L78.2577 67.4987ZM90.5034 57.5209C90.8267 57.9659 91.4497 58.0633 91.8956 57.7414C92.3436 57.4181 92.4461 56.7923 92.1214 56.3454L87.4264 49.8833C87.1018 49.4365 86.4764 49.3374 86.0296 49.662C85.5828 49.9867 85.4838 50.612 85.8084 51.0588L90.5034 57.5209ZM117.748 41.6406C117.972 42.1434 118.561 42.3681 119.065 42.1454C119.57 41.922 119.8 41.3315 119.575 40.8272L116.295 33.4592C116.07 32.9547 115.479 32.7278 114.974 32.9524C114.47 33.1771 114.243 33.7682 114.468 34.2727L117.748 41.6406Z",fill:"#FF7374"}),(0,e.Y)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.6264 108.37C58.4639 106.942 57.9986 105.098 56.5655 104.271L46.3973 98.3999C44.9624 97.5715 43.1276 98.0631 42.2992 99.498C41.4708 100.933 41.9624 102.768 43.3973 103.596L53.5655 109.467C54.9844 110.286 56.7974 109.783 57.6264 108.37ZM105.454 55.8839C106.276 57.3073 108.103 57.7775 109.528 56.9594C110.959 56.1383 111.475 54.3125 110.651 52.8839L104.597 42.3987C103.768 40.9638 101.934 40.4722 100.499 41.3006C99.0639 42.129 98.5723 43.9638 99.4007 45.3987L105.454 55.8839ZM177 35.2637C177 36.9105 178.353 38.2328 180 38.2328C181.647 38.2328 183 36.9105 183 35.2637V23C183 21.3431 181.657 20 180 20C178.343 20 177 21.3431 177 23V35.2637ZM249.345 52.8815C248.521 54.3101 249.037 56.1359 250.468 56.957C251.893 57.7751 253.72 57.3048 254.542 55.8815L260.593 45.4008C261.421 43.9659 260.929 42.1312 259.494 41.3027C258.06 40.4743 256.225 40.9659 255.396 42.4008L249.345 52.8815ZM303.433 104.268C302 105.096 301.535 106.94 302.372 108.368C303.201 109.781 305.014 110.284 306.433 109.464L316.595 103.598C318.03 102.769 318.521 100.935 317.693 99.4997C316.864 98.0648 315.03 97.5732 313.595 98.4016L303.433 104.268ZM325.739 175.998C323.54 175.998 321.78 177.813 321.78 180.013C321.78 181.105 322.66 181.998 323.752 181.998H335.996C337.653 181.998 338.996 180.655 338.996 178.998C338.996 177.341 337.653 175.998 335.996 175.998H325.739ZM307.313 249.04C305.882 248.214 304.053 248.733 303.234 250.169C302.421 251.594 302.893 253.416 304.313 254.236L313.598 259.596C315.033 260.425 316.867 259.933 317.696 258.498C318.524 257.063 318.033 255.229 316.598 254.4L307.313 249.04ZM255.422 303.635C254.596 302.204 252.756 301.738 251.329 302.57C249.911 303.397 249.405 305.213 250.225 306.635L255.401 315.599C256.229 317.034 258.064 317.526 259.499 316.697C260.934 315.869 261.426 314.034 260.597 312.599L255.422 303.635ZM183 324.762C183 323.115 181.647 321.793 180 321.793C178.353 321.793 177 323.115 177 324.762V335C177 336.657 178.343 338 180 338C181.657 338 183 336.657 183 335V324.762ZM109.77 306.632C110.591 305.211 110.085 303.395 108.667 302.567C107.24 301.735 105.4 302.202 104.574 303.632L99.396 312.601C98.5676 314.036 99.0592 315.871 100.494 316.699C101.929 317.528 103.764 317.036 104.592 315.601L109.77 306.632ZM55.6855 254.234C57.1063 253.414 57.5778 251.592 56.7649 250.167C55.946 248.731 54.1168 248.211 52.6855 249.038L43.3943 254.402C41.9594 255.23 41.4678 257.065 42.2962 258.5C43.1246 259.935 44.9594 260.427 46.3943 259.598L55.6855 254.234ZM36.2484 181.998C37.3404 181.998 38.2201 181.105 38.2201 180.013C38.2201 177.813 36.4599 175.998 34.2607 175.998H23.9956C22.3388 175.998 20.9956 177.341 20.9956 178.998C20.9956 180.655 22.3388 181.998 23.9956 181.998H36.2484Z",fill:"#FF7374"}),(0,e.Y)("text",{x:"241",y:"81",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"1"),(0,e.Y)("text",{x:"280.5",y:"129",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"2"),(0,e.Y)("text",{x:"300",y:"190",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"3"),(0,e.Y)("text",{x:"280.5",y:"255",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"4"),(0,e.Y)("text",{x:"239",y:"300",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"5"),(0,e.Y)("text",{x:"171",y:"316",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"6"),(0,e.Y)("text",{x:"106",y:"300",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"7"),(0,e.Y)("text",{x:"67",y:"255",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"8"),(0,e.Y)("text",{x:"43",y:"190",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"9"),(0,e.Y)("text",{x:"60",y:"129",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"10"),(0,e.Y)("text",{x:"101",y:"81",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"11"),(0,e.Y)("text",{x:"165",y:"62",fill:"#463737",fontWeight:"bold",fontSize:"26px"},"12"),(0,e.Y)("g",{className:"hour-handle",transform:`rotate(${r}, 180, 180)`},(0,e.Y)("path",{d:"M180 107V179",stroke:"black",strokeWidth:"20",strokeLinecap:"round"})),(0,e.Y)("g",{className:"minute-handle",transform:`rotate(${f}, 180, 180)`},(0,e.Y)("path",{d:"M180 67V179",stroke:"black",strokeWidth:"10",strokeLinecap:"round"})),(0,e.Y)("g",{className:"second-handle",transform:`rotate(${M}, 180, 180)`},(0,e.Y)("path",{d:"M180 46V179",stroke:"#FF4C4D",strokeWidth:"3",strokeLinecap:"round"})),(0,e.Y)("circle",{cx:"180",cy:"179",r:"6",fill:"#FF7374"}))),(0,e.Y)("svg",{width:"450",height:"200",viewBox:"0 0 400 200",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.Y)("g",{className:"digital-clock",opacity:"1"},(0,e.Y)("rect",{x:"4",y:"4",width:"392",height:"120",rx:"20",fill:"#FFFAFA"}),(0,e.Y)("rect",{x:"4",y:"4",width:"392",height:"120",rx:"20",fill:"none",stroke:"#FF7374",strokeWidth:"8"}),(0,e.Y)("defs",null,(0,e.Y)("g",{id:"digital-number"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"}))),(0,e.Y)("g",{"data-position":"hours-tens"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("g",{"data-position":"hours-ones",transform:"translate(48,0)"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("g",{"data-position":"minutes-tens",transform:"translate(114,0)"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("g",{"data-position":"minutes-ones",transform:"translate(162,0)"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("g",{"data-position":"seconds-tens",transform:"translate(228,0)"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("g",{"data-position":"seconds-ones",transform:"translate(276,0)"},(0,e.Y)("path",{"data-id":"0",d:"M71.2986 33.5735C71.1114 33.8408 70.8057 34 70.4793 34L53.5207 34C53.1943 34 52.8886  33.8408 52.7014 33.5735L47.1014 25.5735C46.6375 24.9107 47.1116 24 47.9207 24H51L73 24L76.0793  24C76.8884 24 77.3625 24.9107 76.8986 25.5735L71.2986 33.5735Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"1",d:"M81.7619 60.2801C81.9156 60.0993 82 59.8697 82 59.6324L82 28.277C82 28.0957 81.9507  27.9179 81.8575 27.7625L80.3599 25.2665C79.9959 24.6599 79.1343 24.6127 78.7063 25.176L72.2038  33.7318C72.0716 33.9058 72 34.1183 72 34.3369L72 58.1891C72 58.4911 72.1365 58.777 72.3715 58.9669L77.8413  63.3869C78.2633 63.7279 78.8803 63.6702 79.2318 63.2568L81.7619 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"2",d:"M81.7619 67.7199C81.9156 67.9007 82 68.1303 82 68.3676L82 99.723C82 99.9043  81.9507 100.082 81.8575 100.238L80.3599 102.733C79.9959 103.34 79.1343 103.387 78.7063  102.824L72.2038 94.2682C72.0716 94.0942 72 93.8817 72 93.6631L72 69.8109C72 69.5089  72.1365 69.223 72.3715 69.0331L77.8413 64.6131C78.2633 64.2721 78.8803 64.3298 79.2318  64.7432L81.7619 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"3",d:"M71.2986 94.4265C71.1114 94.1592 70.8057 94 70.4793 94L53.5207 94C53.1943 94  52.8886 94.1592 52.7014 94.4265L47.1014 102.427C46.6375 103.089 47.1116 104 47.9207 104H51L73  104L76.0793 104C76.8884 104 77.3625 103.089 76.8986 102.427L71.2986 94.4265Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"4",d:"M42.2381 67.7199C42.0844 67.9007 42 68.1303 42 68.3676L42 99.723C42 99.9043 42.0493  100.082 42.1425 100.238L43.6401 102.733C44.0041 103.34 44.8657 103.387 45.2937 102.824L51.7962  94.2682C51.9284 94.0942 52 93.8817 52 93.6631L52 69.8109C52 69.5089 51.8635 69.223 51.6285  69.0331L46.1587 64.6131C45.7367 64.2721 45.1197 64.3298 44.7682 64.7432L42.2381 67.7199Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"5",d:"M42.2381 60.2801C42.0844 60.0993 42 59.8697 42 59.6324L42 28.277C42 28.0957 42.0493 27.9179  42.1425 27.7625L43.6401 25.2665C44.0041 24.6599 44.8657 24.6127 45.2937 25.176L51.7962 33.7318C51.9284  33.9058 52 34.1183 52 34.3369L52 58.1891C52 58.4911 51.8635 58.777 51.6285 58.9669L46.1587 63.3869C45.7367  63.7279 45.1197 63.6702 44.7682 63.2568L42.2381 60.2801Z",fill:"#F1E5E5"}),(0,e.Y)("path",{"data-id":"6",d:"M71.2781 68.7682C71.0984 68.918 70.8719 69 70.638 69L53.362 69C53.1281 69 52.9016  68.918 52.7219 68.7682L47.9219 64.7682C47.4421 64.3684 47.4421 63.6316 47.9219 63.2318L52.7219  59.2318C52.9016 59.082 53.1281 59 53.3621 59L70.638 59C70.8719 59 71.0984 59.082 71.2781  59.2318L76.0781 63.2318C76.5579 63.6316 76.5579 64.3684 76.0781 64.7682L71.2781 68.7682Z",fill:"#F1E5E5"})),(0,e.Y)("circle",{cx:"143",cy:"44",r:"5",fill:"#463737"}),(0,e.Y)("circle",{cx:"143",cy:"84",r:"5",fill:"#463737"}),(0,e.Y)("circle",{cx:"257",cy:"44",r:"5",fill:"#463737"}),(0,e.Y)("circle",{cx:"257",cy:"84",r:"5",fill:"#463737"}))))};const s=(0,l.A)("div",{target:"e17m4cuz1"})({name:"1rli9y6",styles:"border:5px solid #d9d9d9;box-shadow:5px 10px 10px #d9d9d9;width:450px;padding:20px;display:flex;justify-content:center;border-radius:10%;scale:80%"}),r=(0,l.A)("div",{target:"e17m4cuz0"})({name:"1v06qk3",styles:"margin:20px auto;width:1024px;display:flex;flex-direction:row;justify-content:space-between;@media (max-width: 1050px){width:100%;margin:0;padding:0 20px;}@media (max-width: 768px){flex-direction:column;align-items:center;}"});var f=()=>(0,e.Y)(r,null,(0,e.Y)(s,null,(0,e.Y)(n,null)));var M=C=>{let{data:{site:{siteMetadata:{title:L,description:t,siteUrl:l}},file:{publicURL:d}}}=C;return(0,e.Y)("div",null,(0,e.Y)(a.A,null),(0,e.Y)(i.A,{title:L,description:t,url:l,image:d},(0,e.Y)(f,null)))}}}]);
//# sourceMappingURL=component---src-pages-exercise-tsx-de3a7ed63ba18e8b7f98.js.map