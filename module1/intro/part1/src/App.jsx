
const Part = (props) => {
    return(
      <p>
      {props.part} {props.exo}
    </p>
    )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part} exo={props.exo} />
    </div>
  )
}


const Header = (props) => {
    return(
      <h1>
        {props.course}
      </h1>
    )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
  )
}


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