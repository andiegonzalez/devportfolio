/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectsTemplate = path.resolve(`src/templates/projectpage.js`)
  const blogPostTemplate = path.resolve(`src/templates/blogtemplate.js`)
  const chroniclePostTemplate = path.resolve(`src/templates/blogtemplate.js`)

  return graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/projects/**.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/blogs/**.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      chronicles: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/chronicles/**.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectsTemplate,
        context: {}, // additional data can be passed via context
      })
    })
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
    result.data.chronicles.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: node.frontmatter.path,
        component: chroniclePostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
