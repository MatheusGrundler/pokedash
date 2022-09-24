import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { Container } from 'components/UI/Container'
import * as S from './styles'

const Header = () => {
  const { t } = useTranslation('common')
  return (
    <S.Wrapper>
      <Container>
        <S.LogoWrapper>
          <h1>
            <Link href="/">
              <a>PokéDash</a>
            </Link>
          </h1>
          <span>{t('logoSubtitle')}</span>
        </S.LogoWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Header
