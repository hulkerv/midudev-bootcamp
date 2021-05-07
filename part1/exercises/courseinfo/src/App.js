const Title = ({course}) => <h1>{course}</h1>;

const Indice123 = (props)=>{
    const {part, exercises} = props
    return <p>{part} {exercises}</p>
}

const Indice4 = ({totalExercises}) => <p>Number of exercises {totalExercises}</p>;

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Title course={course}/>
      
      <Indice123 part={part1} exercises={exercises1}/>
      
      <Indice123 part={part2} exercises={exercises2}/>
      
      <Indice123 part={part3} exercises={exercises3}/>

      <Indice4 totalExercises={totalExercises}/>
    </div>
  )
}

export default App
