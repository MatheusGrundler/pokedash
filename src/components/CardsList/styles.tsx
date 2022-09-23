import { customMedia } from 'components/UI/Container'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
  `}
`

export const CardInfosWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${theme.colors.primary};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    opacity: 0;

    ul {
      list-style: none;
      padding: 0;
      li {
        display: flex;
        align-items: center;
        span {
          color: ${theme.colors.white};
          font-weight: bold;
          margin-right: 0.5rem;
        }

        p {
          color: ${theme.colors.white};
          & + p {
            margin-left: 0.5rem;
          }
        }
      }
    }
  `}
`
export const CardWrapper = styled.div`
  position: relative;
  background-color: grey;
  border-radius: 8px;
  position: relative;
  &:hover {
    ${CardInfosWrapper} {
      opacity: 1;
    }
  }
  > span {
    height: 100% !important;
  }
`

export const MobileListWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};
    .slick-initialized .slick-slide {
      > div {
        display: flex;
        justify-content: center;
        padding: 0 5px;
      }
    }
    a {
      color: ${theme.colors.white};
      margin-top: ${theme.spacings.small};
      text-decoration: underline;
    }

    .slick-dots {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex !important;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      bottom: -7rem;
      li {
        transition: ease 0.3s;
        & + li {
          margin-left: ${theme.spacings.xxsmall};
        }
        button {
          background: ${theme.colors.secondary};
          color: transparent;
          border: none;
          height: 0.8rem;
          width: 0.8rem;
          border-radius: 50%;
        }
        &.slick-active {
          button {
            width: 5rem;
            background: ${theme.colors.secondary};
            border-radius: 3rem;
          }
        }
      }
    }

    ${customMedia.greaterThan('sm')`
      .slick-dots{
        bottom: -6rem
      }
    `}
  `}
`
export const DesktopListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
`
