import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import pokemonMock from 'mock/pokemonData.json'

import CardDetailsTemplate from '.'

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

describe('<CardDetailsTemplate />', () => {
  it('should render Card name', () => {
    renderWithTheme(<CardDetailsTemplate {...pokemonMock.data[0]} />)
    expect(
      screen.getByRole('heading', { name: 'Armored Mewtwo' })
    ).toBeInTheDocument()
  })

  it('should  render the card weaknesses', () => {
    renderWithTheme(<CardDetailsTemplate {...pokemonMock.data[2]} />)
    expect(screen.getByText('Fighting')).toBeInTheDocument()
  })

  it('should  render the card resistence', () => {
    renderWithTheme(<CardDetailsTemplate {...pokemonMock.data[2]} />)
    expect(screen.getByText('Metal')).toBeInTheDocument()
  })

  it('should not render the card weaknesses', () => {
    renderWithTheme(<CardDetailsTemplate {...pokemonMock.data[3]} />)
    expect(screen.getByTestId('NoWeakness')).toBeInTheDocument()
  })

  it('should not render the card resistence', () => {
    renderWithTheme(<CardDetailsTemplate {...pokemonMock.data[3]} />)
    expect(screen.getByTestId('NoResistence')).toBeInTheDocument()
  })
})
