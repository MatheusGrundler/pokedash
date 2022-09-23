import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockedCardListData from 'mock/pokemonData.json'

import Cardslist from '.'

describe('<Cardslist />', () => {
  it('should render the Cardslist', () => {
    renderWithTheme(<Cardslist cards={mockedCardListData.data} />)
    expect(
      screen.getAllByAltText(/Armored Mewtwo-smp-SM228/i)[0]
    ).toBeInTheDocument()
  })
})
