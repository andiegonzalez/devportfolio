import React from "react"
import { Link } from "gatsby"

const Card = ({ content, orientation }) => {
  return (
    <div
      className="border-4 border-purple-700 rounded h-48"
      style={{
        display: "grid",
        gridTemplateColumns: orientation === "horizontal" ? "1fr 1fr" : "1fr",
        gridTemplateRows:
          orientation === "horizontal" ? "auto 1fr auto" : "1fr 1fr",
      }}
    >
      <div
        style={{
          backgroundImage: `url('${content.frontmatter.thumb}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          gridArea:
            orientation === "horizontal" ? "1 / 1 / 4 / 2" : "1 / 1 / 2 / 2",
        }}
        className="m-0 rounded-l-sm h-full"
      ></div>
      <h3 className="p-2 font-semibold">{content.frontmatter.title}</h3>
      <p className="p-2">{content.frontmatter.description}</p>
      <Link to={content.frontmatter.path}>Live Demo</Link>
    </div>
  )
}

export default Card
