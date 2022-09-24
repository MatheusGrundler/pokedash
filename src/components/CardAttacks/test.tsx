import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import pokemonData from 'mock/pokemonData.json'

import CardAttacks from '.'

describe('<CardAttacks />', () => {
  it('should render attack Name', () => {
    renderWithTheme(<CardAttacks attacks={pokemonData.data[0].attacks} />)
    expect(screen.getByText(/Psychic Raid/i)).toBeInTheDocument()
  })

  it('should render modal attack details', async () => {
    renderWithTheme(<CardAttacks attacks={pokemonData.data[0].attacks} />)

    const buttonAttack = screen.getByText(/Psychic Raid/i)
    await userEvent.click(buttonAttack)

    const attackDescription = screen.getByText(
      pokemonData.data[0].attacks[0].text
    )

    expect(attackDescription).toBeInTheDocument()
  })

  it('should render close modal attack details when user press esc button', async () => {
    renderWithTheme(<CardAttacks attacks={pokemonData.data[0].attacks} />)

    const buttonAttack = screen.getByText(/Psychic Raid/i)
    await userEvent.click(buttonAttack)

    await userEvent.keyboard('{Escape}')

    const attackDescription = screen.queryByText(
      pokemonData.data[0].attacks[0].text
    )

    expect(attackDescription).not.toBeInTheDocument()
  })
})
