import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState
} from 'react'
import { toast } from 'react-toastify'
import { apiPublic } from 'services/api'
import { CardsApiRespose } from 'types/CardsApiRespose'
import { Card } from 'types/PokemonCards'

type PokemonCardsProviderProps = {
  children: ReactNode
}
type getPokemonCardsProps = {
  page?: number
  size?: number
  query?: string
}
type PokemonCardsPaginateProps = {
  type: 'next' | 'previous'
}

type PokemonCardsContextProps = {
  pokemonCards: Card[]
  isLoading: boolean
  searchParams: string | undefined
  getPokemonCards: ({ page, query, size }: getPokemonCardsProps) => void
  pokemonCardsPaginate: ({ type }: PokemonCardsPaginateProps) => void
  currentPage: number
}

const PokemonCardsContext = createContext<PokemonCardsContextProps>(
  {} as PokemonCardsContextProps
)

export function PokemonCardsProvider({ children }: PokemonCardsProviderProps) {
  const [pokemonCards, setPokemonCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useState<string | undefined>()
  const [currentPage, setCurrentPage] = useState(1)

  const getPokemonCards = useCallback(
    ({ page = 1, query, size = 20 }: getPokemonCardsProps) => {
      const handler = async () => {
        setIsLoading(true)

        try {
          const pokemons = await apiPublic.get<CardsApiRespose>(
            `/cards?${
              query ? `q=name:${query.trim()}*&` : ''
            }orderBy=name&pageSize=${size}&page=${page}`
          )
          if (pokemons.data.data.length === 0) {
            toast.error('Nenhum pokémon com esse nome, tente novamente')
            setIsLoading(false)
            return
          }

          setPokemonCards(pokemons.data.data)
          setSearchParams(query)
          setIsLoading(false)
        } catch (error: any) {
          toast.error('Houve um erro ao recuperar dados, tente novamente!')
          setIsLoading(false)
          return
        }
      }
      handler()
    },
    []
  )
  useEffect(() => {
    setCurrentPage(1)
  }, [searchParams])

  const pokemonCardsPaginate = useCallback(
    ({ type }: PokemonCardsPaginateProps) => {
      if (type === 'previous' && currentPage === 1) {
        return
      }
      console.log('chamou aqui')

      getPokemonCards({
        page: type === 'next' ? currentPage + 1 : currentPage - 1,
        query: searchParams
      })

      setCurrentPage(type === 'next' ? currentPage + 1 : currentPage - 1)
    },
    [currentPage, searchParams, getPokemonCards]
  )

  const PokemonCardsContextValue = useMemo(
    () => ({
      pokemonCards,
      isLoading,
      getPokemonCards,
      searchParams,
      pokemonCardsPaginate,
      currentPage
    }),
    [
      pokemonCards,
      isLoading,
      getPokemonCards,
      searchParams,
      pokemonCardsPaginate,
      currentPage
    ]
  )
  return (
    <PokemonCardsContext.Provider value={PokemonCardsContextValue}>
      {children}
    </PokemonCardsContext.Provider>
  )
}

export function usePokemonCards() {
  const context = useContext(PokemonCardsContext)

  return context
}
