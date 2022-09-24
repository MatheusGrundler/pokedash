import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from 'components/Header'
import CardAttacks from 'components/CardAttacks'
import { Container } from 'components/UI/Container'
import { Card } from 'types/PokemonCards'

import * as S from './styles'
import { Button } from '@mui/material'
import Footer from 'components/Footer'

const CardDetailsTemplate = ({
  id,
  images,
  name,
  attacks,
  resistances,
  subtypes,
  weaknesses,
  supertype
}: Card) => {
  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.BreadcrumbWrapper>
            <ul>
              <li>
                <Link href="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="separator">
                <span>/</span>
              </li>
              <li>
                <Button disabled>{name}</Button>
              </li>
            </ul>
          </S.BreadcrumbWrapper>
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
                    <li key={weakness.type}>
                      <p> {weakness.type}</p> -<span>{weakness.value}</span>
                    </li>
                  ))}
                  {!weaknesses && (
                    <li>
                      <p>-</p>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <h3>Resistences</h3>
                <ul>
                  {resistances?.map((resistence) => (
                    <li key={resistence.type}>
                      <p> {resistence.type}</p> -{' '}
                      <span>{resistence.value}</span>
                    </li>
                  ))}
                  {!resistances && (
                    <li>
                      <p>-</p>
                    </li>
                  )}
                </ul>
              </div>
            </S.ResistencesAndWeaknessesWrapper>
          </S.ContentWrapper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default CardDetailsTemplate
