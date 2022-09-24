import { Button, Chip, InputAdornment, TextField } from '@mui/material'
import { Container } from 'components/UI/Container'
import { usePokemonCards } from 'hooks/usePokemonCards'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

import * as S from './styles'

type FormData = {
  searchField: string
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const pokemons = usePokemonCards()

  const onSubmit = useCallback(
    (data: FormData) => {
      pokemons.getPokemonCards({ query: data.searchField, page: 1 })
    },
    [pokemons]
  )

  const handleCleanSearch = useCallback(() => {
    pokemons.getPokemonCards({ page: 1 })
  }, [pokemons])

  return (
    <Container>
      <S.Wrapper>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Search for a card"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              )
            }}
            {...register('searchField')}
          />
          <Button type="submit">Search</Button>
        </S.FormWrapper>
        {pokemons.searchParams && (
          <S.ChipWrapper>
            <Chip
              label={pokemons.searchParams}
              variant="outlined"
              onDelete={handleCleanSearch}
            />
          </S.ChipWrapper>
        )}
      </S.Wrapper>
    </Container>
  )
}

export default SearchForm
