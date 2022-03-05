import { Cell } from './Cell'
<<<<<<< HEAD
import { solutionLength } from '../../lib/words'
=======
import { unicodeSplit } from '../../lib/words'
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
<<<<<<< HEAD
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(solutionLength - splitGuess.length))
=======
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
>>>>>>> 7d1a95b867d250bd060c4faa244b7eff9c929f10
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
