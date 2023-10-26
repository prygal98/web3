import Total from "components/Total/Total"
import Header from "components/Header/Header"
import Content from "components/Content/Content"

import './index.css'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exo={exercises1} />
      <Content part={part2} exo={exercises2} />
      <Content part={part3} exo={exercises3} />
      <Total part1={exercises1} part2={exercises2} part3={exercises3}  />
    </div>
  )
}

export default App