import React from "react"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Card = ({ content, orientation, btnText }) => {
  const demo = content.frontmatter.demo
  return (
    <div
      onClick={event => {
        event.persist()
        if (event.target.nodeName !== "A") {
          navigate(content.frontmatter.path)
        }
      }}
      className={
        orientation === "horizontal"
          ? "cursor-pointer shadow bg-white rounded h-64 max-w-full"
          : "cursor-pointer shadow bg-white rounded h-72 max-w-full"
      }
      style={{
        display: "grid",
        gridTemplateColumns: orientation === "horizontal" ? "1fr 1fr" : "",
        gridTemplateRows:
          orientation === "horizontal" ? "auto 1fr auto" : "1fr auto",
      }}
    >
      <div
        style={{
          backgroundImage: `url('${content.frontmatter.thumb}')`,
          gridArea:
            orientation === "horizontal" ? "1 / 1 / 4 / 2" : "1 / 1 / 2 / 2",
        }}
        className="m-0 rounded-l-sm h-full bg-cover bg-center"
      ></div>
      <h3 className="p-4 font-semibold">{content.frontmatter.title}</h3>
      <p className="p-4">{content.frontmatter.description}</p>
      {!demo ? (
        <AniLink
          paintDrip
          color="rebeccapurple"
          style={{
            justifySelf: "end",
          }}
          className="rounded bg-purple-700 text-white py-1 px-4 mb-2 mr-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
          to={content.frontmatter.path}
        >
          {btnText}
        </AniLink>
      ) : (
        <a
          style={{
            justifySelf: "end",
          }}
          className="rounded bg-purple-700 text-white py-1 px-4 mb-2 mr-2 hover:bg-purple-900 focus:outline-none focus:bg-purple-900"
          target="_blank"
          rel="noopener noreferrer"
          href={content.frontmatter.demo}
        >
          {btnText}
        </a>
      )}
    </div>
  )
}

export default Card
