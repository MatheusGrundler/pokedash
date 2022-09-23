import { Backdrop, Button, CircularProgress } from '@mui/material'
import CardsList from 'components/CardsList'
import Header from 'components/Header'
import SearchForm from 'components/SearchForm'
import { usePokemonCards } from 'hooks/usePokemonCards'
import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CardsApiRespose } from 'types/CardsApiRespose'

export type HomeTemplateProps = {
  cardsData: CardsApiRespose
}
import * as S from './styles'

const HomeTemplate = ({ cardsData }: HomeTemplateProps) => {
  const [currentPage, setCurrentPage] = useState(cardsData.page)
  const [pokemonList, setPokemonList] = useState(cardsData.data)
  const pokemons = usePokemonCards()
  const pokemonsData = pokemons.pokemonCards
  const getPokemons = pokemons.getPokemonCards
  const isLoading = pokemons.isLoading
  const pokemonSearch = pokemons.searchParams

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

  useEffect(() => {
    setCurrentPage(1)
  }, [pokemonSearch])

  const handleChangePage = useCallback(
    (type: 'next' | 'previous') => {
      if (type === 'previous' && currentPage === 1) {
        return
      }
      getPokemons({
        page: type === 'next' ? currentPage + 1 : currentPage - 1,
        query: pokemonSearch
      })

      setCurrentPage(type === 'next' ? currentPage + 1 : currentPage - 1)
    },
    [currentPage, getPokemons, pokemonSearch]
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
          Página anterior
        </Button>
        <Button
          variant="contained"
          onClick={() => handleChangePage('next')}
          endIcon={<FaChevronRight />}
        >
          Próxima página
        </Button>
      </S.PaginationWrapper>
      {isLoading && (
        <Backdrop open>
          <CircularProgress color="secondary" />
        </Backdrop>
      )}
    </S.Wrapper>
  )
}

export default HomeTemplate
