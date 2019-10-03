import React from "react"
import { navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Card = ({ content, orientation, btnText }) => {
  const demo = content.frontmatter.demo
  return (
    <div
      tabIndex="0"
      onClick={event => {
        event.persist()
        if (event.target.nodeName !== "A") {
          navigate(content.frontmatter.path)
        }
      }}
      className={`border-2 border-transparent focus:outline-none focus:border-purple-700 cursor-pointer shadow hover:shadow-md bg-white rounded flex max-h-72 ${
        orientation === "horizontal"
          ? "flex-col justify-between"
          : "flex-col sm:flex-row justify-between"
      }`}
    >
      <div
        style={{
          backgroundImage: `url('${content.frontmatter.thumb}')`,
        }}
        className={`bg-cover bg-center h-48 ${
          orientation === "horizontal" ? "" : "sm:w-1/2"
        }`}
      ></div>
      <div
        className={`flex flex-col justify-between h-48 ${
          orientation === "horizontal" ? "" : "sm:w-1/2"
        }`}
      >
        <h3 className="px-2 pt-2 pb-1 sm:px-4 sm:pt-4 sm:pb-2 font-semibold">
          {content.frontmatter.title}
        </h3>
        <p className="px-2 pb-2 sm:px-4 sm:pb-4 text-sm">
          {content.frontmatter.description}
        </p>

        {!demo ? (
          <AniLink
            paintDrip
            color="rebeccapurple"
            className="rounded bg-purple-300 text-purple-900 font-bold py-1 px-4 mb-2 mr-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 self-end"
            to={content.frontmatter.path}
          >
            {btnText}
          </AniLink>
        ) : (
          <a
            className="rounded bg-purple-300 text-purple-900 font-bold py-1 px-4 mb-2 mr-2 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 self-end"
            target="_blank"
            rel="noopener noreferrer"
            href={content.frontmatter.demo}
          >
            {btnText}
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
