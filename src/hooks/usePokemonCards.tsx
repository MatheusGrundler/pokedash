import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
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

type PokemonCardsContextProps = {
  pokemonCards: Card[]
  isLoading: boolean
  searchParams: string | undefined
  getPokemonCards: ({ page, query, size }: getPokemonCardsProps) => void
}

const PokemonCardsContext = createContext<PokemonCardsContextProps>(
  {} as PokemonCardsContextProps
)

export function PokemonCardsProvider({ children }: PokemonCardsProviderProps) {
  const [pokemonCards, setPokemonCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useState<string | undefined>()

  const getPokemonCards = useCallback(
    ({ page = 1, query, size = 20 }: getPokemonCardsProps) => {
      const handler = async () => {
        setIsLoading(true)
        setSearchParams(query)

        try {
          const pokemons = await apiPublic.get<CardsApiRespose>(
            `/cards?${
              query ? `q=name:${query}*&` : ''
            }orderBy=name&pageSize=${size}&page=${page}`
          )

          setPokemonCards(pokemons.data.data)
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

  const PokemonCardsContextValue = useMemo(
    () => ({ pokemonCards, isLoading, getPokemonCards, searchParams }),
    [pokemonCards, isLoading, getPokemonCards, searchParams]
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
