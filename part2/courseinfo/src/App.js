import React from 'react'

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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const part1 = props.course.parts[0];
  const part2 = props.course.parts[1];
  const part3 = props.course.parts[2];
  return (
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </div>

  )
}

const Total = (props) => {
  const part1Exercise = props.course.parts[0].exercises;
  const part2Exercise = props.course.parts[1].exercises;
  const part3Exercise = props.course.parts[2].exercises;
  return (
    <div>
      Number of exercises {part1Exercise + part2Exercise + part3Exercise}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

export default App