import React from 'react';

const Logo = () => {
  return (
    <svg
      width='225'
      height='88'
      viewBox='0 0 225 88'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='166.5'
        cy='51.5'
        r='36.5'
        fill='#898989'
        fill-opacity='0.65'
      />
      <path
        d='M15.2461 55.0254L16.6074 56.0547L16.2754 56.752C15.4564 58.39 14.3717 59.696 13.0215 60.6699C11.6934 61.6217 10.2324 62.0977 8.63867 62.0977C8.17383 62.0977 7.68685 62.0534 7.17773 61.9648C6.69076 61.8542 6.20378 61.6992 5.7168 61.5V86.668L2.33008 87C2.06445 83.2591 1.83203 79.2194 1.63281 74.8809C1.54427 73.0215 1.45573 71.0072 1.36719 68.8379C1.30078 66.6686 1.23438 64.3887 1.16797 61.998C1.10156 59.5853 1.05729 57.084 1.03516 54.4941C0.990885 51.8822 0.96875 49.2259 0.96875 46.5254C0.96875 42.2754 1.20117 38.5234 1.66602 35.2695C2.13086 32.0156 2.75065 29.2819 3.52539 27.0684C4.32227 24.8548 5.22982 23.1836 6.24805 22.0547C7.26628 20.9258 8.33984 20.3613 9.46875 20.3613C9.88932 20.3613 10.2878 20.4388 10.6641 20.5938C11.0404 20.7266 11.3613 20.9479 11.627 21.2578C11.9147 21.5677 12.1361 21.9883 12.291 22.5195C12.446 23.0508 12.5234 23.6927 12.5234 24.4453C12.5234 26.349 12.3021 28.4518 11.8594 30.7539C11.4167 33.0339 10.8522 35.347 10.166 37.6934C9.50195 40.0397 8.77148 42.3418 7.97461 44.5996C7.17773 46.8353 6.42513 48.8607 5.7168 50.6758V58.1133C5.91602 58.3789 6.14844 58.6113 6.41406 58.8105C6.70182 59.0098 7.00065 59.1758 7.31055 59.3086C7.64258 59.4193 7.97461 59.5078 8.30664 59.5742C8.63867 59.6406 8.9375 59.6738 9.20312 59.6738C10.3542 59.6738 11.4167 59.375 12.3906 58.7773C13.3646 58.1797 14.2057 57.1615 14.9141 55.7227L15.2461 55.0254ZM5.7168 46.3926C6.27018 44.821 6.79036 43.1829 7.27734 41.4785C7.76432 39.7741 8.19596 38.0586 8.57227 36.332C8.94857 34.5833 9.2474 32.8457 9.46875 31.1191C9.6901 29.3926 9.80078 27.7324 9.80078 26.1387C9.80078 25.1204 9.70117 24.3014 9.50195 23.6816C9.30273 23.0618 8.92643 22.752 8.37305 22.752C7.88607 22.752 7.46549 23.25 7.11133 24.2461C6.7793 25.2422 6.5026 26.5924 6.28125 28.2969C6.08203 29.9792 5.93815 31.9603 5.84961 34.2402C5.76107 36.498 5.7168 38.8997 5.7168 41.4453V46.3926ZM35.3672 61.7656C35.3672 63.0273 35.4779 64.0898 35.6992 64.9531C35.9206 65.8164 36.3079 66.248 36.8613 66.248C37.1934 66.248 37.5475 66.0931 37.9238 65.7832C38.3223 65.4512 38.776 64.9199 39.2852 64.1895C39.7943 63.459 40.3698 62.5182 41.0117 61.3672C41.6758 60.194 42.4284 58.7663 43.2695 57.084L44.2656 55.0254L45.627 56.0547L44.6309 58.1133C43.7012 59.9727 42.8268 61.6439 42.0078 63.127C41.2109 64.5879 40.4473 65.8275 39.7168 66.8457C38.9863 67.8639 38.2669 68.6497 37.5586 69.2031C36.8724 69.7344 36.1862 70 35.5 70C34.7695 70 34.1497 69.8008 33.6406 69.4023C33.1536 69.0039 32.7441 68.4616 32.4121 67.7754C32.0801 67.0671 31.8255 66.2591 31.6484 65.3516C31.4714 64.4219 31.3496 63.4368 31.2832 62.3965C30.752 63.459 30.1654 64.4551 29.5234 65.3848C28.8815 66.2923 28.2064 67.0892 27.498 67.7754C26.8118 68.4616 26.0924 69.0039 25.3398 69.4023C24.5872 69.8008 23.8346 70 23.082 70C21.9753 70 20.9017 69.7676 19.8613 69.3027C18.821 68.8379 17.8913 68.1296 17.0723 67.1777C16.2754 66.2259 15.6335 65.0306 15.1465 63.5918C14.6595 62.1309 14.416 60.4154 14.416 58.4453C14.416 56.1432 14.7148 54.0404 15.3125 52.1367C15.9102 50.2109 16.7181 48.5618 17.7363 47.1895C18.7546 45.7949 19.9277 44.7214 21.2559 43.9688C22.584 43.194 23.9785 42.8066 25.4395 42.8066C26.3249 42.8066 27.1439 43.0059 27.8965 43.4043C28.6491 43.8027 29.3021 44.2897 29.8555 44.8652C30.431 45.4186 30.9069 46.0163 31.2832 46.6582C31.6595 47.278 31.9141 47.8092 32.0469 48.252L32.4453 45.0312C32.4896 44.6107 32.6888 44.2565 33.043 43.9688C33.4193 43.681 33.8288 43.4596 34.2715 43.3047C34.7142 43.1276 35.1458 43.0059 35.5664 42.9395C35.987 42.8509 36.2858 42.8066 36.4629 42.8066C36.7285 42.8066 36.9056 42.8509 36.9941 42.9395C37.0827 43.028 37.127 43.2051 37.127 43.4707C37.127 43.8027 37.0273 44.4779 36.8281 45.4961C36.651 46.4922 36.4518 47.776 36.2305 49.3477C36.0312 50.8971 35.832 52.7233 35.6328 54.8262C35.4557 56.929 35.3672 59.2422 35.3672 61.7656ZM31.7148 53C31.7148 51.9818 31.5599 50.9857 31.25 50.0117C30.9401 49.0156 30.5195 48.1413 29.9883 47.3887C29.457 46.6139 28.8372 45.9941 28.1289 45.5293C27.4427 45.0645 26.7122 44.832 25.9375 44.832C24.9857 44.832 24.0892 45.1087 23.248 45.6621C22.429 46.1934 21.7096 46.957 21.0898 47.9531C20.4922 48.9271 20.0163 50.1113 19.6621 51.5059C19.3079 52.8783 19.1309 54.3945 19.1309 56.0547C19.1309 59.375 19.651 61.9095 20.6914 63.6582C21.7318 65.3848 23.1152 66.248 24.8418 66.248C25.5944 66.248 26.3691 65.9492 27.166 65.3516C27.985 64.7318 28.7266 63.8574 29.3906 62.7285C30.0768 61.5775 30.6302 60.1829 31.0508 58.5449C31.4935 56.9069 31.7148 55.0586 31.7148 53ZM63.6562 58.4453C63.6562 59.9505 63.4238 61.4004 62.959 62.7949C62.5163 64.1673 61.8522 65.3958 60.9668 66.4805C60.1035 67.543 59.0189 68.3952 57.7129 69.0371C56.429 69.679 54.957 70 53.2969 70C52.1016 70 51.028 69.8118 50.0762 69.4355C49.1465 69.0371 48.3496 68.5169 47.6855 67.875C47.0215 67.2109 46.5124 66.4694 46.1582 65.6504C45.804 64.8092 45.627 63.946 45.627 63.0605C45.627 62.1751 45.793 61.3561 46.125 60.6035C46.4792 59.8288 46.944 59.1758 47.5195 58.6445C48.1172 58.0911 48.7923 57.6595 49.5449 57.3496C50.2975 57.0397 51.0944 56.8848 51.9355 56.8848C52.4668 56.8848 53.0202 56.9512 53.5957 57.084V58.0469C52.8874 58.0469 52.1901 58.1908 51.5039 58.4785C50.8398 58.7663 50.2422 59.1647 49.7109 59.6738C49.2018 60.1608 48.7923 60.7585 48.4824 61.4668C48.1725 62.153 48.0176 62.8945 48.0176 63.6914C48.0176 65.1523 48.5156 66.3255 49.5117 67.2109C50.5299 68.0742 51.9134 68.5059 53.6621 68.5059C54.5475 68.5059 55.3555 68.3398 56.0859 68.0078C56.8164 67.6536 57.4362 67.1777 57.9453 66.5801C58.4766 65.9603 58.875 65.2298 59.1406 64.3887C59.4284 63.5475 59.5723 62.6289 59.5723 61.6328C59.5723 60.681 59.3841 59.7956 59.0078 58.9766C58.6315 58.1576 58.1335 57.3828 57.5137 56.6523C56.8939 55.9219 56.1855 55.2357 55.3887 54.5938C54.6139 53.9518 53.8171 53.3431 52.998 52.7676C52.2012 52.1699 51.4154 51.5944 50.6406 51.041C49.8659 50.4876 49.1908 49.9342 48.6152 49.3809L45.2949 56.752L43.9336 55.7227L47.3203 48.3184C46.5013 47.5436 45.8926 46.8132 45.4941 46.127C45.1178 45.4186 44.9297 44.5775 44.9297 43.6035C44.9297 43.0723 45.0182 42.5742 45.1953 42.1094C45.3945 41.6224 45.6491 41.2129 45.959 40.8809C46.291 40.5267 46.6673 40.25 47.0879 40.0508C47.5085 39.8516 47.9512 39.752 48.416 39.752C49.2572 39.752 49.888 39.9954 50.3086 40.4824C50.7292 40.9473 50.9395 41.5339 50.9395 42.2422C50.9395 42.5742 50.9062 42.9284 50.8398 43.3047C50.7734 43.6589 50.6849 44.0241 50.5742 44.4004C50.4857 44.7546 50.3861 45.0866 50.2754 45.3965C50.1868 45.7064 50.1094 45.972 50.043 46.1934C50.707 46.7025 51.5039 47.2005 52.4336 47.6875C53.3633 48.1523 54.3262 48.6393 55.3223 49.1484C56.3405 49.6576 57.3477 50.2109 58.3438 50.8086C59.3398 51.4062 60.2253 52.0703 61 52.8008C61.7969 53.5312 62.4388 54.3613 62.9258 55.291C63.4128 56.2207 63.6562 57.2721 63.6562 58.4453ZM48.4824 41.2461C48.1725 41.2461 47.918 41.3568 47.7188 41.5781C47.5417 41.7773 47.4531 42.054 47.4531 42.4082C47.4531 42.8066 47.5527 43.2493 47.752 43.7363C47.9512 44.2233 48.3053 44.6992 48.8145 45.1641C49.0358 44.6992 49.2018 44.2454 49.3125 43.8027C49.4453 43.36 49.5117 42.9173 49.5117 42.4746C49.5117 42.1204 49.4121 41.8327 49.2129 41.6113C49.0358 41.3678 48.7923 41.2461 48.4824 41.2461ZM70.7949 58.4453C70.7949 59.5299 70.7617 60.681 70.6953 61.8984C70.6289 63.0938 70.485 64.3001 70.2637 65.5176C70.0645 66.7129 69.7656 67.8861 69.3672 69.0371C68.9688 70.166 68.4264 71.2174 67.7402 72.1914L65.2168 71.4277C65.7702 69.5684 66.1022 67.6204 66.2129 65.584C66.3236 63.5475 66.3789 61.5111 66.3789 59.4746C66.3789 57.2611 66.3125 55.0475 66.1797 52.834C66.0247 50.6204 65.8587 48.4069 65.6816 46.1934C65.4824 43.9577 65.3164 41.7109 65.1836 39.4531C65.0286 37.1953 64.9512 34.9154 64.9512 32.6133C64.9512 31.2188 65.1061 30.0013 65.416 28.9609C65.7038 27.9206 66.0911 27.0573 66.5781 26.3711C67.0651 25.6849 67.6074 25.1758 68.2051 24.8438C68.8027 24.4896 69.4004 24.3125 69.998 24.3125C70.8392 24.3125 71.5033 24.6113 71.9902 25.209C72.4993 25.8066 72.8757 26.6146 73.1191 27.6328C73.3626 28.651 73.4844 29.8353 73.4844 31.1855C73.5065 32.5358 73.4512 33.9635 73.3184 35.4688C73.1855 36.974 72.9974 38.5124 72.7539 40.084C72.5104 41.6556 72.2448 43.1829 71.957 44.666C71.6693 46.1491 71.3815 47.5326 71.0938 48.8164C70.8281 50.1003 70.5957 51.196 70.3965 52.1035C70.3965 52.2806 70.4076 52.4688 70.4297 52.668C70.4518 52.8451 70.4629 53.0221 70.4629 53.1992C70.9277 52.1589 71.4922 51.041 72.1562 49.8457C72.8424 48.6283 73.6061 47.4993 74.4473 46.459C75.3105 45.4186 76.2402 44.5553 77.2363 43.8691C78.2546 43.1608 79.3281 42.8066 80.457 42.8066C82.1172 42.8066 83.3678 43.36 84.209 44.4668C85.0501 45.5736 85.4707 47.1673 85.4707 49.248C85.4707 50.6868 85.3932 52.0703 85.2383 53.3984C85.0833 54.7266 84.9062 56.0104 84.707 57.25C84.5299 58.4674 84.3639 59.6517 84.209 60.8027C84.054 61.9538 83.9766 63.0938 83.9766 64.2227C83.9766 65.5729 84.3197 66.248 85.0059 66.248C85.3379 66.248 85.7585 65.9603 86.2676 65.3848C86.7988 64.7871 87.3854 64.0013 88.0273 63.0273C88.6693 62.0534 89.3444 60.9355 90.0527 59.6738C90.7611 58.4121 91.4583 57.0951 92.1445 55.7227L92.4766 55.0254L93.8379 56.0547L93.5059 56.752C92.7311 58.2793 91.9232 59.8288 91.082 61.4004C90.2409 62.972 89.3776 64.3997 88.4922 65.6836C87.6068 66.9453 86.6992 67.9857 85.7695 68.8047C84.862 69.6016 83.9544 70 83.0469 70C82.6484 70 82.2389 69.9336 81.8184 69.8008C81.4199 69.668 81.0547 69.4355 80.7227 69.1035C80.3906 68.7715 80.1139 68.3288 79.8926 67.7754C79.6712 67.1999 79.5605 66.4694 79.5605 65.584C79.5605 64.6986 79.6048 63.7357 79.6934 62.6953C79.7819 61.6549 79.8815 60.5924 79.9922 59.5078C80.125 58.401 80.2689 57.3053 80.4238 56.2207C80.5788 55.1361 80.7116 54.1178 80.8223 53.166C80.9551 52.2142 81.0658 51.362 81.1543 50.6094C81.2428 49.8346 81.2871 49.2038 81.2871 48.7168C81.2871 47.4551 81.11 46.5365 80.7559 45.9609C80.4017 45.3854 79.8704 45.0977 79.1621 45.0977C78.2767 45.0977 77.4245 45.485 76.6055 46.2598C75.7865 47.0345 75.0117 48.0085 74.2812 49.1816C73.5729 50.3327 72.9199 51.5833 72.3223 52.9336C71.7246 54.2617 71.1934 55.4902 70.7285 56.6191C70.7285 56.9512 70.7396 57.2832 70.7617 57.6152C70.7839 57.9251 70.7949 58.2018 70.7949 58.4453ZM68.6367 30.0234C68.6367 30.931 68.6699 32.0378 68.7363 33.3438C68.8249 34.6276 68.9245 36.0221 69.0352 37.5273C69.168 39.0326 69.3008 40.6042 69.4336 42.2422C69.5885 43.8802 69.7435 45.4961 69.8984 47.0898C70.1419 45.8503 70.3854 44.4889 70.6289 43.0059C70.8724 41.5007 71.0827 39.9954 71.2598 38.4902C71.459 36.9629 71.6029 35.4798 71.6914 34.041C71.8021 32.6022 71.8242 31.3294 71.7578 30.2227C71.7135 29.1159 71.5697 28.2305 71.3262 27.5664C71.0827 26.8802 70.7285 26.5371 70.2637 26.5371C69.8431 26.5371 69.4668 26.7917 69.1348 27.3008C68.8027 27.8099 68.6367 28.7174 68.6367 30.0234ZM94.1699 55.3906L93.8379 56.0547L93.5059 56.752L92.1445 55.7227L92.4766 55.0254C93.0299 53.8965 93.4837 52.7676 93.8379 51.6387C94.2142 50.4876 94.513 49.4141 94.7344 48.418C94.9779 47.4219 95.1771 46.5475 95.332 45.7949C95.487 45.0423 95.6419 44.5 95.7969 44.168C95.9297 43.9023 96.1178 43.6921 96.3613 43.5371C96.627 43.36 96.8926 43.2161 97.1582 43.1055C97.446 42.9948 97.7116 42.9173 97.9551 42.873C98.2207 42.8288 98.4089 42.8066 98.5195 42.8066C99.0065 42.8066 99.3275 42.9062 99.4824 43.1055C99.6595 43.3047 99.748 43.6589 99.748 44.168C99.748 44.4115 99.6927 45.0202 99.582 45.9941C99.4935 46.946 99.3828 48.1523 99.25 49.6133C99.1393 51.0521 99.0286 52.679 98.918 54.4941C98.8294 56.2871 98.7852 58.1465 98.7852 60.0723C98.7852 61.4668 98.8516 62.5736 98.9844 63.3926C99.1172 64.1895 99.2832 64.7871 99.4824 65.1855C99.7038 65.584 99.9362 65.8385 100.18 65.9492C100.445 66.0599 100.711 66.1152 100.977 66.1152C101.331 66.1152 101.729 65.9603 102.172 65.6504C102.615 65.3405 103.135 64.7982 103.732 64.0234C104.33 63.2266 105.016 62.1641 105.791 60.8359C106.566 59.4857 107.473 57.7812 108.514 55.7227L108.879 55.0254L110.24 56.0547L109.875 56.752C109.034 58.39 108.193 60.0059 107.352 61.5996C106.533 63.1934 105.691 64.61 104.828 65.8496C103.987 67.0892 103.135 68.0964 102.271 68.8711C101.408 69.6237 100.545 70 99.6816 70C98.7741 70 97.9883 69.8229 97.3242 69.4688C96.6823 69.0924 96.14 68.4837 95.6973 67.6426C95.2767 66.8014 94.9557 65.6947 94.7344 64.3223C94.5352 62.9277 94.4355 61.2122 94.4355 59.1758C94.4355 58.6003 94.4355 58.0026 94.4355 57.3828C94.4355 56.7409 94.4577 56.0768 94.502 55.3906H94.1699ZM100.977 36C100.977 36.7747 100.711 37.4277 100.18 37.959C99.6706 38.4681 99.0286 38.7227 98.2539 38.7227C97.5013 38.7227 96.8594 38.4681 96.3281 37.959C95.7969 37.4277 95.5312 36.7747 95.5312 36C95.5312 35.2474 95.7969 34.6055 96.3281 34.0742C96.8594 33.543 97.5013 33.2773 98.2539 33.2773C99.0286 33.2773 99.6706 33.543 100.18 34.0742C100.711 34.6055 100.977 35.2474 100.977 36ZM136.703 56.0547L136.338 56.752C135.585 58.2572 134.578 59.4635 133.316 60.3711C132.077 61.2565 130.727 61.832 129.266 62.0977C128.867 63.2266 128.347 64.278 127.705 65.252C127.085 66.2038 126.366 67.0339 125.547 67.7422C124.75 68.4505 123.842 69.0039 122.824 69.4023C121.828 69.8008 120.743 70 119.57 70C117.866 70 116.327 69.6458 114.955 68.9375C113.605 68.207 112.454 67.2331 111.502 66.0156C110.55 64.776 109.82 63.3372 109.311 61.6992C108.801 60.0391 108.547 58.2682 108.547 56.3867C108.547 54.7487 108.735 53.2656 109.111 51.9375C109.488 50.5872 109.964 49.3919 110.539 48.3516C111.115 47.2891 111.757 46.3704 112.465 45.5957C113.173 44.7988 113.87 44.1458 114.557 43.6367C115.243 43.1276 115.863 42.7513 116.416 42.5078C116.992 42.2422 117.423 42.1094 117.711 42.1094L118.143 43.2715C117.235 43.9355 116.427 44.8652 115.719 46.0605C115.099 47.0788 114.535 48.429 114.025 50.1113C113.538 51.7936 113.295 53.8854 113.295 56.3867C113.295 57.9141 113.439 59.3971 113.727 60.8359C114.014 62.2747 114.435 63.5475 114.988 64.6543C115.542 65.7611 116.217 66.6465 117.014 67.3105C117.833 67.9746 118.751 68.3066 119.77 68.3066C121.164 68.3066 122.315 67.7533 123.223 66.6465C124.152 65.5176 124.839 63.9792 125.281 62.0312C124.13 61.7878 123.035 61.334 121.994 60.6699C120.954 60.0059 120.035 59.1868 119.238 58.2129C118.441 57.2168 117.799 56.0768 117.312 54.793C116.848 53.5091 116.615 52.1146 116.615 50.6094C116.615 49.3698 116.77 48.2852 117.08 47.3555C117.412 46.4036 117.844 45.6178 118.375 44.998C118.906 44.3561 119.515 43.8802 120.201 43.5703C120.91 43.2383 121.651 43.0723 122.426 43.0723C123.333 43.0723 124.263 43.3379 125.215 43.8691C126.167 44.3783 127.03 45.153 127.805 46.1934C128.579 47.2116 129.21 48.4954 129.697 50.0449C130.184 51.5944 130.428 53.3984 130.428 55.457C130.428 56.2318 130.383 56.9954 130.295 57.748C130.206 58.5007 130.074 59.2311 129.896 59.9395C130.959 59.6296 131.922 59.1315 132.785 58.4453C133.671 57.7591 134.401 56.8516 134.977 55.7227L135.342 55.0254L136.703 56.0547ZM118.807 50.3438C118.807 51.6497 118.984 52.8561 119.338 53.9629C119.714 55.0475 120.212 56.0104 120.832 56.8516C121.452 57.6706 122.171 58.3568 122.99 58.9102C123.809 59.4635 124.684 59.8509 125.613 60.0723C125.724 59.4525 125.79 58.8105 125.812 58.1465C125.857 57.4603 125.879 56.763 125.879 56.0547C125.879 54.4831 125.757 53.0664 125.514 51.8047C125.27 50.5208 124.949 49.4362 124.551 48.5508C124.152 47.6432 123.688 46.946 123.156 46.459C122.625 45.972 122.083 45.7285 121.529 45.7285C120.777 45.7285 120.135 46.138 119.604 46.957C119.072 47.7539 118.807 48.8828 118.807 50.3438ZM224.293 56.0547L223.928 56.752C223.175 58.2572 222.168 59.4635 220.906 60.3711C219.667 61.2565 218.316 61.832 216.855 62.0977C216.457 63.2266 215.937 64.278 215.295 65.252C214.675 66.2038 213.956 67.0339 213.137 67.7422C212.34 68.4505 211.432 69.0039 210.414 69.4023C209.418 69.8008 208.333 70 207.16 70C205.456 70 203.917 69.6458 202.545 68.9375C201.195 68.207 200.044 67.2331 199.092 66.0156C198.14 64.776 197.41 63.3372 196.9 61.6992C196.391 60.0391 196.137 58.2682 196.137 56.3867C196.137 54.7487 196.325 53.2656 196.701 51.9375C197.077 50.5872 197.553 49.3919 198.129 48.3516C198.704 47.2891 199.346 46.3704 200.055 45.5957C200.763 44.7988 201.46 44.1458 202.146 43.6367C202.833 43.1276 203.452 42.7513 204.006 42.5078C204.581 42.2422 205.013 42.1094 205.301 42.1094L205.732 43.2715C204.825 43.9355 204.017 44.8652 203.309 46.0605C202.689 47.0788 202.124 48.429 201.615 50.1113C201.128 51.7936 200.885 53.8854 200.885 56.3867C200.885 57.9141 201.029 59.3971 201.316 60.8359C201.604 62.2747 202.025 63.5475 202.578 64.6543C203.132 65.7611 203.807 66.6465 204.604 67.3105C205.423 67.9746 206.341 68.3066 207.359 68.3066C208.754 68.3066 209.905 67.7533 210.812 66.6465C211.742 65.5176 212.428 63.9792 212.871 62.0312C211.72 61.7878 210.624 61.334 209.584 60.6699C208.544 60.0059 207.625 59.1868 206.828 58.2129C206.031 57.2168 205.389 56.0768 204.902 54.793C204.438 53.5091 204.205 52.1146 204.205 50.6094C204.205 49.3698 204.36 48.2852 204.67 47.3555C205.002 46.4036 205.434 45.6178 205.965 44.998C206.496 44.3561 207.105 43.8802 207.791 43.5703C208.499 43.2383 209.241 43.0723 210.016 43.0723C210.923 43.0723 211.853 43.3379 212.805 43.8691C213.757 44.3783 214.62 45.153 215.395 46.1934C216.169 47.2116 216.8 48.4954 217.287 50.0449C217.774 51.5944 218.018 53.3984 218.018 55.457C218.018 56.2318 217.973 56.9954 217.885 57.748C217.796 58.5007 217.663 59.2311 217.486 59.9395C218.549 59.6296 219.512 59.1315 220.375 58.4453C221.26 57.7591 221.991 56.8516 222.566 55.7227L222.932 55.0254L224.293 56.0547ZM206.396 50.3438C206.396 51.6497 206.574 52.8561 206.928 53.9629C207.304 55.0475 207.802 56.0104 208.422 56.8516C209.042 57.6706 209.761 58.3568 210.58 58.9102C211.399 59.4635 212.273 59.8509 213.203 60.0723C213.314 59.4525 213.38 58.8105 213.402 58.1465C213.447 57.4603 213.469 56.763 213.469 56.0547C213.469 54.4831 213.347 53.0664 213.104 51.8047C212.86 50.5208 212.539 49.4362 212.141 48.5508C211.742 47.6432 211.277 46.946 210.746 46.459C210.215 45.972 209.673 45.7285 209.119 45.7285C208.367 45.7285 207.725 46.138 207.193 46.957C206.662 47.7539 206.396 48.8828 206.396 50.3438Z'
        fill='black'
      />
      <path
        d='M148.158 45.0977C147.538 45.0977 146.841 45.3743 146.066 45.9277C145.314 46.4811 144.55 47.2005 143.775 48.0859C143.001 48.9492 142.248 49.9232 141.518 51.0078C140.809 52.0924 140.189 53.166 139.658 54.2285C139.592 56.1764 139.525 58.3014 139.459 60.6035C139.415 62.9056 139.393 65.3626 139.393 67.9746C139.393 68.3066 139.238 68.6055 138.928 68.8711C138.64 69.1146 138.297 69.3249 137.898 69.502C137.5 69.6569 137.09 69.7786 136.67 69.8672C136.249 69.9557 135.906 70 135.641 70C135.309 70 134.999 69.9004 134.711 69.7012C134.423 69.502 134.279 69.0592 134.279 68.373C134.279 68.041 134.312 67.6315 134.379 67.1445C134.445 66.6354 134.534 66.0931 134.645 65.5176C134.733 64.9421 134.844 64.3555 134.977 63.7578C135.087 63.138 135.198 62.5625 135.309 62.0312V45.7949C135.309 45.3522 135.32 45.0091 135.342 44.7656C135.342 44.5 135.375 44.3008 135.441 44.168C135.574 43.8581 135.807 43.6146 136.139 43.4375C136.471 43.2604 136.825 43.1276 137.201 43.0391C137.577 42.9284 137.943 42.862 138.297 42.8398C138.651 42.8177 138.928 42.8066 139.127 42.8066C139.503 42.8066 139.758 42.9062 139.891 43.1055C140.046 43.3047 140.123 43.6589 140.123 44.168C140.123 44.1016 140.068 44.6439 139.957 45.7949C139.868 46.946 139.791 48.5951 139.725 50.7422C140.389 49.7018 141.108 48.7057 141.883 47.7539C142.658 46.8021 143.465 45.9609 144.307 45.2305C145.148 44.5 146.011 43.9134 146.896 43.4707C147.804 43.028 148.723 42.8066 149.652 42.8066C151.312 42.8066 152.53 43.3379 153.305 44.4004C154.079 45.4408 154.467 46.8574 154.467 48.6504C154.467 49.7793 154.389 51.041 154.234 52.4355C154.102 53.8079 153.936 55.2135 153.736 56.6523C153.559 58.069 153.393 59.4635 153.238 60.8359C153.105 62.1862 153.039 63.4258 153.039 64.5547C153.039 66.0156 153.493 66.7461 154.4 66.7461C154.688 66.7461 155.02 66.6022 155.396 66.3145C155.795 66.0046 156.282 65.4401 156.857 64.6211C157.455 63.8021 158.163 62.6842 158.982 61.2676C159.801 59.8288 160.775 57.9805 161.904 55.7227L162.236 55.0254L163.598 56.0547L163.266 56.752C161.938 59.4082 160.753 61.5885 159.713 63.293C158.695 64.9974 157.765 66.3477 156.924 67.3438C156.083 68.3398 155.297 69.0371 154.566 69.4355C153.836 69.8118 153.105 70 152.375 70C151.91 70 151.445 69.9336 150.98 69.8008C150.516 69.668 150.106 69.4355 149.752 69.1035C149.398 68.7715 149.11 68.3288 148.889 67.7754C148.667 67.1999 148.557 66.4694 148.557 65.584C148.557 64.2559 148.645 62.7617 148.822 61.1016C148.999 59.4414 149.199 57.7812 149.42 56.1211C149.641 54.4609 149.84 52.9004 150.018 51.4395C150.195 49.9564 150.283 48.75 150.283 47.8203C150.283 47.0013 150.106 46.3483 149.752 45.8613C149.398 45.3522 148.867 45.0977 148.158 45.0977ZM164.992 66.9453C164.992 66.5247 165.07 66.1263 165.225 65.75C165.38 65.3737 165.59 65.0527 165.855 64.7871C166.143 64.4993 166.475 64.278 166.852 64.123C167.228 63.9681 167.626 63.8906 168.047 63.8906C168.467 63.8906 168.866 63.9681 169.242 64.123C169.618 64.278 169.939 64.4993 170.205 64.7871C170.493 65.0527 170.714 65.3737 170.869 65.75C171.024 66.1263 171.102 66.5247 171.102 66.9453C171.102 67.3659 171.024 67.7643 170.869 68.1406C170.714 68.5169 170.493 68.849 170.205 69.1367C169.939 69.4023 169.618 69.6126 169.242 69.7676C168.866 69.9225 168.467 70 168.047 70C167.626 70 167.228 69.9225 166.852 69.7676C166.475 69.6126 166.143 69.4023 165.855 69.1367C165.59 68.849 165.38 68.5169 165.225 68.1406C165.07 67.7643 164.992 67.3659 164.992 66.9453ZM186.441 51.041C186.707 50.6204 186.928 50.1003 187.105 49.4805C187.305 48.8607 187.404 48.2409 187.404 47.6211C187.404 46.8685 187.216 46.2155 186.84 45.6621C186.464 45.1087 185.788 44.832 184.814 44.832C184.173 44.832 183.52 45.0645 182.855 45.5293C182.191 45.9941 181.572 46.6914 180.996 47.6211C180.443 48.5508 179.989 49.724 179.635 51.1406C179.281 52.5573 179.104 54.2174 179.104 56.1211C179.104 57.6263 179.258 58.9987 179.568 60.2383C179.878 61.4779 180.332 62.5404 180.93 63.4258C181.527 64.3112 182.247 65.0085 183.088 65.5176C183.951 66.0046 184.914 66.248 185.977 66.248C186.751 66.248 187.537 66.0488 188.334 65.6504C189.153 65.252 189.972 64.6322 190.791 63.791C191.632 62.9499 192.495 61.8652 193.381 60.5371C194.266 59.1868 195.174 57.582 196.104 55.7227L196.436 55.0254L197.797 56.0547L197.465 56.752C196.27 59.1204 195.074 61.1458 193.879 62.8281C192.706 64.5104 191.544 65.8828 190.393 66.9453C189.242 68.0078 188.113 68.7826 187.006 69.2695C185.921 69.7565 184.87 70 183.852 70C182.413 70 181.129 69.7012 180 69.1035C178.871 68.5059 177.919 67.6979 177.145 66.6797C176.37 65.6393 175.772 64.444 175.352 63.0938C174.953 61.7214 174.754 60.2826 174.754 58.7773C174.754 56.3867 175.075 54.2174 175.717 52.2695C176.381 50.2995 177.233 48.6172 178.273 47.2227C179.314 45.8281 180.487 44.7435 181.793 43.9688C183.099 43.194 184.416 42.8066 185.744 42.8066C186.762 42.8066 187.615 42.9505 188.301 43.2383C188.987 43.526 189.54 43.8913 189.961 44.334C190.382 44.7767 190.68 45.2526 190.857 45.7617C191.035 46.2708 191.123 46.7578 191.123 47.2227C191.123 47.6875 191.023 48.1745 190.824 48.6836C190.625 49.1706 190.326 49.6354 189.928 50.0781C189.551 50.4987 189.098 50.8861 188.566 51.2402C188.035 51.5723 187.438 51.8158 186.773 51.9707L186.441 51.041Z'
        fill='white'
      />
    </svg>
  );
};

export default Logo;
