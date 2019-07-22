import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (<header style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignContent: `center`,
        fontFamily: `Helvetica`,
        fontWeight: `bold`
    }}>

    <Link to="/" style={{
            color: `white`,
            textDecoration: `none`
        }}>
        {siteTitle}
    </Link>
    <div style={{
            margin: `0`,
            maxWidth: 960,
        }}>
        <Link to="/projects" style={{
                color: `white`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            projects
        </Link>
        <Link to="/blog" style={{
                color: `white`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            blog
        </Link>
        <Link to="/contact" style={{
                color: `white`,
                textDecoration: `none`,
                margin: `0 0.5em`
            }}>
            contact
        </Link>
    </div>
</header>)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header
