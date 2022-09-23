import Link from 'next/link'
import { Container } from 'components/UI/Container'
import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.LogoWrapper>
          <h1>
            <Link href="/">
              <a>PokéDash</a>
            </Link>
          </h1>
          <span>Conheça mais do seu pokémon favorito</span>
        </S.LogoWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Header
