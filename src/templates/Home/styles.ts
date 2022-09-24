import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;

    .MuiCircularProgress-root {
      svg {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xlarge};
    gap: 2rem;
    margin-bottom: ${theme.spacings.xxxlarge};
    button {
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.primary};
      text-transform: capitalize;

      &:disabled {
        color: ${theme.colors.white};
        background-color: ${theme.colors.gray};
      }
    }
  `}
`
