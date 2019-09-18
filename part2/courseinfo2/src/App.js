import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => {
  const moreCourse = courses.map(course =>
    <Course key={course.id} course={course} />)

  return (
    <div>
      <h1>Web development curriculum</h1>
      {moreCourse}
    </div>
  )
}

export default App