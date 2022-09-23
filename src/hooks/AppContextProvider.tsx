import { PokemonCardsProvider } from 'hooks/usePokemonCards'
import { combineComponents } from 'utils/combineComponents'

const providers = [PokemonCardsProvider]
//@ts-ignore
export const AppContextProvider = combineComponents(...providers)
