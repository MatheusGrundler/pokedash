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
  }

  /**SWAL STYLE */
  .swal2-container {
    .swal2-popup {
      width: 40rem;
      max-width: 100%;
      .swal2-title {
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.black};
      }
      .swal2-html-container {
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.gray};
      }

      .swal2-confirm {
        background-color: ${theme.colors.gray};
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.medium};
        outline: none;
        border: 0;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: ${theme.border.radius};
        padding: ${theme.spacings.xxsmall};
        text-decoration: none;
        font-family: ${theme.font.family};
        font-weight: bold;
        width: 12rem;
        height: 4rem;
      }
    }
  }
`}

`

export default GlobalStyles
