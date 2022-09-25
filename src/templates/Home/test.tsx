import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import pokemonMock from 'mock/pokemonData.json'
import pokemonMockEmpty from 'mock/pokemonDataEmpty.json'
import { usePokemonCards } from 'hooks/usePokemonCards'

import HomeTemplate from '.'

const mockData = pokemonMock
const mockEmptyData = pokemonMockEmpty
const mokcPokemonCardsPaginate = jest.fn()

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

jest.mock('hooks/usePokemonCards')
const mockUsePokemonCards = usePokemonCards as jest.MockedFunction<
  typeof usePokemonCards
>

describe('<HomeTemplate />', () => {
  it('should render Card name', () => {
    mockUsePokemonCards.mockReturnValue({
      pokemonCards: mockData.data
    } as any)

    renderWithTheme(<HomeTemplate cardsData={pokemonMock} />)
    expect(
      screen.getAllByAltText(`Armored Mewtwo-smp-SM228`)[0]
    ).toBeInTheDocument()
  })

  it('should not render Card', () => {
    mockUsePokemonCards.mockReturnValue({
      pokemonCards: mockEmptyData.data
    } as any)
    renderWithTheme(<HomeTemplate cardsData={pokemonMockEmpty} />)

    expect(screen.getByText(`Nenhum card encontrado`)).toBeInTheDocument()
  })

  it('should be able to paginate to next page', async () => {
    mockUsePokemonCards.mockReturnValue({
      pokemonCards: mockData.data,
      pokemonCardsPaginate: mokcPokemonCardsPaginate
    } as any)
    renderWithTheme(<HomeTemplate cardsData={mockData} />)

    const buttonNext = screen.getByRole('button', { name: 'Next page' })

    await userEvent.click(buttonNext)

    expect(mokcPokemonCardsPaginate).toHaveBeenCalledWith({ type: 'next' })
  })

  it('should be able to paginate to previuos page', async () => {
    mockUsePokemonCards.mockReturnValue({
      pokemonCards: mockData.data,
      pokemonCardsPaginate: mokcPokemonCardsPaginate
    } as any)
    renderWithTheme(<HomeTemplate cardsData={mockData} />)

    const buttonNext = screen.getByRole('button', { name: 'Previous page' })

    await userEvent.click(buttonNext)

    expect(mokcPokemonCardsPaginate).toHaveBeenCalledWith({ type: 'previous' })
  })

  it('should render backdrop when isLoading is true', () => {
    mockUsePokemonCards.mockReturnValue({
      pokemonCards: mockData.data,
      isLoading: true
    } as any)
    renderWithTheme(<HomeTemplate cardsData={mockData} />)

    const backdropLoading = screen.getByTestId('backdropLoading')

    expect(backdropLoading).toBeInTheDocument()
  })
})
