import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
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

  const total = course.parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises
    , 0
  )
  return (
    <b>
      total of {total} exercises
    </b>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

export default Course