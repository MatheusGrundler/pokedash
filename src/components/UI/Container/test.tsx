import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Lorem Ipsum</span>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.xxl, {
      media: '(min-width:1399px)'
    })
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.xl, {
      media: '(min-width:1200px)'
    })
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.lg, {
      media: '(min-width:992px)'
    })
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.md, {
      media: '(min-width:768px)'
    })
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.sm, {
      media: '(min-width:576px)'
    })
    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.xs, {
      media: '(min-width:0px)'
    })
  })
})
