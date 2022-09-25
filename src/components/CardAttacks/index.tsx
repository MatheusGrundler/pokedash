import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '@mui/material'
import { FaPlusCircle } from 'react-icons/fa'
import { Attack } from 'types/PokemonCards'
import * as S from './styles'

export type CardAttacksProps = {
  attacks: Attack[]
}

const CardAttacks = ({ attacks }: CardAttacksProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState<Attack | null>()

  const handleOpenModalAttackDetail = useCallback(
    (attackData: Attack) => {
      setIsModalOpen(!isModalOpen)
      setModalData(attackData)
    },
    [isModalOpen]
  )

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <h2>Attacks</h2>
      </S.TitleWrapper>

      <S.AttacksWrapper>
        {attacks.map((attack) => (
          <li key={attack.name}>
            <Button
              endIcon={<FaPlusCircle />}
              onClick={() => handleOpenModalAttackDetail(attack)}
            >
              {attack.name}
            </Button>
          </li>
        ))}
      </S.AttacksWrapper>

      <S.AttacksModalWrapper
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <S.AttacksDetailsWrapper>
          <p className="title">{modalData?.name}</p>
          <p className="description">{modalData?.text}</p>
          <ul className="damageAndCost">
            <li>
              <p>Damage:</p> <span>{modalData?.damage}</span>
            </li>
            <li>
              <p>Energy Cost:</p>
              <span>
                {modalData?.convertedEnergyCost} (
                {modalData?.cost.map((cost) => (
                  <span key={uuidv4()}>{cost}</span>
                ))}
                )
              </span>
            </li>
          </ul>
        </S.AttacksDetailsWrapper>
      </S.AttacksModalWrapper>
    </S.Wrapper>
  )
}

export default CardAttacks
