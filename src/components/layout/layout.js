import React from 'react'
import PropTypes from 'prop-types'
import siteConfig from '../../../data/siteConfig'

import Header from '../header'
import './layout.css'

const Layout = ({ children }) => (
  <React.Fragment>
    <div>{children}</div>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
