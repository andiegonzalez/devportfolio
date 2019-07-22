import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteDescription, siteAuthor}) => (
    <header style={{
        marginBottom: `1.45rem`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignContent: `center`,
        fontFamily: `Helvetica`,
        fontWeight: `bold`
    }}>
    <div>
        <Link to="/" style={{
                color: `black`,
                textDecoration: `none`
            }}>
            {siteAuthor}
        </Link>
        <p>{siteDescription}</p>
    </div>
    <div style={{
            margin: `0`,
            maxWidth: 960,
        }}>
        <Link to="/projects" style={{
                color: `black`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            projects
        </Link>
        <Link to="/blog" style={{
                color: `black`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            blog
        </Link>
        <Link to="/contact" style={{
                color: `black`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            contact
        </Link>
    </div>
</header>)

Header.propTypes = {
    siteDescription: PropTypes.string,
    siteAuthor: PropTypes.string
}

Header.defaultProps = {
    siteDescription: ``,
    siteAuthor: ``
}

export default Header
