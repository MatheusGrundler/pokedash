import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkPrimary};
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const LanguagesWrapper = styled.div`
  ${({ theme }) => css`
    ul {
      list-style: none;
      li {
        a {
          color: ${theme.colors.white};
          text-transform: capitalize;
        }
      }
    }
  `}
`
