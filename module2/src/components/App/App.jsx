import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const changeCount = (delta) => {
    console.log("change vount")
    setCounter(counter+delta)
  }

  return (
    <div>
      <Display compteur={counter}/>
      <Button changeCount={changeCount} text={"plus"} delta={1} />
      <Button changeCount={changeCount} text={"zero"} delta={-counter} />
      <Button changeCount={changeCount} text={"minus"} delta={-1} />
    </div>
  )
}

export default App