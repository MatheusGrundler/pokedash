export default {
  border: {
    radius: '3rem'
  },
  font: {
    family:
      "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    lato: "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    extraBold: 800,
    black: 900,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '3.6rem',
      huge: '4.2rem',
      xhuge: '4.8rem'
    }
  },
  colors: {
    primary: '#2F4FE4',
    darkPrimary: '#01123C',
    gray: '#595f65',
    secondary: '#FF844F',
    purple: '#6E44FF',
    white: '#F6F9FC',
    black: '#050116',
    red: '#F14b3D',
    green: '#60D394',
    yellow: '#FDD85D',
    transparent: 'transparent'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '6rem',
    huge: '8rem',
    xhuge: '10rem'
  },
  grid: {
    gutter: '3rem',
    xs: '100%',
    sm: '54rem',
    md: '72rem',
    lg: '96rem',
    xl: '114rem',
    xxl: '132rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
