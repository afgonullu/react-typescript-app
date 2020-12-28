import React from "react"

interface TotalProps {
  totalParts: number
}

const Total: React.FC<TotalProps> = (props) => {
  return <p>Number of exercises {props.totalParts}</p>
}

export default Total
