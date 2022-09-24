import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      text-align: center;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`
export const AttacksWrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    padding: 0;
    li {
      text-align: center;
      button {
        text-align: center;
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.xlarge};
        text-transform: capitalize;
        font-family: ${theme.font.family};
      }
    }
  `}
`
