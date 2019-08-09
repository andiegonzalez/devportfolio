import React from "react"

const Card = ({ project }) => {
  return (
    <div
      className="p-2 border-2 border-purple-700 rounded"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr auto auto",
      }}
    >
      <img
        src=""
        alt=""
        className="h-full"
        style={{
          gridRow: "1 / 3",
        }}
      />
      <h3>{project.frontmatter.title}</h3>
      <p>{project.frontmatter.description}</p>
      <button>Live Demo</button>
    </div>
  )
}

export default Card
