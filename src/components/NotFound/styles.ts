import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.small} 0;
  `}
`

export const TitleMessage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 700;
  `}
`

export const PrimaryMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`
