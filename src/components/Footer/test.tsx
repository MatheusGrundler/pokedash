import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      locales: ['en-US', 'pt-BR']
    }
  }
}))

describe('<Footer />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByText(/Select a language/i)).toBeInTheDocument()
  })
})
