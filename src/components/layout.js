/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import  Header  from '../components/header';
import "./styles/layout.css"
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulLink(sort: {fields: [createdAt], order: ASC }) {
        edges {
          node {
            id
            label
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
        <main>{children}</main>
        <Footer data={data}> 
          Open Source Code by <strong>Virtual Democracies</strong> <a href="mailto:contact@virtualdemocracies.com">Email us</a> &copy; 2020 
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
