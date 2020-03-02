import { Link } from "gatsby"
import PropTypes from "prop-types"

import logo from "../images/logo-designcode.svg"
import "./styles/header.css"

import React, { Component } from 'react';

class Header extends Component {

  state = {
    hasScrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }


  handleScroll = (e) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    }
    else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    
    return (
      <div className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
       <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"/></Link>
      <Link to="courses">Courses</Link>
      <Link to="workshops">Workshops</Link>
      <Link to="downloads">Downloads</Link>
      <Link to="/buy"><button>Buy</button></Link>
  
    </div>
  </div>
    );
  }
}

export default Header;