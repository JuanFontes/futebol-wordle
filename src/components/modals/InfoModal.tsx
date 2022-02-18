import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Adivinhe o nome do time do dia em 6 tentativas! Após cada chute, a cor
        da letra mudará para mostrar o quão perto você está de acertar o nome!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500">
        Parabéns! Todas as letras estão no lugar correto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="present"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500">
        H e I fazem parte do nome do time, porém não estão nos lugares corretos.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
      </div>
      <p className="text-sm text-gray-500">
        A letra U não faz parte do nome do time.{' '}
      </p>
      <p className="text-sm mt-6 text-gray-500">
        Um jogo feito para os amantes de futebol &#x1F1E7;&#x1F1F7;. Veja e
        contribua com o código{' '}
        <a
          href="https://github.com/JuanFontes/futebol-wordle"
          className="underline font-bold"
        >
          aqui
        </a>{' '}
        - baseado no{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          react-wordle
        </a>{' '}
      </p>
    </BaseModal>
  )
}
