import { Button } from '@mui/material'
import { FaPlusCircle } from 'react-icons/fa'
import { Attack } from 'types/PokemonCards'
import * as S from './styles'

export type CardAttacksProps = {
  attacks: Attack[]
}

const CardAttacks = ({ attacks }: CardAttacksProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h2>Attacks</h2>
      </S.TitleWrapper>

      <S.AttacksWrapper>
        {attacks.map((attack) => (
          <li key={attack.name}>
            <Button endIcon={<FaPlusCircle />}>{attack.name}</Button>
          </li>
        ))}
      </S.AttacksWrapper>
    </S.Wrapper>
  )
}

export default CardAttacks
