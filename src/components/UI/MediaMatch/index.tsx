import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

type breakpoint = 'xhuge' | 'huge' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export type MediaMatchProps = {
  lessThan?: 'xhuge' | 'huge' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  greaterThan?: 'xhuge' | 'huge' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

export const customMedia = generateMedia({
  xhuge: '1640px',
  huge: '1500px',
  xxl: '1399px',
  xl: '1200px',
  lg: '992px',
  md: '768px',
  sm: '576px',
  xs: '0px'
})

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${customMedia.lessThan(size)` display: block `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${customMedia.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
