import React from "react"

interface ContentProps {
  courseParts: {
    name: string
    exerciseCount: number
  }[]
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <div>
      {props.courseParts.map((course) => (
        <p key={course.name}>
          {course.name} - {course.exerciseCount}
        </p>
      ))}
    </div>
  )
}

export default Content
