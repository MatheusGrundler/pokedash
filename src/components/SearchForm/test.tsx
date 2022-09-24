import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import SearchForm from '.'

const mockFunction = jest.fn()

jest.mock('hooks/usePokemonCards', () => ({
  usePokemonCards: () => ({
    getPokemonCards: mockFunction,
    searchParams: 'pika'
  })
}))

describe('<SearchForm />', () => {
  it('should render field', () => {
    renderWithTheme(<SearchForm />)
    expect(screen.getByLabelText(/Search for a card/i)).toBeInTheDocument()
  })

  it('should be able to find pokemon', async () => {
    renderWithTheme(<SearchForm />)

    const field = screen.getByLabelText(/Search for a card/i)
    await userEvent.type(field, 'Mew')

    const buttonSearch = screen.getByRole('button', { name: /Search/i })

    await userEvent.click(buttonSearch)

    expect(mockFunction).toHaveBeenCalled()
  })

  it('should be able to cleand the search ', async () => {
    renderWithTheme(<SearchForm />)

    const searchParam = screen.getByTestId('CancelIcon')

    await userEvent.click(searchParam)

    expect(mockFunction).toHaveBeenCalled()
  })
})
