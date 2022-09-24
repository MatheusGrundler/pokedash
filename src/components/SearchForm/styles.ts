import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    position: relative;
    .MuiTextField-root {
      width: 100%;
      label {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
        font-family: ${theme.font.family};
      }

      .MuiOutlinedInput-root {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
        border-radius: 1rem;
        fieldset {
          border-color: ${theme.colors.secondary};
        }
        .MuiInputAdornment-root {
          svg {
            color: ${theme.colors.white};
          }
        }
        &.Mui-focused {
          fieldset {
            border-color: ${theme.colors.primary};
          }
        }
      }
    }
    button {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      text-transform: capitalize;
    }
  `}
`

export const ChipWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    span {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }
    svg {
      fill: ${theme.colors.white};
    }
  `}
`
