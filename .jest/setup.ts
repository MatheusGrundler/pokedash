import '@testing-library/jest-dom'
import 'jest-styled-components'
import './match-media-mock'

const noop = () => {
  return {
    top: 814,
    left: 0,
    behavior: 'smooth'
  }
}

Object.defineProperty(window, 'scroll', { value: noop, writable: true })
