import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from 'components/UI/Container'
import * as S from './styles'

const Footer = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Container>
        <p>Select a language</p>
        <S.LanguagesWrapper>
          <ul>
            {router.locales?.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>- {locale}</a>
                </Link>
              </li>
            ))}
          </ul>
        </S.LanguagesWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
