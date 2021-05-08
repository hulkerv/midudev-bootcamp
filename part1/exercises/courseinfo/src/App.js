const Part = ({part}) => <p>{part}</p>;

const Header = ({header}) => <h1>{header}</h1>;

const Content = ({part1, part2, part3})=> {
    return(
        <div>
            <Part part={part1}/>
            <Part part={part2}/>
            <Part part={part3}/>
        </div>
    )
}

const Total = ({total}) => <p>Number of exercises {total}</p>;

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header header={course}/>
      
      <Content 
            part1={part1 + ' ' + exercises1}
            part2={part2 + ' ' + exercises2}
            part3={part3 + ' ' + exercises3}/>
      
      <Total total={total}/>
    </div>
  )
}

export default App
