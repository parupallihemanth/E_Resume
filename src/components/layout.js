/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Children } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Reusable/Navbar"
import Footer from './Reusable/Footer'
import './bootstrap.min.css'
import "./layout.css"


const Layout = ({ children }) => {
  
  return(
    <div>
    <Navbar />  
    
    {children}
    
    <Footer />
    </div>
    
  )
  
  
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
