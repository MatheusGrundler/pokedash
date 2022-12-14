import * as S from './styles'
import { Card } from 'types/PokemonCards'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'components/UI/Container'
import Slider, { SliderSettings } from 'components/Slider'
import MediaMatch from 'components/UI/MediaMatch'
import { useEffect, useRef } from 'react'
import Notfound from 'components/NotFound'

export type CardsListProps = {
  cards: Card[]
}
const CardsList = ({ cards }: CardsListProps) => {
  const sliderRef = useRef(null)

  const sliderOptions: SliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    //@ts-ignore
    sliderRef.current?.slickGoTo(0)
  }, [cards])

  return (
    <Container>
      <S.Wrapper>
        <MediaMatch lessThan="md">
          <S.MobileListWrapper>
            <Slider settings={sliderOptions} ref={sliderRef}>
              {cards.map((card) => (
                <S.CardWrapper key={card.id}>
                  <Image
                    src={card.images.small}
                    layout="intrinsic"
                    width={250}
                    height={349}
                    placeholder={'blur'}
                    blurDataURL={card.images.small}
                    alt={`${card.name}-${card.id}`}
                  />
                  <S.CardInfosWrapper>
                    <S.CardInfosWrapper>
                      <ul>
                        <li>
                          <span>Name:</span>
                          <p>{card.name}</p>
                        </li>
                        <li>
                          <span>ID:</span>
                          <p>{card.id}</p>
                        </li>
                        <li>
                          <span>Type(s):</span>
                          {card.subtypes?.map((type) => (
                            <p key={type}>{type}</p>
                          ))}
                        </li>
                      </ul>
                      <Link href={`/card/${card.id}`} key={card.id}>
                        <a>More informations</a>
                      </Link>
                    </S.CardInfosWrapper>
                  </S.CardInfosWrapper>
                </S.CardWrapper>
              ))}
            </Slider>
          </S.MobileListWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="md">
          <S.DesktopListWrapper>
            {cards?.map((card) => (
              <Link href={`/card/${card.id}`} key={card.id}>
                <a>
                  <S.CardWrapper>
                    <Image
                      src={card.images.small}
                      layout="intrinsic"
                      width={300}
                      height={399}
                      placeholder={'blur'}
                      blurDataURL={card.images.small}
                      alt={`${card.name}-${card.id}`}
                    />
                    <S.CardInfosWrapper>
                      <ul>
                        <li>
                          <span>Name:</span>
                          <p>{card.name}</p>
                        </li>
                        <li>
                          <span>ID:</span>
                          <p>{card.id}</p>
                        </li>
                        <li>
                          <span>Type(s):</span>

                          {card.subtypes?.map((type) => (
                            <p key={type}>{type}</p>
                          ))}
                        </li>
                      </ul>
                    </S.CardInfosWrapper>
                  </S.CardWrapper>
                </a>
              </Link>
            ))}
          </S.DesktopListWrapper>
        </MediaMatch>

        {cards.length === 0 && (
          <Notfound primaryMessage="Nenhum card encontrado" />
        )}
      </S.Wrapper>
    </Container>
  )
}

export default CardsList
