import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

// new types
interface CoursePartBase {
  name: string
  exerciseCount: number
}
interface CoursePartDesc extends CoursePartBase {
  description: string
}

interface CoursePartOne extends CoursePartDesc {
  name: "Fundamentals"
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data"
  groupProjectCount: number
}

interface CoursePartThree extends CoursePartDesc {
  name: "Deeper type usage"
  exerciseSubmissionLink: string
}

interface CoursePartFour extends CoursePartDesc {
  name: "Advanced React"
  author: string
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour

const App: React.FC = () => {
  const courseName = "Half Stack application development"

  // this is the new coursePart variable
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    },
    {
      name: "Advanced React",
      exerciseCount: 14,
      description: "A Very Confusing description",
      author: "AFG",
    },
  ]

  const totalParts = courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0
  )

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total totalParts={totalParts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

export default App
