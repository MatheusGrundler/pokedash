import { useCallback, useEffect, useState } from 'react'
import { Backdrop, Button, CircularProgress } from '@mui/material'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CardsList from 'components/CardsList'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchForm from 'components/SearchForm'
import { usePokemonCards } from 'hooks/usePokemonCards'
import { CardsApiRespose } from 'types/CardsApiRespose'

export type HomeTemplateProps = {
  cardsData: CardsApiRespose
}
import * as S from './styles'

const HomeTemplate = ({ cardsData }: HomeTemplateProps) => {
  const [pokemonList, setPokemonList] = useState(cardsData.data)
  const pokemons = usePokemonCards()
  const pokemonsData = pokemons.pokemonCards
  const currentPage = pokemons.currentPage
  const isLoading = pokemons.isLoading
  const pokemonPaginate = pokemons.pokemonCardsPaginate

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pokemonList])

  useEffect(() => {
    if (pokemonsData.length === 0) {
      return
    }

    setPokemonList(pokemonsData)
  }, [pokemonsData])

  const handleChangePage = useCallback(
    (type: 'next' | 'previous') => {
      pokemonPaginate({ type })
    },
    [pokemonPaginate]
  )

  return (
    <S.Wrapper>
      <Header />
      <SearchForm />

      <CardsList cards={pokemonList} />
      <S.PaginationWrapper>
        <Button
          variant="contained"
          onClick={() => handleChangePage('previous')}
          startIcon={<FaChevronLeft />}
          disabled={currentPage === 1}
        >
          Previous page
        </Button>
        <Button
          variant="contained"
          onClick={() => handleChangePage('next')}
          endIcon={<FaChevronRight />}
        >
          Next Page
        </Button>
      </S.PaginationWrapper>

      {isLoading && (
        <Backdrop open>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
      <Footer />
    </S.Wrapper>
  )
}

export default HomeTemplate
