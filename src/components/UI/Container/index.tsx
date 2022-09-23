import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

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

export const Container = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    ${customMedia.greaterThan('xs')`
     max-width: ${theme.grid.xs};
    `}

    ${customMedia.greaterThan('sm')`
     max-width: ${theme.grid.sm};
    `}

    ${customMedia.greaterThan('md')`
     max-width: ${theme.grid.md};
    `}

    ${customMedia.greaterThan('lg')`
     max-width: ${theme.grid.lg};
    `}

    ${customMedia.greaterThan('xl')`
     max-width: ${theme.grid.xl};
    `}

    ${customMedia.greaterThan('xxl')`
     max-width: ${theme.grid.xxl};
    `}
  `}
`
