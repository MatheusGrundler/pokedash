import { Modal } from '@mui/material'
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

export const AttacksModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AttacksDetailsWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    border-radius: 1rem;
    max-width: 60rem;

    .title {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: bold;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.small};
    }

    .description {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.xsmall};
    }

    .damageAndCost {
      list-style: none;
      font-size: ${theme.font.sizes.small};
      font-weight: bold;
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings.small};
      li {
        display: flex;
        align-items: center;
      }
      p {
        margin-right: ${theme.spacings.xxsmall};
      }
      span {
        & + span {
          margin-left: ${theme.spacings.xxsmall};
        }
      }
    }
  `}
`
