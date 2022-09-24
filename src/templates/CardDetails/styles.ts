import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;
    display: grid;
    grid-template-columns: 1fr;
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
    margin: ${theme.spacings.medium};
  `}
`

export const ResistencesAndWeaknessesWrapper = styled.div`
  ${({ theme }) => css``}
`
