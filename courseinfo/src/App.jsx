
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} numOfExercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} numOfExercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} numOfExercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p> Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part}, number of exercises: {props.numOfExercises} </p>
    </>
  )
}

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

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
