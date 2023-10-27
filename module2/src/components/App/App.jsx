import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increase = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Display compteur={counter}/>
      <Button onClick={increase} texte={"incrementer"} />
      <Button onClick={resetCounter} texte={"reset"} />
    </div>
  )
}

export default App