import { Cell } from './Cell'
import { solutionLenght } from '../../lib/words'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solutionLenght))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
