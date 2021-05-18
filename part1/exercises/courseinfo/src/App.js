const Parts = ({part1, part2, part3}) => {
    return(
        <div>
            <p>{part1}</p>
            <p>{part2}</p>
            <p>{part3}</p>
        </div>
    );
};

const Header = ({header}) => <h1>{header}</h1>;

const Content = ({part1, part2, part3})=> <Parts part1={part1} part2={part2} part3={part3}/>;

const Total = ({total}) => <p>Number of exercises {total}</p>;

const App = () => {
  
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
  
  const total = course.parts[0].exercises + course.parts[1].exercises  + course.parts[2].exercises 
  
  return (
    <div>
      <Header header={course.name}/>
      
      <Content 
            part1={ course.parts[0].name + ' ' +  course.parts[0].exercises}
            part2={ course.parts[1].name + ' ' +  course.parts[1].exercises}
            part3={ course.parts[2].name + ' ' +  course.parts[2].exercises}/>
      
      <Total total={total}/>
    </div>
  )
}

export default App
