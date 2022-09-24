import { GetServerSideProps } from 'next'
import { apiPrivate } from 'services/api'
import CardDetailsTemplate from 'templates/CardDetails'
import { CardApiRespose } from 'types/CardApiRespose copy'
import { Card as CardProps } from 'types/PokemonCards'

export default function Card(data: CardProps) {
  return <CardDetailsTemplate {...data} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pokemon = await apiPrivate.get<CardApiRespose>(`/cards/${params!.id}`)

  if (!pokemon) {
    return {
      notFound: true
    }
  }

  return { props: pokemon.data.data }
}
