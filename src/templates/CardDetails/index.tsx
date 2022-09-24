import CardAttacks from 'components/CardAttacks'
import Header from 'components/Header'
import { Container } from 'components/UI/Container'
import Image from 'next/image'
import React from 'react'
import { Card } from 'types/PokemonCards'

import * as S from './styles'

const CardDetailsTemplate = ({
  id,
  images,
  name,
  attacks,
  resistence,
  subtypes,
  weaknesses,
  supertype
}: Card) => {
  console.log(weaknesses)

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.ImageWrapper>
            <Image
              src={images.large}
              width={600}
              height={825}
              blurDataURL={images.large}
              placeholder="blur"
              alt={name}
            />
          </S.ImageWrapper>

          <S.ContentWrapper>
            <S.ContentNameWrapper>
              <h1>{name}</h1>

              <div>
                <p>
                  {supertype} -{' '}
                  {subtypes?.map((subtype) => (
                    <span key={subtype}>{subtype}</span>
                  ))}
                </p>
              </div>
              <span>ID: {id}</span>
            </S.ContentNameWrapper>
            {attacks && (
              <S.ContentAttacksWrapper>
                <CardAttacks attacks={attacks} />
              </S.ContentAttacksWrapper>
            )}
            <S.ResistencesAndWeaknessesWrapper>
              <div>
                <h3>Weaknesses</h3>
                <ul>
                  {weaknesses?.map((weakness) => (
                    <p key={weakness.type}>
                      {weakness.type} - <span>{weakness.value}</span>
                    </p>
                  ))}
                </ul>
              </div>
            </S.ResistencesAndWeaknessesWrapper>
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
    </>
  )
}

export default CardDetailsTemplate
