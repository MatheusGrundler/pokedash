import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 1vh;
  `}
`
export const BreadcrumbWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        button {
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.medium};
          font-family: ${theme.font.family};
          text-transform: capitalize;

          &.Mui-disabled {
            color: ${theme.colors.gray};
          }
        }

        &.separator {
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.medium};
          font-family: ${theme.font.family};
          text-transform: capitalize;
        }
      }
    }
  `}
`

export const ImageWrapper = styled.div`
  text-align: center;
`
export const ContentWrapper = styled.div``
export const ContentNameWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    text-align: center;
    border-bottom: 2px solid ${theme.colors.darkPrimary};
    padding-bottom: ${theme.spacings.small};
    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: 900;
      color: ${theme.colors.white};
    }

    div {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xlarge};
    }
    > span {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.medium};
      font-weight: 300;
      display: block;
    }
  `}
`

export const ContentAttacksWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const ResistencesAndWeaknessesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: ${theme.spacings.medium};
    div {
      h3 {
        font-size: ${theme.font.sizes.large};
        font-weight: 900;
        color: ${theme.colors.red};
      }

      ul {
        list-style: none;
        li {
          font-size: ${theme.font.sizes.medium};
          color: ${theme.colors.white};
          display: flex;
          align-items: center;
          margin-top: 1rem;
        }

        p {
          font-weight: bold;
          margin-right: 5px;
        }
        span {
          font-weight: bold;
          margin-left: 5px;
          color: ${theme.colors.red};
        }
      }
    }
  `}
`
