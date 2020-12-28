import React from "react"
import { CoursePart } from "../App"

interface PartProps {
  coursePart: CoursePart
}

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}

const Part: React.FC<PartProps> = (props) => {
  const part = props.coursePart
  switch (part.name) {
    case "Fundamentals":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>Exercise Count : {part.exerciseCount}</p>
          <p>{part.description}</p>
        </div>
      )
    case "Using props to pass data":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>Exercise Count : {part.exerciseCount}</p>
          <p>{part.groupProjectCount}</p>
        </div>
      )
    case "Deeper type usage":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>Exercise Count : {part.exerciseCount}</p>
          <p>{part.description}</p>
          <p>Link : {part.exerciseSubmissionLink}</p>
        </div>
      )
    case "Advanced React":
      return (
        <div>
          <h2>{part.name}</h2>
          <p>Exercise Count : {part.exerciseCount}</p>
          <p>{part.description}</p>
          <p>Author : {part.author}</p>
        </div>
      )
    default:
      return assertNever(part)
  }
}

export default Part
