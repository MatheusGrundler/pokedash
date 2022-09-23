import { TbPokeball } from 'react-icons/tb'

import * as S from './styles'

export type NotfoundProps = {
  primaryMessage: string
}

const Notfound = ({ primaryMessage }: NotfoundProps) => {
  return (
    <S.Wrapper>
      <S.TitleMessage>
        <TbPokeball />
        <TbPokeball />
        <p>PS!</p>
      </S.TitleMessage>
      <S.PrimaryMessage>{primaryMessage}</S.PrimaryMessage>
    </S.Wrapper>
  )
}

export default Notfound
