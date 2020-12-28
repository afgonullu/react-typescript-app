import React from "react"
import Part from "./Part"
import { CoursePart } from "../App"

interface ContentProps {
  courseParts: CoursePart[]
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((course) => (
        <Part key={course.name} coursePart={course} />
      ))}
    </div>
  )
}

export default Content
