import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* NUNITO */

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/nunito-v16-latin-300.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-300.woff') format('woff');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/nunito-v16-latin-regular.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-regular.woff') format('woff');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/nunito-v16-latin-600.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-600.woff') format('woff');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/nunito-v16-latin-700.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-700.woff') format('woff');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('/fonts/nunito-v16-latin-800.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-800.woff') format('woff');
}
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/nunito-v16-latin-900.woff2') format('woff2'),
       url('/fonts/nunito-v16-latin-900.woff') format('woff');
}

/* LATO */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/lato-v17-latin-regular.woff2') format('woff2'),
       url('/fonts/lato-v17-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/lato-v17-latin-700.woff2') format('woff2'),
       url('/fonts/lato-v17-latin-700.woff') format('woff');
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

${({ theme }) => css`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    background-color: ${theme.colors.black};
    overflow-x: hidden;
    padding-right: 0 !important;
  }
`}

`

export default GlobalStyles
