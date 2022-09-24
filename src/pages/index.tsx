import { GetServerSideProps } from 'next'
import HomeTemplate from 'templates/Home'
import { CardsApiRespose } from 'types/CardsApiRespose'
import { apiPrivate } from 'services/api'

export default function Home(data: CardsApiRespose) {
  return <HomeTemplate cardsData={data} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons = await apiPrivate.get<CardsApiRespose>(
    `/cards?orderBy=name&pageSize=20`
  )

  if (!pokemons) {
    return {
      notFound: true
    }
  }

  // Pass data to the page via props
  return { props: pokemons.data }
}
