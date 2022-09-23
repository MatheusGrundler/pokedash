import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NotFound from '.'

describe('<NotFound />', () => {
  it('should render the component', async () => {
    renderWithTheme(<NotFound primaryMessage="Lorem ipsum" />)

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
  })
})
