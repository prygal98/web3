import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'

localStorage.setItem("counter", JSON.stringify(0)) 

const App = () => { 
  const val = JSON.parse(localStorage.getItem("counter"))
  console.log("valeur du compteur du localstorage: " + val)
  const [ counter, setCounter ] = useState(parseInt(val))

  const changeCount = (delta) => {
    console.log("change count")
    setCounter(counter+delta)
    localStorage.setItem("counter", JSON.stringify(counter+delta)) 
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