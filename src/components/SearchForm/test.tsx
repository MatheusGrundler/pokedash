import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import SearchForm from '.'

const mockFunction = jest.fn()

jest.mock('hooks/usePokemonCards', () => ({
  usePokemonCards: () => ({
    getPokemonCards: mockFunction
  })
}))

describe('<SearchForm />', () => {
  it('should render field', () => {
    renderWithTheme(<SearchForm />)
    expect(screen.getByLabelText(/busque um card/i)).toBeInTheDocument()
  })

  it('should be able to find pokemon', async () => {
    renderWithTheme(<SearchForm />)

    const field = screen.getByLabelText(/busque um card/i)
    await userEvent.type(field, 'Mew')

    const buttonSearch = screen.getByText(/Buscar/i)

    await userEvent.click(buttonSearch)

    expect(mockFunction).toHaveBeenCalled()
  })
})
