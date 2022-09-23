import { Button, InputAdornment, TextField } from '@mui/material'
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

  console.log(pokemons)

  const onSubmit = useCallback(
    (data: FormData) => {
      pokemons.getPokemonCards({ query: data.searchField, page: 1 })
    },
    [pokemons]
  )

  return (
    <Container>
      <S.Wrapper>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Busque um card"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              )
            }}
            {...register('searchField')}
          />
          <Button type="submit">Buscar</Button>
        </S.FormWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default SearchForm
