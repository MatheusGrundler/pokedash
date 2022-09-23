import { customMedia } from 'components/UI/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.darkPrimary};
    padding: ${theme.spacings.small};
  `}
`
export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    h1 {
      max-width: 18rem;
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.black};
      margin: 0 auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        135deg,
        #2f4fe4 1.93%,
        #6e44ff 14.86%,
        #f14b3d 48.09%,
        #ff844f 77.82%,
        #fdd85d 97.3%
      );
    }

    span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.secondary};
      font-family: ${theme.font.lato};
      font-weight: bold;
    }

    ${customMedia.greaterThan('sm')`
      h1{
        max-width: 23rem;
        font-size: ${theme.font.sizes.xhuge};
      }
    `}
  `}
`
