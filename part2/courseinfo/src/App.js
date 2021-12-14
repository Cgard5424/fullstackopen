import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  //console.log(course)
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1> {props.course.name}</h1>
    </div>
  )
}

const Content = ({course}) => {

  return (
    <div>
      {course.parts.map(courses =>
        <Part key={courses.id} part={courses.name} exercises={courses.exercises}
        />
        )}
    </div>

  )
}

const Total = ({course}) => {
  //console.log(course.parts)

  const total = course.parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises
    , 0
  )
  //console.log(total)
  return (
    <b>
      total of {total} exercises
    </b>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

export default App