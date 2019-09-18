import React from 'react'

const Header = props =>
  <h2>{props.course}</h2>

const Total = ({ parts }) => {
  console.log(parts)
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  console.log(total)
  return (
    <h4>Total of {total} exercises</h4>
  )
}

const Part = ({ parts }) => {
  console.log(parts)
  return (
    parts.map(part =>
      <p key={part.id}>
        {part.name + " " + part.exercises}
      </p>)


  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <Part parts={parts} />
  )
}

const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div >
  )
}
export default Course