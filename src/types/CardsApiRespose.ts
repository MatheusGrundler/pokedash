import { Card } from './PokemonCards'

export type CardsApiRespose = {
  data: Card[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}
